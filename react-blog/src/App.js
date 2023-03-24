import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Projects from './Projects'

export default function App() {
  return (
    <div>
        <Hero />
        <Projects />
        <div id='aboutmediv' className='container-fluid align-items-center'>
         <AboutMe />
        </div>
    </div>
  )
}
