import React, { useState } from 'react';

function NavBar({ setPage }) {
  const [open, setOpen] = useState(false);

  const handleClick = (page) => {
    setPage(page);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">MyWebsite</div>
      <nav>
        <ul className={`nav-links ${open ? 'active' : ''}`}>
          <li><button onClick={() => handleClick('home')}>Home</button></li>
          <li><button onClick={() => handleClick('about')}>About</button></li>
          <li><button onClick={() => handleClick('services')}>Services</button></li>
          <li><button onClick={() => handleClick('contact')}>Contact</button></li>
          <li><button onClick={() => handleClick("signup")}>Sign Up</button></li>

        </ul>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <div/>
          <div/>
          <div/>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
