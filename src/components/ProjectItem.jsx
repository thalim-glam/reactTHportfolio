import React from 'react'

const ProjectItem = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl group hoover:bg-gradient-to-r from-gray to-[#00FF00]' > 
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' >
        <h3 className='text-2xl font-bold text-black tracking-wider text-center pb-4' >
          {title}
        </h3>
        <a href="https://github.com/thalim-glam">
          <p className='text-center text-lg p-2 rounded-lg bg-sky-500 text-gray-800 font-bold cursor-pointer ' > GitHub Link</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItem;