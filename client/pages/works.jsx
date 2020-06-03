/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { uuid } from 'uuidv4';
import BASE_URL from '../components/config';
import Navbar from '../components/navbar';

const PATH = 'works';
const SERVER_URL = `${BASE_URL}/${PATH}`;

const mapWorks = (works) => works.map((work) => (
  <li key={uuid()} className="works-item">
    <Link href={`/work/${work.id}`}>
      <a>
        <img src={`/img/${work.img}`} alt={work.desc} />
        <div className="works-text">
          <h3>{work.title}</h3>
          <p>{work.desc}</p>
        </div>
      </a>
    </Link>
  </li>
));

const Works = () => {
  const [works, setWorks] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(SERVER_URL);
        setWorks(res.data.works);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  if (works) {
    return (
      <div>
        <Navbar />
        <main>
          <div className="container">
            <h1>Works</h1>
            <ul className="works-grid">
              {mapWorks(works)}
            </ul>
          </div>
        </main>
      </div>
    );
  }
  return null;
};

export default Works;
