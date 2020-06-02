/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { uuid } from 'uuidv4';
import Navbar from '../components/navbar';
import BASE_URL from '../components/config';

const PATH = 'works';
const serverUrl = `${BASE_URL}/${PATH}`;

const mapWorks = (contents) => contents.map((content) => (
  <li key={uuid()} className="works-item">
    <Link href={`/work/${content.id}`}>
      <a>
        <div className="works-text">
          <h3>{content.areaName}</h3>
          <p dangerouslySetInnerHTML={{__html: content.contents}}></p>
        </div>
      </a>
    </Link>
  </li>
));

const Contents = () => {
  const [contents, setContents] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(serverUrl);
      setContents(res.data.works);      
    };
    fetchData();
  }, []);
  if (contents) {
    return (
      <div>
        <Navbar />
        <main>
          <div className="container">
            <h1>Contents</h1>
            <ul className="works-grid">
              {mapWorks(contents)}
            </ul>
          </div>
        </main>
      </div>
    );
  }
  return 1;
};

export default Contents;
