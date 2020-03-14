import React, { useState, useEffect } from 'react';
import axios from 'axios';
import server from '../components/config';
import Header from '../components/header';
import Navbar from '../components/navbar';

const { port } = server;
const homeUrl = `http://localhost:${port}`;

const getData = async () => {
  const res = await axios.get(homeUrl);
  return res.data;
};

const About = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    getData()
      .then((resData) => setData(resData));
  });
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <div>
          <h1>About</h1>
          <p>{data.msg}</p>
        </div>
      </main>
    </div>
  );
};

export default About;
