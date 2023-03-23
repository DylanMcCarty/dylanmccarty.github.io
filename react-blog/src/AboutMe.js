import React from 'react'
import './AboutMe.css'
import mehiking from './images/mehiking.jpeg'

export default function AboutMe() {
  return (
    <div id='background' className='container-fluid shadow-lg vh-100'>
      <div id='aboutme' className='container h-100'>
          <div className='row justify-content-between align-content-center d-flex h-100'>
          <h1 className=''>About Me</h1>
            <div className='col-6'>
                My name is Dylan McCarty, I recently completed a coding bootcamp which taught me the ins and outs of web development, I've always been interested in how EVERYTHING works
                and coding is no different, from how to build houses, to rockclimbing, to learning three different instruments, curiosity drives me as a person and coding was one of the next
                steps in seeing what this world has to offer, as well as building a valuable skill that pushed me to my limits when trying to learn everything I could in four months. My next step
                in life will be learning to create awesome projects with a team of dedicated and hardworking people! 
            </div>
            <div className='col-5'>
              <img id='imgofme' alt='' src={mehiking}></img>
            </div>
          </div>
      </div>
    </div>
  )
}
