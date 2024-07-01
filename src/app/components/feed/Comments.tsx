
const Comments = () => {
    return(
        <div className="">
            {/* WRITE */}
            <div className="flex items-center gap-4">
                <img src="https://images.pexels.com/photos/24405949/pexels-photo-24405949/free-photo-of-the-aurora-bore-is-shown-in-the-sky-over-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                 alt="" 
                 width={32} 
                 height={32} 
                 className="w-8 h-8 rounded-full"/>
                 <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1" />
                    <img src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer"/>
                 </div>
            </div>
            {/* COMMENTS */}
            <div className="">
                {/* COMMENT */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* AVATAR */}
                    <img src="https://images.pexels.com/photos/24405949/pexels-photo-24405949/free-photo-of-the-aurora-bore-is-shown-in-the-sky-over-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="" 
                        width={40} 
                        height={40} 
                        className="w-10 h-10 rounded-full"/>
                    {/* DESCRIPTION */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Bernice Spencer</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Blanditiis maiores similique dicta suscipit ea, iusto molestias corrupti, 
                            delectus eum architecto quos quia rerum fugit alias vel obcaecati molestiae exercitationem non.</p>
                            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                                <div className="flex items-center gap-4">
                                    <img src="/like.png" alt="" width={12} height={12} className="cursor-pointer w-4 h-4"></img>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-gray-500">123 Likes</span>
                                </div>
                                <div className="">Reply</div>
                            </div>
                    </div>
                    {/* ICON */}
                    <img src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4"></img>
                </div>
            </div>
        </div>
    )
}
export default Comments