import React from 'react'
import WorkItem from './WorkItem'

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>About me</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus nemo cumque eos, quos ut placeat nulla accusantium qui natus?</p>
        <WorkItem />
    </div>
  )
}

export default Work
