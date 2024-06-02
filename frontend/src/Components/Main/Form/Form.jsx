import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wxv558c', 'template_7j2k8ck', form.current, 'y90EwwieEzJ1b5xjv')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <h2 className="mb-4 font-bold text-8xl mt-14">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-black-700">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full px-3 py-2 border-b-2 border-black-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter a valid email address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Your message"
            name="message"
            rows="4"
          ></textarea>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2 leading-tight" />
          <span className="pt-2 text-xl text-gray-700">
            I accept the <a href="#" className="text-blue-500">Terms of Service</a>
          </span>
        </div>
        <button
          type="submit"
          className="w-full px-3 py-3 text-white bg-blue-300 rounded-lg hover:bg-blue-400 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
