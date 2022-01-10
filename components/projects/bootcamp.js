export default function Bootcamp() {
    return (
        <div className="border-b-2 border-gray-600 grid grid-cols-3 grid-rows-5 min-h-3/4 gap-x-4 p-4  mdlg:grid-rows-5 mdlg:grid-cols-1 mdlg:gap-y-4 sm:gap-y-2 sm:grid-rows-12">
            <div className=" row-span-5 mdlg:col-span-1 sm:row-span-4">
                <img src="/project-1.png" alt="" className="h-full mdlg:w-full object-contain object-center  ring-2 ring-gray-700" />
            </div>
            <div className=" col-span-2 row-span-1 sm:row-span-1">
                <h1 className="text-white text-4xl font-bold sm:text-3xl">Bootcamp Project</h1>
            </div>
            <div className=" col-span-2 row-span-2 sm:text-sm text-justify sm:row-span-3">
                This is a bootcamp (Binar Academy) project that i am involved in, it's about a game website with user authentication and other features. The front-end was done using nextJS framework while the back-end was done using expressJS with postgresql as database. Most of my contribution is at the back-end and deployment, with some in the front-end especially the rock paper scissor game and redux. since the website is hosted on heroku it might takes time to load the website
            </div>
            <div className=" col-span-2 row-span-2 sm:row-span-4">
                <div className="grid grid-cols-1 grid-rows-5 h-full ">
                    <div className=" row-span-3 grid grid-cols-1 text-sm mb-4  sm:row-span-4 sm:mb-1">
                        <div className=" row-span-2 flex flex-row">
                            <div className=" row-span-2 basis-[10%] justify-center align-middle items-center flex pb-4 sm:pb-1">Front-end</div>
                            <div className=" row-span-2 basis-[90%] flex flex-row justify-center items-center align-middle border-b-2 border-gray-400 sm:text-xs sm:flex-wrap pb-4 sm:pb-1 ">
                                <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">ReactJS</h1>
                                <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">Redux</h1>
                                <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">NextJS</h1>
                                <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">Bootstrap</h1>
                            </div>
                        </div>
                        <div className=" row-span-2 flex flex-row ">
                            <div className=" row-span-2 basis-[10%] justify-center items-center flex pt-4 sm:pt-1">Back-end</div>
                            <div className=" row-span-2 basis-[90%] flex flex-row justify-center items-center align-middle sm:text-xs sm:flex-wrap pt-4 sm:pt-1">
                                <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">ExpressJS</h1>
                                <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">NodeJS</h1>
                                <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">PostgreSQL</h1>
                            </div>
                        </div>
                    </div>
                    <div className=" row-span-2 flex flex-row justify-center items-center text-md  sm:text-md mt-6">
                        <a href="https://github.com/FSW-Kelompok-3/front-end-next" target='_blank' className=" px-6 py-[0.5] mx-2  bg-gray-300 text-black rounded-2xl hover:bg-gray-100 hover:scale-90 transition duration-300 ease-in-out sm:py-0 sm:px-4">
                            Repo - Frontend
                        </a>
                        <a href="https://github.com/ryowibowo/kelompok3-challenge9-api" target='_blank' className=" px-6 py-[0.5] mx-2  bg-gray-300 text-black rounded-2xl hover:bg-gray-100 hover:scale-90 transition duration-300 ease-in-out sm:py-0 sm:px-4">
                            Repo - Backend
                        </a>
                        <a href="http://nextjs-kel3.herokuapp.com/" target='_blank' className=" px-6 py-[0.5] mx-2  bg-gray-300 text-black rounded-2xl hover:bg-gray-100 hover:scale-90 transition duration-300 ease-in-out sm:py-0 sm:px-4">
                            Live Site
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}