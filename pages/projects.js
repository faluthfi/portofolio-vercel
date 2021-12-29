


export default function Projects() {

  return (
    <div className="justify-center align-middle h-full min-h-screen">
      <div className="flex justify-center w-full h-full min-h-screen">
        <div className="flex flex-col  w-[80%] gap-4 min-h-1/2 text-dsfont xl:w-full ">
          <div className="border-b-2 grid grid-cols-3 grid-rows-5 h-3/4 gap-x-4 p-4 border-2 border-blue-800 mdlg:grid-rows-5 mdlg:grid-cols-1 mdlg:gap-y-4 sm:auto-rows-max">
            <div className=" row-span-5 mdlg:col-span-1 sm:row-span-2">
              <img src="/web1.png" alt="" className="h-full mdlg:w-full object-contain object-center bg-gray-700 border-2 border-blue-800" />
            </div>
            <div className=" col-span-2 row-span-1 border-2 border-blue-800">
              <h1 className="text-white text-4xl font-bold sm:text-xl">Bootcamp Project</h1>
            </div>
            <div className=" col-span-2 row-span-2 sm:text-xs text-justify border-2 border-blue-800">This is a bootcamp (Binar Academy) project that i am involved in, the front-end was done using nextJS framework while the back-end was done using expressJS with postgresql as database. Most of my contribution is at the back-end and deployment, with some in the front-end especially the rock paper scissor game and redux</div>
            <div className=" col-span-2 row-span-2">
              <div className="grid grid-cols-1 grid-rows-5 h-full border-2 border-blue-800">
                <div className=" row-span-3 grid grid-cols-1 text-sm mb-4 border-2 border-blue-800 sm:row-span-4 sm:mb-1">
                  <div className=" row-span-2 flex flex-row  border-2 border-blue-800">
                    <div className=" row-span-2 basis-[10%] justify-center align-middle items-center flex">Front-end</div>
                    <div className=" row-span-2 basis-[90%] flex flex-row justify-center items-center align-middle border-b-2 border-gray-400 sm:text-xs sm:flex-wrap">
                      <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">ReactJS</h1>
                      <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">Redux</h1>
                      <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">NextJS</h1>
                      <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">Bootstrap</h1>
                    </div>
                  </div>
                  <div className=" row-span-2 flex flex-row border-2 border-blue-800">
                  <div className=" row-span-2 basis-[10%] justify-center items-center flex">Back-end</div>
                    <div className=" row-span-2 basis-[90%] flex flex-row justify-center items-center align-middle sm:text-xs sm:flex-wrap">
                      <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">ExpressJS</h1>
                      <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">NodeJS</h1>
                      <h1 className="bg-black text-dshovertxt px-5 mx-2 rounded-2xl sm:m-1">PostgreSQL</h1>
                    </div>
                  </div>
                </div>
                <div className=" row-span-2 flex flex-row justify-center items-center text-md border-2 border-blue-800 sm:text-md">
                  <a href="#" className=" px-6 py-2 mx-2  bg-black text-white rounded-2xl hover:bg-gray-500 hover:scale-90 transition duration-300 ease-in-out sm:py-0 sm:px-4">
                    Repo
                  </a>
                  <a href="#" className=" px-6 py-2 mx-2  bg-black text-white rounded-2xl hover:bg-gray-500 hover:scale-90 transition duration-300 ease-in-out sm:py-0 sm:px-4">
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-1/4">
            <h1>1</h1>
          </div>
          <div className=" h-1/4">
            <h1>1</h1>
          </div>
          <div className=" h-1/4">
            <h1>1</h1>
          </div>
          <div className=" h-1/4">
            <h1>1</h1>
          </div>
        </div>
      </div>
      <div className="h-fit">
        <h1>And More to come...</h1>
      </div>
    </div>
  )
}
