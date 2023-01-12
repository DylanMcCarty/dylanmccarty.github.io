import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="container-fluid vh-100 hero">
      <div className="row h-75 align-content-center">
        <div className="container h1 text-left p-5">
          <p>
            Hi, my name is <strong>Dylan!</strong>
          </p>
          <p>I'm a Full-Stack Web Developer</p>
        </div>
        <div className="container h3 text-left p-5" style={{ height: 100 }}>
          <div className="row h-100 align-content-center">
            <p>learn more about what I can do for you!</p>
          </div>
          <button className="btn btn-outline-secondary mt-5">About Me</button>
        </div>
      </div>
      <div className="container fixed-bottom">
        <div className="row text-center align-items-end">
          <p>scroll to learn more</p>
        </div>
      </div>
    </div>
  );
}
