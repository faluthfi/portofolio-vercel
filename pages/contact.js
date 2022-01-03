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
        return res
      })
      .then((res) => {
        alert('success sending message')
        setLoading(false)
        console.log(res)
        setData(initialData)
      })
      .catch((err, res) => {
        alert(err)
        console.log(res)
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
              <textarea type="text" name="message" value={data.message} className='h-full text-xl row-span-3 resize-none px-1 rounded-md bg-dsform' onChange={handleChange} required/>
            </div>
            <div className='flex flex-col  p-6  items-center'>
              <button type="submit" name="submit" className='border-dsform border-2 shadow-md w-1/4 sm:w-1/2 rounded-lg py-3  bg-dshoverbg font-bold hover:scale-95'>Submit</button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal for Loading */}
      <Transition appear show={isLoading} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => { }}
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
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
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
              <div className="inline-block justify-center item-center w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <p className="text-4xl text-black">
                  Loading...
                </p>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

    </Fragment>
  )
}
