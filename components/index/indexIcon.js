export default function indexIcon({ path, link, tooltip, color }) {
    return (
        <div className="group my-5 mx-10 sm:mx-2 flex flex-col justify-between items-center">
            <a href={link}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-20 w-20 rounded-full fill-gray-100 p-4 hover:fill-${color} hover:bg-white bg-clip-content  hover:cursor-pointer hover:scale-95 transition duration-300 ease-in-out`} viewBox="0 0 24 24">
                    <path d={path} />
                </svg>
            </a>
            <span className="px-4 py-1 bg-black text-white text-sm rounded-full scale-0 group-hover:scale-90 transition duration-300 ease-out">
                {tooltip}
            </span>
        </div>
    )
}