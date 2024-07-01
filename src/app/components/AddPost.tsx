import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const AddPost = () => {

    const {userId} = auth()

    return(
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            {/* AVATAR */}
            <img src="https://images.pexels.com/photos/26547193/pexels-photo-26547193/free-photo-of-path-through-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            alt="" 
            width={48} 
            height={48} 
            className="w-12 h-12 object-cover rounded-full"></img>
            {/* POST */}
            <div className="flex-1">
                {/* TEXT INPUT */}
                <form action="" className="flex gap-4">
                    <textarea 
                    placeholder="What's on your mind?" 
                    className="flex-1 bg-slate-100 rounded-lg p-2" 
                    name="desc"></textarea>
                    <img src="/emoji.png" 
                    alt="" 
                    width={20} 
                    height={20} 
                    className="w-5 h-5 cursor-pointer self-end"></img>
                    <button>Send</button>
                </form>
                {/* POST OPTIONS */}
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src="/addimage.png" alt="" width={20} height={20}></img>
                        Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src="/addVideo.png" alt="" width={20} height={20}></img>
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src="/addevent.png" alt="" width={20} height={20}></img>
                        Eevent
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src="/poll.png" alt="" width={20} height={20}></img>
                        Poll
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddPost