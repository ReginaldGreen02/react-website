import React from 'react';

function ContactForm() {
  return (
    <div className="border p-4 rounded-lg wrapper-contact-name">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form action="https://formsubmit.co/r.green111102@gmail.com" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full border rounded p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
