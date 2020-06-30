/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Navbar from '../components/navbar';

const H1Test = styled.h1`
  color: #161646; 
`;

const Contact = () => {
  const {
    register, handleSubmit, errors,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <H1Test>Contact</H1Test>
          <p>Please contact me here.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formElm">
              <label htmlFor="Name">Name
                {errors.name && <span className="error">This field is required</span>}
                <input
                  name="name"
                  placeholder="Your name..."
                  ref={register({ required: true })}
                />
              </label>
              <label htmlFor="Mail">Mail
                {errors.mail && <span className="error">This field is required</span>}
                <input
                  name="mail"
                  placeholder="Your mail..."
                  ref={register({ required: true })}
                />
              </label>
              <label htmlFor="text">Mail
                {errors.text && <span className="error">This field is required</span>}
                <textarea
                  name="text"
                  placeholder="Leave message here..."
                  ref={register({ required: true })}
                />
              </label>
            </div>
            <input type="submit" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
