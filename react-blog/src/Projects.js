import React from 'react'
import './Projects.css'
import weatherapp from './images/weatherapp.png'
import tictactoe from './images/tictactoe.PNG'
import housero from './images/Housero.png'
import restaurant from './images/react-restaurant.jpg'
import alarmclock from './images/alarm-clock.jpg'

export default function Projects() {
  return (
    <div id='projects' className='container-fluid'>
        <hr className=' text-white mt-5'/>
        <h6 className='text-white'>My Projects</h6>
        <div className='row justify-content-center'>
            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5'>
                <div id='project-card' className="card border mt-5 mx-auto" >
                    <img className='card-img-top' alt='' src={weatherapp}></img>
                    <div className="card-body justify-contents-end">
                        <div className='container g-0'>
                            <div className='row g-0'>
                                <h5 className="card-title">Weather App</h5>
                                <p className="card-text text-black">This is a weather app I built to show you the weather in whatever zipcode you'd like! this was built in week 3 of the Awesome Inc Bootcamp</p>
                                <a href="https://dylanmccarty.github.io/weather-app/" className="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5'>
                <div id='project-card' className="card border mt-5 mx-auto" >
                    <img className='card-img-top' alt='' src={tictactoe}></img>
                    <div className="card-body">
                        <div className='container g-0'>
                            <div className='row g-0'>
                                <h5 className="card-title">Tic Tac Toe</h5>
                                <p className="card-text text-black">This is a Tic Tac Toe Game I built for the Bootcamp which stressed the ability to create game logic as well as design a board completely dynamically generated with javascript!</p>
                                <a href="https://dylanmccarty.github.io/tic-tac-toe/" className="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5'>
                <div id='project-card' className="card border mt-5 mx-auto" >
                    <img className='card-img-top' alt='' src={housero}></img>
                    <div className="card-body">
                        <div className='container g-0'>
                            <div className='row g-0'>
                                <h5 className="card-title">Housero</h5>
                                <p className="card-text text-black">Final project of the bootcamp, which had the goal of using web scraping technology to create my own api that gathered data on housing to streamline data for Rental Property Investors</p>
                                <a href="https://housero.web.app/home" className="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5'>
                <div id='project-card' className="card border mt-5 mx-auto" >
                    <img className='card-img-top' alt='' src={restaurant}></img>
                    <div className="card-body">
                        <div className='container g-0'>
                            <div className='row g-0'>
                                <h5 className="card-title">React Restaurant</h5>
                                <p className="card-text text-black">A restaurant website built for the sake of learning react and learning to create an easily maintainable codebase that will adapt to any changes in the api and dynamically generate new content</p>
                                <a href="https://dylanmccarty.github.io/react-restaurant" className="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5'>
                <div id='project-card' className="card border mt-5 mx-auto" >
                    <img className='card-img-top' alt='' src={alarmclock}></img>
                    <div className="card-body">
                        <div className='container g-0'>
                            <div className='row g-0'>
                                <h5 className="card-title">Alarm Clock</h5>
                                <p className="card-text text-black">An Alarm Clock, which was a logic heavy project in the beginning of the bootcamp, it was the final project of our onboarding before moving to in person bootcamp</p>
                                <a href="https://dylanmccarty.github.io/Alarm-Clock" className="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
