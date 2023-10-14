import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import PortfolioLanding from './PortfolioLanding';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className={`p-4 bg-transparent ${isScrolled ? 'sticky-nav' : ''}`}>
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold"></h1>
          <Dropdown />
        </nav>
      </header>
      <PortfolioLanding />
    </div>
  );
}

export default App;
