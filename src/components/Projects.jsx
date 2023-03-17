import React from 'react'
import myprojects from '../utils/myProjects';
import ProjectItem from '../components/ProjectItem'



const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8 font-medium indent-8'>
        This is a bit of what I do, each of these projects has been developed with passion and love.
        in which there were moments of frustration and difficulty but also a lot of fun working as a team
        and I really enjoyed learning about the different technologies that were used in each of these projects.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {
          myprojects.map(project => (
            <ProjectItem key={project.id} project={project}/>
          ))
        }
      </div>
    </div>
  );
}

export default Projects