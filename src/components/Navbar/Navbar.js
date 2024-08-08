import React from 'react';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar flex justify-between items-center w-[95%] sm:w-[90%] md:w-[95%] xl:w-[1400px] mx-auto">
    <div className="left-side flex items-center gap-4">
      <a href="./">
        <img src="https://topic-academy.vercel.app/assets/logo-BYurF9JP.png" alt="logo" className="logo" />
        
      </a>
      
      <div className="nav_links hidden md:flex md:text-lg gap-5 lg:text-xl">
        <a href="#why-topik">Nega biz</a>
        <a href="#results">Natijalar</a>
        <a href="#register">Kurslar</a>
        <a href="#faq">Ko'p beriladigon savollar</a>
      </div>
    </div>
    <div className="contact-info">
      <a href="tel:+998333060098" className="phone-number">+998 (33) 306 0098</a>
      <h2 className="contact-text">Hoziroq bog'laning</h2>
    </div>
  </nav>
);

export default Navbar;
