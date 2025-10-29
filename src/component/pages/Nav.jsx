import React, { useEffect, useState } from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`} >
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <div className="menu">

        <Link to="#">me</Link>
        <Link to="#">About</Link>
        <Link to="#">Packages</Link>
        <Link to="#">Gallery</Link>
        <Link to="#">Contact</Link>
      </div>
      <div className="btn">
        <button>Log In</button>
      </div>
    </div>
  )
}

export default Nav