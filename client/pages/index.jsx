/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';

const Index = () => (
  <div id="top">
    <Navbar />
    <div className="App-header">
      <img src="/img/header_img.jpg" alt="" />
      <div className="header-title">
        <h1>Demo Portfolio</h1>
      </div>
    </div>
    <main>
      <div className="container">
        <h1>Introduction</h1>
        <div className="prof-img">
          <img src="/img/prof-img.jpg" alt="" />
        </div>
        <p>I&apos;m a software engineer in Tokyo, Japan.</p>
        <p>My skills and details are here.</p>
        <p className="textLink"><Link href="/about"><a>About</a></Link></p>
      </div>
    </main>
  </div>
);

export default Index;
