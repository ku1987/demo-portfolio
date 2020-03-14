import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import server from '../../components/config';
import Navbar from '../../components/navbar';

const { port } = server;
const PATH = 'work';
const homeUrl = `http://localhost:${port}/${PATH}`;

const Page = ({ work }) => (
  <div>
    <Navbar />
    <main>
      <div className="container">
        <div className="header-img">
          <img src={`/img/${work.img}`} alt={work.title} />
        </div>
        <div>{work.title}</div>
        <div>{work.desc}</div>
      </div>
    </main>
  </div>
);

Page.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await axios.get(`${homeUrl}/${id}`);
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
  }).isRequired,
};
