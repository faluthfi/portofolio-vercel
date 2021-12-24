import Navbar from '../components/navbar'
import React, { Fragment, useState } from 'react'
import IndexIcon from '../components/index/indexIcon'
import { linkedin, github, docicon } from '../components/index/iconPath'
import { Dialog, Transition } from '@headlessui/react'
import Header from '../components/header'


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
      <div className='h-full flex w-full justify-center animate-fade-in-down items-center'>
        <div className='flex flex-col justify-center items-center  max-h-2/4 max-w-2/4 sm:w-screen md:w-screen'>
          <img src='/130.jpg' className='w-36 h-36 mb-6 rounded-full border-gray-100 border-2 shadow-sm object-fill' />
          <h1 className='mb-4 font-normal'>My Name Here</h1>
          <div className='font-light mx-5 flex items-center justify-center text-justify max-w-md'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus fuga a velit sequi animi atque blanditiis mollitia! Mollitia commodi minus nostrum error. Nisi ea eaque dicta nesciunt consectetur quod reprehenderit!</p>
          </div>
          <div className='flex flex-row mt-10'>
            <IndexIcon path={github} link={'https://github.com/faluthfi'} tooltip={'Github'} />
            <IndexIcon path={linkedin} link={'https://www.linkedin.com/in/faikar-achmad-luthfi'} tooltip={'LinkedIn'} />
            <div className="group my-5 mx-10 sm:mx-2 flex flex-col justify-between items-center">
              <a onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 rounded-full fill-black p-4 hover:fill-gray-600  hover:border-gray-600 hover:cursor-pointer hover:scale-95 transition duration-300 ease-in-out" viewBox="0 0 24 24">
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
              <div className="inline-block w-3/4 md:w-full sm:w-full md:h-full sm:h-full md:mt-auto sm:mt-auto overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
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
