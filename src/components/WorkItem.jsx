import React from 'react'
import './styles/work.css'
import data from '../utils/about'


const WorkItem = () => {

  const dataItem = data

  return (
    // <div>
    //   <div className='mb-10 ml-4'>
    //     <div className='flex flex-wrap gap-4 flex-row items-center justify-center text-xs md:text-sm'>
    //       <img className='w-5 h-5' src={HtmlIcon} alt="" />
    //       <img className='w-5 h-5' src={CssIcon} alt="" />
    //       <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>Html</span>
    //     </div>
    //   </div>
    // </div>
    <div className='container'>
      {
        dataItem.map(item => (
          <div className='container__2' key={item.title}>
            <img className='img' src={item.icon} alt="" />
            <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{item.title}</span>
          </div>
        ))
      }
    </div>
  )
}

export default WorkItem