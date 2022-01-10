import {Portofolio,Bootcamp} from '../components/projects'



export default function Projects() {

  return (
    <div className="justify-center align-middle h-full min-h-screen mt-10">
      <div className="flex justify-center w-full h-full min-h-screen">
        <div className="flex flex-col  w-[80%] gap-4 min-h-1/2 text-dsfont xl:w-full ">
          <Bootcamp/>
          <Portofolio/>
        </div>
      </div>
      <div className="h-fit flex justify-center align-middle items-center text-white">
        <h1>And More to come...</h1>
      </div>
    </div>
  )
}
