import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import githubImage from './images/Github_wShadow.svg';
import linkedInImage from './images/LinkedIn_wShadow.svg'; 
import resumeImage from './images/Resume_wShadows.svg'
import projectImage from './images/ProjectPlaceHolder.svg'


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
   
      <section id="name-occupation"className="custom-section custom-projects">
        <div className="border p-4 rounded-lg wrapper-contact-name">
          <h2 className="text-4x1 font-bold">Your Name</h2>
          <p className="text-xl">Frontend Developer</p>
        </div>
        <div className='clear-both'>
          <a href={'https://github.com/ReginaldGreen02'} target="_blank" rel="noopener noreferrer">
            <img src={githubImage} alt="Github"  className='float-left icon-shadows'/>
          </a>
          <a href={'https://www.linkedin.com/in/reginaldgreen1102'} target="_blank" rel="noopener noreferrer">
            <img src={linkedInImage} alt="LinkedIn"  className='float-left icon-shadows'/>
          </a>
          <a href={'https://drive.google.com/file/d/1s97os03L9rRh96UcmTfcJda8erN3LhNa/view?usp=sharing'} target="_blank" rel="noopener noreferrer">
            <img src={resumeImage} alt="Resume"  className='float-left icon-shadows' />
          </a>
        </div>
      </section>
        
      <section  id = "about" className="custom-section custom-about">
        <div  className="border p-4 rounded-lg wrapper-about-me">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p  className="text-lg text-gray-700 ">
            Welcome to my portfolio! I am a passionate frontend developer with a strong
            focus on crating responsive and user-friendly web applications.
          </p>
        </div>
      </section>
    
      <section  id="projects" className="custom-section custom-projects">
        <div  className="border p-4 rounded-lg wrapper-projects">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className='wrapper'>
            <div id = "project-cards">
            <img src = {projectImage}></img>
            </div>
            <div class="project-info">
            <h4>Project 3</h4>
                <p>
                  Here you can describe what the project was about, the tech you
                  used, and what you learned
                </p>
                <a href="https://github.com/ReginaldGreen02/ScareBears" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
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
