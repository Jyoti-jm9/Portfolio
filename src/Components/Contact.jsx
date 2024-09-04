import React, { useState } from 'react';

const Contact = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage success or warning messages
  const [statusMessage, setStatusMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formFields = new FormData(event.target);
    formFields.append('access_key', '46c0be78-d498-4be8-b619-501e48fc17c8');

    const object = Object.fromEntries(formFields);
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log('Success', res);
        setStatusMessage('Message sent successfully!');
        // Clear form fields after submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage('Failed to send the message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      setStatusMessage('Error occurred. Please try again.');
    }
  };

  // Update form fields state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative flex items-top justify-center min-h-[700px] sm:items-center sm:pt-0">
  <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
    <div className="mt-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
          {/* Contact Information */}
          <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
            Get in touch
          </h1>
          <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
            Fill in the form and send me a message directly
          </p>

          {/* Social Links */}
          <div className="flex items-center mt-8 text-gray-600">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm12.5 10.3h-3v-4.5c0-1.11-.9-2-2-2s-2 .89-2 2v4.5h-3v-9h3v1.5c.87-1.14 2.15-1.5 3.25-1.5 2.62 0 4.75 2.13 4.75 4.75v4.25z"
              />
            </svg>
            <div
              className="ml-4 text-md tracking-wide font-semibold w-40 cursor-pointer"
              onClick={() => window.open('https://www.linkedin.com/in/jyoti-mondal-469849239/', '_blank')}
            >
              LinkedIn
            </div>
          </div>

          <div className="flex items-center mt-4 text-gray-600">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.43 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.25c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.23.96-.27 1.98-.4 3-.4s2.04.14 3 .41c2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.61-5.48 5.91.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58 4.78-1.58 8.21-6.08 8.21-11.39 0-6.63-5.37-12-12-12z"
              />
            </svg>
            <div
              className="ml-4 text-md tracking-wide font-semibold w-40 cursor-pointer"
              onClick={() => window.open('https://github.com/Jyoti-jm9', '_blank')}
            >
              GitHub
            </div>
          </div>

          <div className="flex items-center mt-2 text-gray-600">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              mondaljyoti773@gmail.com
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="p-6 flex flex-col justify-center" onSubmit={onSubmit}>
          {/* Full Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col mt-2">
            <label htmlFor="email" className="hidden">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col mt-2">
            <label htmlFor="message" className="hidden">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
          >
            Submit
          </button>

          {/* Status Message */}
          {statusMessage && <p className="mt-3 text-red-500">{statusMessage}</p>}
        </form>
      </div>
    </div>
  </div>
</div> 

  );
};

export default Contact;
