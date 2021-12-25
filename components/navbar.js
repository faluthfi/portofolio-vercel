/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import NavbarButton from './navbar/navbarButton'
import {withRouter} from 'next/router'

function Navbar({router}){
  
  return (
    <div className='top-0 w-screen h-fit bg-primary justify-center p-4 '>
      <div className='flex flex-row h-fit mx-auto sm:justify-evenly justify-center max-w-xl'>
        <NavbarButton text={'Home'} isChosen={router.pathname=='/'?true:false} link={'/'}/>
        <NavbarButton text={'Projects'} isChosen={router.pathname=='/projects'?true:false} link={'/projects'}/>
        <NavbarButton text={'Contact me'} isChosen={router.pathname=='/contact'?true:false} link={'/contact'} basis={true}/>
      </div>
    </div>
  )
}

export default withRouter(Navbar)
