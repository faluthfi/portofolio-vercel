import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const initialData = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

export default function Home() {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState(initialData)
  const [isOpen, setIsOpen] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  function closeModal() {
    setIsOpen(false)
  }

  const handleSubmit = async (e) => {

    await sendToMail()

    e.preventDefault()
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const sendToMail = () => {
    let { name, email, subject, message } = data
    let dataform = {
      'name': name,
      'email': email,
      'subject': subject,
      'message': message
    }
    setLoading(true)
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataform)
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Something went Wrong!!")
        }
        console.log(res)
        return res
      })
      .then((res) => {
        setIsOpen(true)
        setLoading(false)
        setData(initialData)
      })
      .catch(async (err, res) => {
        await setErrMsg(`${err}, ${res.status}`)
        setIsOpen(true)
        setLoading(false)
      })
  }


  return (
    <Fragment>
      <div className='m-auto mt-auto min-w-3/4  justify-center align-middle items-center bg-dsbg w-full text-dsfont sm:w-screen'>
        <div className='mb-5 font-semibold text-2xl sm:text-md mt-6'>
          <h1 className='text-center'>
            Feel free to contact me at <a href='mailto:faikar.al@gmail.com' className='hover:text-blue-700'>faikar.al@gmail.com</a> or use the form below
          </h1>
        </div>
        <div className='flex justify-center w-full sm:w-screen'>
          <form className='grid grid-cols-1 grid-rows-6 w-1/2 text-2xl gap-2 sm:text-xl sm:w-screen' onSubmit={handleSubmit}>
            <div className=' flex flex-col  p-6'>
              <h2 className='flex p-2 text-xl font-bold text-dshovertxt sm:text-md'>
                Name<h2 className='text-red-700'>*</h2>
              </h2>
              <input type="text" name="name" value={data.name} className=' px-1 rounded-md bg-dsform' onChange={handleChange} required />
            </div>
            <div className='flex flex-col  p-6'>
              <h2 className='flex p-2 text-xl font-bold text-dshovertxt sm:text-md'>
                Email<h2 className='text-red-700'>*</h2>
              </h2 >
              <input type="email" name="email" value={data.email} className='px-1 rounded-md bg-dsform' onChange={handleChange} required />
            </div>
            <div className='flex flex-col  p-6'>
              <h2 className='p-2 text-xl font-bold text-dshovertxt sm:text-md'>
                Subject
              </h2>
              <input type="text" name="subject" value={data.subject} className='sm:text-ellipsis px-1 rounded-md bg-dsform' onChange={handleChange} />
            </div>
            <div className='flex flex-col  p-6 row-span-2'>
              <h2 className='p-2 text-xl font-bold text-dshovertxt flex sm:text-md'>
                Message<h2 className='text-red-700'>*</h2>
              </h2>
              <textarea type="text" name="message" value={data.message} className='h-full text-xl row-span-3 resize-none px-1 rounded-md bg-dsform' onChange={handleChange} required />
            </div>
            <div className='flex flex-col  p-6  items-center'>
              <button type="submit" name="submit" className='border-dsform border-2 shadow-md w-1/4 sm:w-1/2 rounded-lg py-3  bg-dshoverbg font-bold hover:scale-95'>Submit</button>
            </div>
          </form>
        </div>

      </div>
      {/* Loading Overlay */}
      {
        isLoading &&
        <div className='flex items-center justify-center h-full w-screen bg-black opacity-80 z-10 fixed top-0 left-0'>
          <h1 className='text-white'>Loading...</h1>
        </div>
      }
      {/* Modal Fail/Success */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-300 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className={`text-lg font-medium leading-6 ${!isError ? 'text-green-600' : 'text-red-500'}`}
                >
                  {!isError ? 'Message Sent' : 'Failed to Send Message'}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-700">
                    {isError ? `Failed to Send Message ${errMsg}` : 'Message sent sucessfully, will get back to you soon as possible'}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-500 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  )
}
