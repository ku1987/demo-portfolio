import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { uuid } from 'uuidv4';
import Navbar from '../components/navbar';
import constants from '../components/const';

const PATH = 'works';
const SERVER_URL = `${constants.BASE_URL}/${PATH}`;
const TITLE = `Works | ${constants.SITE_TITLE}`;
const { FadeIn } = constants;

const mapWorks = (works) => works.map((work) => (
  <li key={uuid()} className="works-item">
    <Link href={`/${PATH}/${work.id}`}>
      <a>
        <img src={`/img/${work.img}`} alt={work.description} />
        <div className="works-text">
          <h3>{work.title}</h3>
          <p>{work.description}</p>
        </div>
      </a>
    </Link>
  </li>
));

const Works = () => {
  if (process.browser) {
    document.title = TITLE;
  }
  const [works, setWorks] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(SERVER_URL);
        setWorks(res.data.works);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  if (works) {
    return (
      <FadeIn>
        <Navbar />
        <main>
          <div className="container">
            <h1>Works</h1>
            <ul className="works-grid">
              {mapWorks(works)}
            </ul>
          </div>
        </main>
      </FadeIn>
    );
  }
  return null;
};

export default Works;
