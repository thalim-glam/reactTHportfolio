import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import{FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="https://64.media.tumblr.com/25b4b6d4b228f357aeab3f7d4734ad40/3bdc27e2b516c266-1b/s1280x1920/c2df6717b87aa30ba4386786fd84e59ac4e38015.jpg" alt="this is a background image" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/15">
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-blue-800'>
            Greetings from Tasneem Halim......
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'> I am
            <TypeAnimation
              sequence={[
                // This i copied from https://www.npmjs.com/package/react-type-animation
                'currently UCBerkeley student',
                2000, // wait 2s before replacing next phrase
                'looking for a full time job',
                2000,
                'an Ex Googler',
                2000,
                'an ex Educator',
                2000
              ]}
              wrapper= "div"
              cursor= {true}
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justufy-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20} />
            <FaLinkedinIn className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main;