import React from 'react'
import WorkItem from './WorkItem'

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        About me
      </h1>
      <p className="text-center py-8 font-medium indent-8">
        I am a passionate person who loves being a web developer, I take very
        seriously my job seriously, thanks to the fact that in my learning path
        I discovered that discipline and commitment are required and I always
        try to do my best in each project in which I participate and I am always
        willing to learn from this wonderful world.
      </p>
      <WorkItem />
    </div>
  );
}

export default Work
