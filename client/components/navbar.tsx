/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <div className="navbar">
    <ul className="navbar-nav">
      <li className="navbar-item">
        <i className="fa fa-angle-double-right" />
      </li>
      <li className="navbar-item">
        <Link href="/">
          <a>
            <i className="fa fa-home" />
            <span className="link-text">Home</span>
          </a>
        </Link>
      </li>
      <li className="navbar-item">
        <Link href="/about">
          <a>
            <i className="fa fa-address-card" />
            <span className="link-text">About</span>
          </a>
        </Link>
      </li>
      <li className="navbar-item">
        <Link href="/works">
          <a>
            <i className="fa fa-desktop" />
            <span className="link-text">Works</span>
          </a>
        </Link>
      </li>
      <li className="navbar-item">
        <Link href="/contact">
          <a>
            <i className="fa fa-at" />
            <span className="link-text">Contact</span>
          </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
