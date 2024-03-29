import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // console.log('state change');
  };

  return (
    < div >
    <AiOutlineMenu 
        onClick={handleNav} 
        className='absolute top-4 right-4 z-[99] md:hidden' 
    />
  {
    nav ? (
      <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
        <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hoover:scale-110 ease-in'>
          <AiOutlineHome size={20} />
          <span className="pl-4">Home</span>
        </a>
        <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hoover:scale-110 ease-in'>
          <GrProjects size={20} />
          <span className="pl-4">Work Experience</span>
        </a>
        <a  onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hoover:scale-110 ease-in'>
          <AiOutlineProject size={20} />
          <span className="pl-4">Projects</span>
        </a>
        <a onClick={handleNav} href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hoover:scale-110 ease-in'>
          <GrProjects size={20} />
          <span className="pl-4">Skills</span>
        </a>
        <a  onClick={handleNav} href="../public/Resume.pdf" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hoover:scale-110 ease-in'>
          <BsPerson size={20} />
          <span className="pl-4">Download Resume</span>
        </a>
        <a  onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hoover:scale-110 ease-in'>
          <AiOutlineMail size={20} />
          <span className="pl-4">Contact</span>
        </a>
      </div>
    ) : (
        <div></div>
      )}
<div className='md:block hidden fixed top-[25%] z-10'>
  <div className='flex flex-col'>
    <a onClick={handleNav} href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 curse-pointer hoover:scale-110 ease-in duration-300'>
      <AiOutlineHome size={20} />           
      <span className="pt-1">Home</span>
    </a>
    <a onClick={handleNav} href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 curse-pointer hoover:scale-110 ease-in duration-300'>
      <GrProjects size={20} />
      <span className="pt-1">Work Experience</span>
    </a>
    <a onClick={handleNav} href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 curse-pointer hoover:scale-110 ease-in duration-300'>
      <AiOutlineProject size={20} />
      <span className="pt-1">Portfolio</span>
    </a>
    <a onClick={handleNav} href="#skills" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 curse-pointer hoover:scale-110 ease-in duration-300'>
      <GrProjects size={20} />
      <span className="pt-1">My Skills</span>
    </a>    
    <a onClick={handleNav} href="../public/Resume.pdf" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 curse-pointer hoover:scale-110 ease-in duration-300'>
      <BsPerson size={20} />
      <span className="pt-1">Download Resume</span>
    </a>
    <a onClick={handleNav} href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 curse-pointer hoover:scale-110 ease-in duration-300'>
      <AiOutlineMail size={20} />
      <span className="pt-1">Contact Me</span>
    </a>
  </div>
</div>




    </div >
  );
}

export default SideNav;