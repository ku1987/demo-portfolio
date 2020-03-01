/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <div className="navbar">
    <ul className="navbar-nav">
      <li>
        <Link href="/">
          <a><i className="fa fa-home" /></a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a><i className="fa fa-address-card" /></a>
        </Link>
      </li>
      <li>
        <Link href="/works">
          <a><i className="fa fa-desktop" /></a>
        </Link>
      </li>
      <li>
        <Link href="/works">
          <a><i className="fa fa-at" /></a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
