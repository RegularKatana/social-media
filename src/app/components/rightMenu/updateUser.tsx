"use client"

import { updateProfile } from "@/lib/actions"
import { User } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import UpdateButton from "./UpdateButton"

const UpdateUser = ({user}:{user:User}) => {

    const [open,setOpen] = useState(false)

    const handleClose = ()=> {
        setOpen(false)
    }

    return(
        <div className="">
  <span className="text-blue-500 text-sm cursor-pointer" onClick={() => setOpen(true)}>Update</span>
  {open && (
    <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
      <form action={updateProfile} className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative">
        <h1>Update Profile</h1>
        <div className="mt-4 text-xs text-gray-500">
          Use the navbar profile to change the avatar or username
        </div>
        <div className="flex flex-col gap-4 my-4">
          <label htmlFor="">Cover Picture</label>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={user.cover || "noCover.png"} alt="" width={48} height={32} className="w-12 h-8 rounded-md object-cover" />
            <span className="text-xs underline text-gray-500">Change</span>
          </div>
        </div>   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xs text-gray-500">First Name</label>
            <input type="text" placeholder={user.name || "John"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
            name="name"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xs text-gray-500">Surname</label>
            <input type="text" placeholder={user.surname || "Wick"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
            name="surname"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xs text-gray-500">Description</label>
            <input type="text" placeholder={user.description || "I like bullets"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
            name="description"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xs text-gray-500">City</label>
            <input type="text" placeholder={user.city || "New York"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
            name="city"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xs text-gray-500">School</label>
            <input type="text" placeholder={user.school || "MIT"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
            name="school"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xs text-gray-500">Work</label>
            <input type="text" placeholder={user.work || "Hitman"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
            name="work"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xs text-gray-500">Website</label>
            <input type="text" placeholder={user.webiste || "johnwick.com"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
            name="webiste"/>
          </div>
        </div>
        <UpdateButton/>
        <div className="absolute text-lg right-3 top-2 cursor-pointer" onClick={handleClose}>X</div>
      </form>
    </div>
  )}
</div>

    )
}

export default UpdateUser