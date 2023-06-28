import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {

  // Refactorizar los enlaces y hacerlo con react-router
  return (
    <div className='w-full flex mt-2 p-5 justify-between mx-auto '>
      <div className='md:ml-32'>
        <h3 className='text-xl uppercase font-bold text-emerald-600 cursor-pointer'>Carpio
          <span className='text-emerald-900 font-black'>News</span>
        </h3>
      </div>
      <nav className='flex gap-8 justify-center items-center md:mr-32 '>
        <NavLink
        to='/' 
         className='cursor-pointer font-semibold text-emerald-600 transition-colors
         duration-300 ease-in hover:text-emerald-900'>
          Inicio
        </NavLink>

        <NavLink
        to='/post-linkedin' 
        className='cursor-pointer font-semibold text-emerald-600 transition-colors
         duration-300 ease-in  hover:text-emerald-900'>
          Social
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar
