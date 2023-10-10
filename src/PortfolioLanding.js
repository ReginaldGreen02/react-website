import React from 'react';

function PortfolioLanding() {
  return (
    <div className="portfolio-landing">
      <section id="name-occupation" className="custom-section custom-portfolio">
        <div className="border p-4 rounded-lg">
          <h2 className="text-4xl font-bold">Your Name</h2>
          <p className="text-xl">Frontend Developer</p>
        </div>
      </section>

      <section id="about" className="custom-section custom-about">
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            Welcome to my portfolio! I am a passionate frontend developer with a strong
            focus on creating responsive and user-friendly web applications.
          </p>
        </div>
      </section>

      <section id="portfolio" className="custom-section custom-portfolio">
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
          {/* Add your portfolio projects here */}
        </div>
      </section>

      <section id="contact" className="custom-section custom-contact">
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p className="text-lg text-gray-700">Email: your@email.com</p>
          <p className="text-lg text-gray-700">LinkedIn: linkedin.com/your-profile</p>
          {/* Add other contact information as needed */}
        </div>
      </section>
    </div>
  );
}

export default PortfolioLanding;
