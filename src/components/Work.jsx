import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2023,
    title: 'Program Manager at RAS',
    duration: '1 year',
    details: 'Managing program staff, educators, parents, school administration, and students as well as event planning, organizing, budget handling, conflict resolution, and regular communication with the area manager daily.'
  },
  {
    year: 2022,
    title: 'Coding Coach at Google-Codenext',
    duration: '1 year',
    details: "Educating Black, Hispanic, and Indigenous communities on various courses like Robotics, Arduino, Programming on Raspberry Pi, HTML/CSS, JavaScript, Bootstrap, Figma, Firebase application, Python, 3D printing, Game Design with Unity, C++, AutoCAD etc"
  },
  {
    year: 2021,
    title: 'Computer Science Teacher at BASIS Independent School',
    duration: '1 year',
    details: 'As a Computer Science and Engineering teacher my responsibility was to teach, mentor, advice and guide both high school and elementary school students.'
  },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>My Work Experience</h1>
      {data.map((item, idx) => (
        <WorkItem 
        key={idx} 
        year={item.year} 
        title={item.title} 
        duration={item.duration} 
        details={item.details} />
      ) )}
    </div>
  )
}

export default Work;