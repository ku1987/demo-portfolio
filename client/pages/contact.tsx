/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import useLocalStorage from '../common/common';
import Navbar from '../components/navbar';
import constants from '../components/const';

const TITLE = `Contact | ${constants.SITE_TITLE}`;
const { FadeIn } = constants;

const Contact = () => {
  if (process.browser) {
    document.title = TITLE;
  }
  const {
    register, handleSubmit, errors,
  } = useForm();

  const [name, setName] = useLocalStorage('name', '');
  const [mail, setMail] = useLocalStorage('mail', '');
  const [text, setText] = useLocalStorage('text', '');

  const router = useRouter();

  const onSubmit = (data) => {
    setName(data.name);
    setMail(data.mail);
    setText(data.text);
    router.push({
      pathname: '/confirm',
    });
  };

  return (
    <FadeIn>
      <div>
        <Navbar />
        <main>
          <div className="container">
            <h1>Contact</h1>
            <p>Please contact me here.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formElm">
                <label htmlFor="Name">Name
                  {errors.name && <span className="error">This field is required.</span>}
                  <input
                    name="name"
                    placeholder="Your name..."
                    ref={register({ required: true })}
                  />
                </label>
                <label htmlFor="Mail">Mail
                  {errors.mail && <span className="error">This field is required.</span>}
                  <input
                    name="mail"
                    placeholder="Your mail..."
                    ref={register({ required: true })}
                  />
                </label>
                <label htmlFor="text">Text
                  {errors.text && <span className="error">This field is required.</span>}
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
    </FadeIn>
  );
};

export default Contact;
