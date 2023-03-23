import React from "react";
import "./Hero.css";
import Me from './images/Mewithbg.jpg'
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div id="hero" className="container-fluid vh-100">
      <div className="row vh-100 d-flex align-items-center">
        <div id="hero-text" className="col text-center d-flex flex-column h-25 mt-5">
          <p>
            Hi, my name is <strong>Dylan!</strong>
          </p>
          <p>I'm a Full-Stack Web Developer</p>
        </div>
        <div className="col-12 col-lg-6 text-center ">
          <img className="shadow-lg" id='me' alt="" src={Me}></img>
        </div>
      </div>
      <div id="scroll" className="container fixed-bottom">
        <div className="row text-center align-items-end">
          <p className="mb-3">scroll to learn more <br/> <BsFillArrowDownCircleFill className="icon" /></p>
        </div>
      </div>
    </div>
  );
}
