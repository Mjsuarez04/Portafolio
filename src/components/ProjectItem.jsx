import React from 'react'

const ProjectItem = ({ img, title }) => {
  return (
    <div className='realtive flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block relative top-[40%] left-[-40%] translate-x-[-50%] translate-y-[-70%]'>
        <h3 className='text-2xl font-semibold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React Js</p>
        <a href="/"></a>
          <p className='text-center p-2 rounded-lg bg-white text-gray-700 font-semibold cursor-pointer text-lg'>More Info</p>
      </div>
    </div>
  )
}

export default ProjectItem