import React from 'react';
import Navbar from '../components/navbar';
import constants from '../components/const';

const TITLE = `About | ${constants.SITE_TITLE}`;
const { FadeIn } = constants;

const About = () => {
  if (process.browser) {
    // eslint-disable-next-line no-undef
    document.title = TITLE;
  }
  return (
    <FadeIn>
      <Navbar />
      <main>
        <div className="container">
          <h1>About</h1>
          <div className="img-container">
            <img src="/img/about-1.jpg" alt="" />
            <img src="/img/about-2.jpg" alt="" />
            <img src="/img/about-3.jpg" alt="" />
            <img src="/img/about-4.jpg" alt="" />
            <img src="/img/about-5.jpg" alt="" />
            <img src="/img/about-6.jpg" alt="" />
            <img src="/img/about-7.jpg" alt="" />
            <img src="/img/about-8.jpg" alt="" />
          </div>
        </div>
      </main>
    </FadeIn>
  );
};

export default About;
