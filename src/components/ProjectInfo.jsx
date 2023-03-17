import React, { useEffect, useState } from 'react'
import myprojects from '../utils/myProjects'

const ProjectInfo = () => {

  const [projectInfo, setprojectInfo] = useState()

  useEffect(() => {
    const filterInfo = myprojects.filter(project => {
      return project.id === +localStorage.getItem('id')
    })
    setprojectInfo(filterInfo)
  }, [])

  console.log(projectInfo)

  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      {
        projectInfo?.map(info => (
          <header className='flex flex-col justify-center items-center gap-6 bg-[#213e872c] shadow-xl shadow-gray-400 rounded-xl'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] mt-2'>{info.projectName}</h1>
            <img className='w-[500px] rounded-xl group-hover:opacity-10' key={info.id} src={info.img} alt="" />
            <div className='flex flex-wrap gap-4'>
              <h2 className='inline-block px-2 py-1 font-bold text-white bg-[#001b5e] rounded-lg'>Type Project</h2>
              <span className='text-3xl font-semibold text-transform: capitalize'>{info.typeProject}</span>
            </div>
            <p className='text-2xl font-bold text-center text-[#292756]'>Made with React js</p>
            <span className='text-3xl font-semibold text-transform: capitalize'>{info.bookstores}</span>
            <div>
              <p className='text-center py-2 font-medium indent-8'>{info.summary}</p>
              <p className='text-center py-2 max-w-[800px] font-medium indent-8'>{info.details}</p>
            </div>
            <a className='text-[#2e36a1] font-medium underline underline-offset-2 mt-[-10px]' href={info.url}>{info.url}</a>
          </header>
        ))
      }
    </div>
  )
}

export default ProjectInfo