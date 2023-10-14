import React, { useEffect } from 'react';
import ContactForm from './ContactForm';

function PortfolioLanding() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="portfolio-landing">
      <section id="name-occupation" className="custom-section custom-projects">
        <div className="border p-4 rounded-lg wrapper">
          <h2 className="text-4x1 font-bold">Your Name</h2>
          <p className="text-xl">Frontend Developer</p>
        </div>
      </section>

      <section  id = "about" className="custom-section custom-about">
        <div  className="border p-4 rounded-lg wrapper">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p  className="text-lg text-gray-700 ">
            Welcome to my portfolio! I am a passionate frontend developer with a strong
            focus on crating responsive and user-friendly web applications.
          </p>
        </div>
      </section>

      <section  id="projects" className="custom-section custom-projects">
        <div  className="border p-4 rounded-lg wrapper">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div id = "project-cards">
            <div class></div>
          </div>
        </div>
      </section>

      <section id="contact" className="custom-section custom-contact">
      <ContactForm />
      </section>
    </div>
  );
}

export default PortfolioLanding;
