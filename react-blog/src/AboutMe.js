import React from 'react'
import './AboutMe.css'
import mehiking from './images/mehiking.jpeg'

export default function AboutMe() {
  return (
    <div id='aboutme' className='container vh-100'>
        <div className='row justify-content-center align-content-center d-flex h-100'>
          <div className='col justify-text-center'>
            <h1 className=''>About Me</h1>
            <p></p>
          </div>
          <div className='col justify-text-center'>
            <img id='imgofme' alt='' src={mehiking}></img>
          </div>
        </div>
    </div>
  )
}
