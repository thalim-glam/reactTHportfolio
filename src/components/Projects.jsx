import React from 'react'
import ProjectItem from './ProjectItem';
import ormp from '../assets/orm.png';
import bookclub from '../assets/Bookclub.jpg';
import skyscan from '../assets/Skyscan.png';
import professional from '../assets/professional.gif';
import quizg from '../assets/quizG.png';
import pwate from '../assets/pwaTE.jpg';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'> My Projects</h1>
      <p className='text-center py-8'>
        As a Full stack developer, these are the projects I have done in last few months. Please click to the GitHub link for more information.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={bookclub} title='Project-1: Bookclub blog' />
        <ProjectItem img={skyscan} title='Project-2: Scan nearby' />
        <ProjectItem img={ professional} title='Project-3: Professional readme generator' />
        <ProjectItem img={ormp} title='Project-4: ORM Ecommerce Project' />
        <ProjectItem img={quizg} title='Project-5: Coding Quiz (vanilla JS)' /> 
        <ProjectItem img={pwate} title='Project-6: PWA Text Editor' />
      </div>
    </div>
  )
}

export default Projects;