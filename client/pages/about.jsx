import React from 'react';
import Navbar from '../components/navbar';

const About = () => (
  <div>
    <Navbar />
    <main>
      <div className="container">
        <h1>About</h1>
        <div className="img-container">
          <img src="/img/about-1.jpg" loading="lazy" alt="" />
          <img src="/img/about-2.jpg" loading="lazy" alt="" />
          <img src="/img/about-3.jpg" loading="lazy" alt="" />
          <img src="/img/about-4.jpg" loading="lazy" alt="" />
          <img src="/img/about-5.jpg" loading="lazy" alt="" />
          <img src="/img/about-6.jpg" loading="lazy" alt="" />
          <img src="/img/about-7.jpg" loading="lazy" alt="" />
          <img src="/img/about-8.jpg" loading="lazy" alt="" />
          <img src="/img/about-9.jpg" loading="lazy" alt="" />
        </div>
      </div>
    </main>
  </div>
);

export default About;
