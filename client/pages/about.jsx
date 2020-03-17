import React from 'react';
import Navbar from '../components/navbar';

const About = () => (
  <div>
    <Navbar />
    <main>
      <div className="container">
        <h1>About</h1>
        <div className="img-container">
          <img src="/img/about-1.jpg" alt="" />
          <img src="/img/about-2.jpg" alt="" />
          <img src="/img/about-3.jpg" alt="" />
        </div>
      </div>
    </main>
  </div>
);

export default About;
