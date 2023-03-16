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
    <div>
      {
        projectInfo?.map(info => (
            <img key={info.id} src={info.img} alt="" />
            
        ))
      }
    </div>
  )
}

export default ProjectInfo