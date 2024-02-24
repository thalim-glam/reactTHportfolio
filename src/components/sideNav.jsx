import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineProjects, AiOutlineMail } from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const sideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // console.log('state change');
  };

  return (
    < div >
    <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
  {
    nav ? (
      <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hoover:scale-110 ease-in'>
          <AiOutlineHome size={20} />
          <span className="pl-4">Home</span>
        </a>
        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hoover:scale-110 ease-in'>
          <GrProjects size={20} />
          <span className="pl-4">Work</span>
        </a>
        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hoover:scale-110 ease-in'>
          <AiOutlineproject size={20} />
          <span className="pl-4">Projects</span>
        </a>
        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hoover:scale-110 ease-in'>
          <BsPerson size={20} />
          <span className="pl-4">Download Resume</span>
        </a>
        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hoover:scale-110 ease-in'>
          <AiOutlineMail size={20} />
          <span className="pl-4">Contact</span>
        </a>
      </div>
    ) : (
        <div></div>
      )}
    </div >
  );
}

export default sideNav;