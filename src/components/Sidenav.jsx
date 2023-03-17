import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'
import { Link } from 'react-scroll'


const Sidenav = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <Link onClick={handleNav} to='main' spy={true} smooth={true} offset={-80} duration={100} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </Link>
            <Link onClick={handleNav} to='work' spy={true} smooth={true} offset={40} duration={100} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrProjects size={20} />
              <span className='pl-4'>About me</span>
            </Link>
            <Link onClick={handleNav} to='projects' spy={true} smooth={true} offset={30} duration={100} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20} />
              <span className='pl-4'>Projects</span>
            </Link>
            <Link onClick={handleNav} to='work' spy={true} smooth={true} offset={30} duration={100} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size={20} />
              <span className='pl-4'>Resume</span>
            </Link>
            <Link onClick={handleNav} to='contact' spy={true} smooth={true} offset={80} duration={100} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contact</span>
            </Link>
          </div>
        )
        : (
          ''
        )}
          <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
              <Link to='main' spy={true} smooth={true} offset={-80} duration={100} className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineHome  size={20}/>
              </Link>
              <Link to='work' spy={true} smooth={true} offset={40} duration={100} className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <GrProjects  size={20}/>
              </Link>
              <Link to='projects' spy={true} smooth={true} offset={50} duration={100} className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineProject  size={20}/>
              </Link>
              <Link to='work' spy={true} smooth={true} offset={30} duration={100} className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsPerson  size={20}/>
              </Link>
              <Link to='contact' spy={true} smooth={true} offset={80} duration={100} className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail  size={20}/>
              </Link>
            </div>
          </div>
    </div>
  )
}

export default Sidenav