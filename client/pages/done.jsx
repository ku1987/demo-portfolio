import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Navbar from '../components/navbar';
import constants from '../components/const';

const TITLE = `Done! | ${constants.SITE_TITLE}`;
const { FadeIn } = constants;

const Done = () => {
  if (process.browser) {
    document.title = TITLE;
  }
  const router = useRouter();
  return (
    <FadeIn>
      <Navbar />
      <main>
        <div className="container">
          <H1Test>Confirm</H1Test>
          <div className="formElm">
            <Title>Your message has been successfully sent.</Title>
            <Body>Please go back to home page.</Body>
            <Button onClick={() => router.push({ pathname: '/' })}>Home</Button>
          </div>
        </div>
      </main>
    </FadeIn>
  );
};

export default Done;

const H1Test = styled.h1`
  color: #161646; 
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
`;

const Body = styled.p`
  font-size: 1.6rem;
  text-align: center;
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
