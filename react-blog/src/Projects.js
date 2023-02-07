import React from 'react'
import './Projects.css'
import weatherapp from './images/weatherapp.png'
import tictactoe from './images/tictactoe.PNG'

export default function Projects() {
  return (
    <div id='projects' className='container'>
        <hr className='mt-5'/>
        <h6>My Projects</h6>
        <div className='row'>
            <div className='col'>
                <div id='project-card' className="card border mt-5" >
                    <img className='card-img-top' alt='' src={weatherapp}></img>
                    <div className="card-body h-100">
                        <div className='container h-100 g-0'>
                            <div className='row g-0'>
                                <h5 className="card-title">Weather App</h5>
                                <p className="card-text text-black">This is a weather app I built to show you thee weather in whatever zipcode you'd like! this was built in week 3 of the Awesome Inc Bootcamp</p>
                                <a href="https://dylanmccarty.github.io/weather-app/" className="btn btn-primary">Check it Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div id='project-card' className="card border mt-5" >
                    <img className='card-img-top' alt='' src={tictactoe}></img>
                    <div className="card-body h-100">
                        <div className='container h-100 g-0'>
                            <div className='row g-0'>
                                <h5 className="card-title">Weather App</h5>
                                <p className="card-text text-black">This is a weather app I built to show you thee weather in whatever zipcode you'd like! this was built in week 3 of the Awesome Inc Bootcamp</p>
                                <a href="https://dylanmccarty.github.io/tic-tac-toe/" className="btn btn-primary">Check it Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div id='project-card' className="card border mt-5" >
                    <img className='card-img-top' alt='' src={weatherapp}></img>
                    <div className="card-body h-100">
                        <div className='container h-100 g-0'>
                            <div className='row g-0'>
                                <h5 className="card-title">Weather App</h5>
                                <p className="card-text text-black">This is a weather app I built to show you thee weather in whatever zipcode you'd like! this was built in week 3 of the Awesome Inc Bootcamp</p>
                                <a href="https://dylanmccarty.github.io/weather-app/" className="btn btn-primary">Check it Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
