import Image from 'next/image';


const Ad = ({ size } : { size : "sm" | "md" | "lg" }) => {
    return(
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            {/* TOP */}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span>Sponsored Ads</span>
                <img src="/more.png" alt="" width={16} height={16} />
            </div>
            {/* BOTTOM */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size ==="md" ? "h-36" : "h-48"}`}>
                <Image src="https://images.pexels.com/photos/14476397/pexels-photo-14476397.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="" 
                fill 
                className='rounded-lg object-cover' />
                </div>
                <div className="flex itmes-center gap-4">
                <Image src="https://images.pexels.com/photos/14476397/pexels-photo-14476397.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="" 
                    width={24}
                    height={24}
                    className='rounded-full w-6 h-6 object-cover' />
                    <span className='text-blue-500 font-medium'>BigChef Longue</span>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {size === "sm" ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit." : 
                    size === "md" ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis temporibus consectetur id, deleniti odit amet quis consequatur delectus"
                    : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis temporibus consectetur id, deleniti odit amet quis consequatur delectus ea, rerum enim dolor illo sed repellendus dolores minima omnis voluptatum itaque?"}
                </p>
                <button className='bg-gray-200 text-gray-500 p-2 text-sm rounded-lg'>Learn more</button>
            </div>
        </div>
    )
}
export default Ad