"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client"
import { z } from "zod"
import { revalidatePath } from "next/cache"

export const switchFollow = async (userId:string) => {
    const {userId:currentUserId} = auth()

    if(!currentUserId){
        throw new Error("User not authenticated!")
    }

    try{

        const existingFollow = await prisma.follower.findFirst({
            where:{
                followerId:currentUserId,
                followingId:userId,
            },
        });

        if(existingFollow){
            await prisma.follower.delete({
                where:{
                    id:existingFollow.id,
                },
            });
        }else{
            const existingFollowRequest = await prisma.followRequest.findFirst({
                where:{
                    senderId:currentUserId,
                    receiverId:userId,
                },
            });

            if(existingFollowRequest){
                await prisma.followRequest.delete({
                    where:{
                        id:existingFollowRequest.id,
                    },
                });
            }else{
                await prisma.followRequest.create({
                    data:{
                        senderId:currentUserId,
                        receiverId:userId,
                    },
                });
            }
        }

    }catch(err){
        console.log(err)
        throw new Error("Something went wrong!")
    }
}

export const switchBlock = async (userId:string)=>{

    const {userId:currentUserId} = auth()

    if(!currentUserId) {
        throw new Error("User is not authenticated!")
    }

    try{
        const existingBlock = await prisma.block.findFirst({
            where:{
                blockerId:currentUserId,
                blockedId:userId,
            },
        });

        if(existingBlock){
            await prisma.block.delete({
                where:{
                    id:existingBlock.id,
                },
            });
        }else{
            await prisma.block.create({
                data:{
                    blockerId:currentUserId,
                    blockedId:userId,
                },
            });
        }

    }catch(err){
        console.log(err)
        throw new Error("Something went wrong!");
    }

}

export const acceptFollowRequest = async (userId:string)=>{
    const {userId:currentUserId} = auth()

    if(!currentUserId) {
        throw new Error("User is not authenticated!")
    }

    try{

    const existingFollowRequest = await prisma.followRequest.findFirst({
        where:{
            senderId:userId,
            receiverId:currentUserId,
        },
    });

    if(existingFollowRequest){
        await prisma.followRequest.delete({
            where:{
                id: existingFollowRequest.id,
            },
        });

        await prisma.follower.create({
            data:{
                followerId: userId,
                followingId: currentUserId,
            },
        });
    }
}catch(err){
    console.log(err)
    throw new Error("Something went wrong!")
}
}

export const declineFollowRequest = async (userId:string)=>{
    const {userId:currentUserId} = auth()

    if(!currentUserId) {
        throw new Error("User is not authenticated!")
    }

    try{

    const existingFollowRequest = await prisma.followRequest.findFirst({
        where:{
            senderId:userId,
            receiverId:currentUserId,
        },
    });

    if(existingFollowRequest){
        await prisma.followRequest.delete({
            where:{
                id: existingFollowRequest.id,
            },
        });
    }
}catch(err){
    console.log(err)
    throw new Error("Something went wrong!")
}
}

export const updateProfile = async (formData:FormData) => {
    const fields = Object.fromEntries(formData)

    const filteredFileds = Object.fromEntries(
        Object.entries(fields).filter(([_,value])=>value !=="")
    )

    console.log(fields)

    const Profile = z.object({
        cover: z.string().optional(),
        name: z.string().max(60).optional(),
        surname: z.string().max(60).optional(),
        description: z.string().max(150).optional(),
        city: z.string().max(60).optional(),
        school: z.string().max(60).optional(),
        work: z.string().max(60).optional(),
        website: z.string().max(60).optional(),
    })

    const validatedFields = Profile.safeParse(filteredFileds)

    if(!validatedFields.success){
        console.log(validatedFields.error.flatten().fieldErrors)
        return "err"
    }

    const{userId} = auth()

    if(!userId){
        return "err"
    }

    try{
        await prisma.user.update({
            where:{
                id:userId,
            },
            data:validatedFields.data,
        });
    }catch(err){
        console.log(err)
    }
}

export const switchLike = async (postId:number)=>{
    const {userId} = auth ()

    if(!userId) throw new Error("User is not authenticated!")

    try{
        const existingLike = await prisma.like.findFirst({
            where:{
                postId,
                userId
            }
        })

        if(existingLike){
            await prisma.like.delete({
                where:{
                    id:existingLike.id
                }
            })
        }
        else{
            await prisma.like.create({
                data:{
                    postId,
                    userId,
                },
            });
        }
    }catch(err){
        console.log(err)
        throw new Error("Something went wrong!")
    }
}

export const addComment = async (postId:number, desc:string,) => {
    const {userId} = auth()

    if(!userId) throw new Error("User is not authenitcated!")

    try{
        const createdComment = await prisma.comment.create({
            data:{
                desc,
                userId,
                postId,
            },
            include:{
                user: true,
            },
        });

        return createdComment
    }catch(err){
        console.log(err)
        throw new Error("Somethnig went wrong!")
    }
}


export const addPost = async (formData:FormData)=>{

    const desc = formData.get("desc") as string

    const Desc = z.string().min(1).max(255)

    const validatedDesc = Desc.safeParse(desc)

    if(!validatedDesc.success){
        //TODO
        console.log("Description is not valid!")
        return
    }
    const {userId} = auth()

    if(!userId) throw new Error("User is not authenitcated!")

    try{
        await prisma.post.create({
            data:{
                desc:validatedDesc.data,
                userId,
            },
        });

        revalidatePath("/")
    }catch(err){
        console.log(err)
    }
}

export const deletePost = async (postId:number)=>{

    const {userId} = auth()

    if(!userId) throw new Error("User is not authenticated!")

    try{
        await prisma.post.delete({
            where:{
                id:postId,
                userId,
            },
        });
        revalidatePath("/");
    }catch(err){
        console.log(err)
    }
}