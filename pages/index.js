import React, { Fragment, useState } from 'react'
import IndexIcon from '../components/index/indexIcon'
import { linkedin, github, docicon, download } from '../components/index/iconPath'
import { Dialog, Transition } from '@headlessui/react'


export default function Home() {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <Fragment>
      <div className='h-full min-h-screen flex w-full justify-center  items-center bg-dsbg text-dsfont'>
        <div className='flex flex-col justify-center items-center  max-h-2/4 max-w-2/4 sm:w-screen md:w-screen animate-fade-in-down'>
          <h1 className='mb-4 font-bold text-white text-6xl'>Faikar Achmad Luthfi</h1>
          <h2 className='mb-4 font-semibold text-white text-4xl'>Web Developer</h2>
          <div className='font-normal mx-5 flex items-center justify-center text-center w-1/2'>
            <p>I'm a web developer based on Bandung,Indonesia, I used <strong className='font-medium text-white text-lg'>Javascript</strong> as my primary programming language. Currently my preferred techstack for Front End is <strong className='font-medium text-white text-lg'>ReactJS</strong>  or <strong className='font-medium text-white text-lg'>NextJS</strong>  depending on the use cases, and for the Back end I use <strong className='font-medium text-white text-lg'>NodeJS</strong> and <strong className='font-medium text-white text-lg'>ExpressJS</strong> with <strong className='font-medium text-white text-lg'>PostgreSQL</strong> for the database.However I'm not I'm also eager to learn other framework so that I can use the most optimal frameworks for certain use cases in my future projects.</p>
          </div>
          <div className='flex flex-row mt-10'>
            <IndexIcon path={github} link={'https://github.com/faluthfi'} tooltip={'Github'} />
            <IndexIcon path={linkedin} link={'https://www.linkedin.com/in/faikar-achmad-luthfi'} tooltip={'LinkedIn'} />
            <div className="group my-5 mx-10 sm:mx-2 flex flex-col justify-between items-center">
              <a onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 rounded-full p-4 fill-gray-100 hover:fill-gray-300  hover:border-gray-600 hover:cursor-pointer hover:scale-95 transition duration-300 ease-in-out" viewBox="0 0 24 24">
                  <path d={docicon} />
                </svg>
              </a>
              <span className="px-4 py-1 bg-black text-white text-sm rounded-full scale-0 group-hover:scale-90 transition duration-300 ease-out">
                CV
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
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
              <div className="inline-block w-3/4 md:w-full sm:w-full md:h-full sm:h-full md:mt-auto sm:mt-auto overflow-hidden text-left align-middle transition-all transform shadow-xl">
                <div className=" my-10 sm:mx-2 flex flex-col justify-between items-center">
                  <a href='/Faikar_Achmad_Luthfi_CV.pdf'>
                    <button className="px-8 py-4 bg-black text-white font-bold text-sm rounded-full border-white border-2">
                      Download in PDF
                    </button>
                  </a>
                </div>
                <div>
                  <img src='/resume.png' />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

    </Fragment>
  )
}
