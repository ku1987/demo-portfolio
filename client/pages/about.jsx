import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
import Navbar from '../components/navbar';

const About = () => (
  <div>
    <Navbar />
    <main>
      <Header />
      <div>
        <h1>About</h1>
        <Link href="/">Home</Link>
      </div>
    </main>
  </div>
);

export default About;
