import Navbar from '../components/navbar'
import { Fragment, useState } from 'react'
import Header from '../components/header'

const initialData = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

export default function Home() {
  const [isSubmitted, setSubmit] = useState(false)
  const [data, setData] = useState(initialData)

  const handleSubmit = (e) => {
    setHistory([...history, data])
    setSubmit(true)
    setData(initialData)
    e.preventDefault()
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }


  return (
    <Fragment>
      <div className='m-auto mt-auto h-full min-w-3/4  justify-center align-middle items-center'>
        <div className='mb-5 font-semibold text-2xl sm:text-md'>
          <h1 className='text-center'>
            Feel free to contact me at <a href='mailto:faikar.al@gmail.com' className='hover:text-blue-700'>faikar.al@gmail.com</a> or use the form below
          </h1>
        </div>
        <div className='flex justify-center w-full'>
          <form className='grid grid-cols-1 grid-rows-6 gap-10 w-3/4 text-2xl sm:text-xl sm:w-5/6' onSubmit={handleSubmit}>
            <div className=' flex flex-col border-2 p-4   border-blue-900'>
              <h2 className='flex p-2'>
                Name<h2 className='text-red-700'>*</h2>
              </h2>
              <input type="text" name="name" value={data.name} className='border-2 border-gray-500 focus:border-gray-800 focus:ring-gray-800 px-1 rounded-lg' placeholder='Enter your name here' onChange={handleChange} required />
            </div> 
            <div className='flex flex-col border-2 p-4 border-blue-900'> 
              <h2 className='flex p-2'> 
                Email<h2 className='text-red-700'>*</h2>
              </h2 >
              <input type="email" name="email" value={data.email} className='border-2 border-gray-500 focus:border-gray-800 focus:ring-gray-800 px-1 rounded-lg' placeholder='Enter your email here' onChange={handleChange} required />
            </div>
            <div className='flex flex-col border-2 p-4 border-blue-900'>
              <h2 className='p-2'>
                Subject
              </h2>
              <input type="text" name="subject" value={data.subject} className='border-2 border-gray-500 focus:border-gray-800 focus:ring-gray-800 sm:text-ellipsis px-1 rounded-lg' onChange={handleChange} placeholder='Enter the subject of the message here' />
            </div>
            <div className='flex flex-col border-2 p-4 border-blue-900 row-span-2'>
              <h2 className='p-2'>
                Message
              </h2>
              <textarea type="text" name="message" value={data.message} className='border-2 border-gray-500 focus:border-gray-800 focus:ring-gray-800 h-full text-xl row-span-3 resize-none px-1 rounded-lg' onChange={handleChange} placeholder='Enter your message here' />
            </div>
            <div className='flex flex-col border-2 p-4 border-blue-900 items-center'>
              <button type="submit" name="submit" className='border-2 border-black w-1/4 sm:w-1/2 rounded-lg py-3'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}
