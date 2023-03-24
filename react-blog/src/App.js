import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'

export default function App() {
  return (
    <div>
        <Hero />
        <Projects />
        <div id='aboutmediv' className='container-fluid vh-100 d-flex align-items-center'>
         <AboutMe />
        </div>
        <ContactMe />
    </div>
  )
}
