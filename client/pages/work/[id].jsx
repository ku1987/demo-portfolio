import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import BASE_URL from '../../components/config';
import Navbar from '../../components/navbar';

const PATH = 'work';
const SERVER_URL = `${BASE_URL}/${PATH}`;

const Page = ({ work }) => (
  <div>
    <Navbar />
    <main>
      <div className="container">
        <div className="header-img">
          <img src={`/img/${work.img}`} alt={work.title} />
        </div>
        <h1>{work.title}</h1>
        <h2>{work.desc}</h2>
        <p>{work.body}</p>
        <p className="textLink">
          <a href="/">{work.url}</a>
        </p>
      </div>
    </main>
  </div>
);

Page.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await axios.get(`${SERVER_URL}/${id}`);
  const { work } = res.data;
  return { work };
};

export default Page;

Page.propTypes = {
  work: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    body: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
