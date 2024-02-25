import React from 'react';
import SkillItem from './SkillItem';

const data = [
  {
    serial: 1,
    title: 'Developer Skills',
    details: 'HTML/CSS, Bootstrap, JavaScript, Tailwind, JQuery, React, TypeScript, Node.js, Express.js, API knowledge, MongoDB, MySQL, GraphQL, Server application etc.'
  },
  {
    serial: 2,
    title: 'Teaching Skills',
    details: " Taught Robotics, Arduino, Programming on Raspberry Pi, HTML/CSS, JavaScript, Bootstrap, Figma, Firebase application, Python, 3D printing, Game Design with Unity, C++, AutoCAD etc."
  },
  {
    serial: 3,
    title: 'Soft Skills',
    details: 'Problem Solving, Critical thinking, Teamwork, Planning, Time management, High Adaptibility, Interpersonal Communication etc.'
  },
]

const Skills = () => {
  return (
    <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>My Skills</h1>
      {data.map((item, idx) => (
        <SkillItem 
        key={idx} 
        serial={item.serial} 
        title={item.title} 
        details={item.details} />
      ) )}
    </div>
  )
}

export default Skills;