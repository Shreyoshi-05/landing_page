import React, { useEffect, useState } from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [smallSize, setSmallSize] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function getSize() {
      console.log(window.innerWidth);
      let size = window.innerWidth;
      if (size < 900) {
        setSmallSize(true);
      } else {
        setSmallSize(false);
      }
    }

    window.addEventListener("resize", getSize);
    return () => removeEventListener("resize", getSize);
  }, []);

  console.log(open);

  return (
    <div className="nav_container">
      <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      {smallSize ? (
        <div className="logo active">
          {open ? (
            <ImCross size={26} color="white" onClick={() => setOpen(false)} />
          ) : (
            <GiHamburgerMenu
              size={26}
              color="white"
              onClick={() => setOpen(true)}
            />
          )}
          <img src="/logo.png" alt="" />
        </div>
      ) : (
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
      )}

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
    {
      open && <div className="dropdown">
        <Link to="#">me</Link>
        <Link to="#">About</Link>
        <Link to="#">Packages</Link>
        <Link to="#">Gallery</Link>
        <Link to="#">Contact</Link>
      </div>
    }
    </div>
  );
};

export default Nav;
