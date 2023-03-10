import React from 'react'
import ProjectItem from './ProjectItem'
import ecommerce from '../assets/e-commerceImg.png'
import pokedex from '../assets/pokedexImg.png'
import rickAndMorty from '../assets/rick and morty.png'
import weatherApp from '../assets/weaderAppImg.png'


const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste
        optio facere delectus sed eaque obcaecati, cupiditate iusto dolorum
        recusandae minus soluta voluptatibus quae est quam deserunt, atque
        quibusdam numquam.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={ecommerce} title='Ecommerce' />
        <ProjectItem img={pokedex} title='Pokedex' />
        <ProjectItem img={rickAndMorty} title='RickAndMorty' />
        <ProjectItem img={weatherApp} title='Weather' />
      </div>
    </div>
  );
}

export default Projects