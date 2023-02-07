import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div id='background' className='container-fluid bg-white'>
      <div id='aboutme' className='container h-100'>
          <div className='row justify-content-center align-content-center d-flex h-100'>
        <h1 className='mb-5'>About Me</h1>
            <div className='col-9'>
              <h5>My name is Dylan McCarty, I recently completed a coding bootcamp which taught me the ins and outs of web development, I've always been interested in how EVERYTHING works
                and coding is no different, from how to build houses, to rockclimbing, to learning three different instruments, curiosity drives me as a person and coding was one of the next
                steps in seeing what this world has to offer, as well as building a valuable skill that pushed me to my limits when trying to learn everything I could in four months. My next step
                in life will be learning to create awesome projects with a team of dedicated and hardworking people! 
              </h5>
            </div>
            <div className='col'>
              <button><a href='#aboutme'>About Me</a></button>
            </div>
          </div>
      </div>
    </div>
  )
}
