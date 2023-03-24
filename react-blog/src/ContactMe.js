import React from 'react'
import { AiFillLinkedin, AiFillFacebook, AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import './ContactMe.css'

export default function ContactMe() {
  return (
    <div id='contactmemobile' className='container'>
        <nav className='navbar navbar-expand-lg h-100 align-items-center'>
            <ul className='text-white text-decoration-none navbar-nav w-100 justify-content-between'>
                <div className='row align-items-center'>
        <h1 className='mt-2 mb-2'>Contact Me</h1>
                    <div className='col-3'>
                        <li className='nav-item'>
                            <a 
                            className='nav-link d-flex justify-content-center align-content-center' 
                            href='https://www.linkedin.com/in/dylanfordmccarty/'><AiFillLinkedin></AiFillLinkedin></a>
                        </li>
                    </div>
                    <div className='col-3'>
                        <li className='nav-item'>
                            <a 
                            className='nav-link d-flex justify-content-center align-content-center' 
                            href='https://github.com/DylanMcCarty'><AiFillGithub></AiFillGithub></a>
                        </li>
                    </div>
                    <div className='col-3'>
                        <li className='nav-item'>
                            <a 
                            className='nav-link d-flex justify-content-center align-content-center' 
                            href='mailto:dfmccarty2020@gmail.com'><AiOutlineMail></AiOutlineMail></a>
                        </li>
                    </div>
                    <div className='col-3'>
                        <li className='nav-item'>
                            <a 
                            className='nav-link d-flex justify-content-center align-content-center' 
                            href='https://www.facebook.com/dylan.mccarty.528'><AiFillFacebook></AiFillFacebook></a>
                        </li>
                    </div>
                </div>
            </ul>
        </nav>
    </div>
  )
}
