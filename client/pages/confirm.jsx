/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';

import useLocalStorage from '../common/common';
import Navbar from '../components/navbar';
import constants from '../components/const';

const PATH = 'contacts';
const SERVER_URL = `${constants.BASE_URL}/${PATH}`;
const TITLE = `Confirm | ${constants.SITE_TITLE}`;
const { FadeIn } = constants;

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};

const clearLocalStorage = () => {
  if (process.browser) {
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('mail');
    window.localStorage.removeItem('text');
  }
};

const handleConfirm = async (name, mail, content, router) => {
  const data = { name, mail, content };
  try {
    const res = await axios.post(SERVER_URL, data, config);
    if (res.data.status !== 'success') {
      throw new Error(`${res.data.data.code}: ${res.data.data.message}`);
    }
    if (process.browser) {
      clearLocalStorage();
    }
    router.push({
      pathname: '/done',
    });
  } catch (error) {
    console.error(error);
  }
};

const Confirm = () => {
  if (process.browser) {
    // eslint-disable-next-line no-undef
    document.title = TITLE;
  }
  const router = useRouter();

  const [name, setName] = useLocalStorage('name', '');
  const [mail, setMail] = useLocalStorage('mail', '');
  const [text, setText] = useLocalStorage('text', '');

  if (!name || !mail || !text) {
    return (
      <FadeIn>
        <Navbar />
        <main>
          <div className="container">
            <H1Test>Confirm</H1Test>
            <div className="formElm">
              <Title>Please go back to contact page.</Title>
              <Button onClick={() => router.push({ pathname: '/contact' })}>Contact</Button>
            </div>
          </div>
        </main>
      </FadeIn>
    );
  }
  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <H1Test>Confirm</H1Test>
          <div className="formElm">
            <p>Please confirm what you entered.</p>
            <Title>Name</Title>
            <Body>{name}</Body>
            <Title>Mail</Title>
            <Body>{mail}</Body>
            <Title>Text</Title>
            <Body>{text}</Body>
            <Button onClick={() => handleConfirm(name, mail, text, router)}>Confirm</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Confirm;

const H1Test = styled.h1`
  color: #161646; 
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: left;
  width: 80%;
  margin: auto;
  padding-bottom: 3px;
  border-bottom: 1.5px solid ${constants.primaryColor};
`;

const Body = styled.p`
  font-size: 1.6rem;
  text-align: left;
`;

const Button = styled.div`
  display: block;
  border: none;
  padding: 15px;
  border-radius: 5px;
  margin: 20px auto;
  background-color: rgba(25, 164, 224, .4);
  transition: .3s;
  font-size: 1.8rem;
  width: 80%;
  cursor: pointer;
  &:hover {
    background-color: rgba(25, 164, 224, .6);
    color: white;
  }
`;
