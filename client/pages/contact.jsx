/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/navbar';

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
          <h1>Contact</h1>
          <p>Please contact me here.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formElm">
              <label htmlFor="Name">Name</label>
              <input name="Name" placeholder="Your name..." ref={register} />
              <label htmlFor="Mail">Mail</label>
              <input name="Mail" placeholder="Your mail..." ref={register({ required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <input type="submit" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
