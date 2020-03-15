import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { uuid } from 'uuidv4';
import server from '../components/config';
import Navbar from '../components/navbar';

const { port } = server;
const PATH = 'works';
const homeUrl = `http://localhost:${port}/${PATH}`;

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
    axios.get(homeUrl)
      .then((resData) => setWorks(resData.data.works))
      .catch((err) => console.error(err));
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
