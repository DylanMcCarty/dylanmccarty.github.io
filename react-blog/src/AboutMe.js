import React from 'react'
import './AboutMe.css'
import mehiking from './images/mehiking.jpeg'
import { AiFillLinkedin, AiFillFacebook, AiOutlineMail, AiFillGithub } from 'react-icons/ai'

export default function AboutMe() {

  return (
    <div id='aboutme' className='container shadow-lg rounded h-100 d-flex align-items-center'>
        <div className='row justify-content-center align-content-center d-flex'>
          <div className='col-lg-6 col-sm-12 d-flex justify-text-center'>
            <div className='row'>
              <div className='col-12'>
                <h1 className=''>About Me</h1>
              </div>
              <div className='col-12'>
                <p className='h4'>I'm Dylan McCarty, I graduated highschool in 2020 during covid and found during quarantine that I have a passion for solving all sorts of problems and thats what led me to take the 
                  web developer bootcamp after realizing I enjoy technology and wanted to follow my passion for developing and finding and solving problems in the world of software, backend and servers 
                  are a huge interest to me, but I enjoy building and problem solving on the frontend as well. I use technologies such as React, Python, Javascript, Django and Postgresql. 
                </p>
              </div> 
              <div id='contactme' className='col h-25'>
                <nav className='navbar navbar-expand-lg h-100 align-items-center'>
                  <ul className='text-white text-decoration-none navbar-nav w-50 justify-content-between'>
                    <li className='nav-item w-25'>
                      <a className='nav-link' href='https://www.linkedin.com/in/dylanfordmccarty/'><AiFillLinkedin></AiFillLinkedin></a>
                    </li>
                    <li className='nav-item w-25'>
                      <a className='nav-link' href='https://github.com/DylanMcCarty'><AiFillGithub></AiFillGithub></a>
                    </li>
                    <li className='nav-item w-25'>
                      <a className='nav-link' href='mailto:dfmccarty2020@gmail.com'><AiOutlineMail></AiOutlineMail></a>
                    </li>
                    <li className='nav-item w-25'>
                      <a className='nav-link' href='https://www.facebook.com/dylan.mccarty.528'><AiFillFacebook></AiFillFacebook></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className='col-4 col-sm-5 d-flex justify-content-center '>
            <img className='rounded' id='imgofme' alt='' src={mehiking}></img>
          </div>
        </div>
    </div>
  )
}
