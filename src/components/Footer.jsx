import React from 'react';

import github_logo from '../assets/github_logo.png';
import linkedin_logo from '../assets/linkedIn_logo.png';

function Footer() {
  return (
    <footer className="footer md:pl-20 p-16 py-2">
      <p>
        <small> &copy; Developed by Tasneem Halim </small>
      </p>
      <address>
      <div className='flex justify-between pt-6 max-w-[200px] w-full'>
          <a href="https://github.com/thalim-glam">
          <img className='cursor-pointer flex justify-between pt-6 max-w-[60px] w-ful' size={20} src={github_logo} /></a>
          <a href="https://www.linkedin.com/in/thalim-glam-stducberkley/">
            <img className='cursor-pointer flex justify-between pt-2 max-w-[60px] w-ful' src={linkedin_logo} /></a>
        </div>
      </address>
    </footer>
  );
}

export default Footer;