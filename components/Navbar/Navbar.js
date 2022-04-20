import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from  '../../public/loogo.png'

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3><Image src={Logo} alt="Logo0"  width={100}
      height={60} quality={100}/></h3>
      <nav ref={navRef}>
        
        <a href="#">Home</a>
        
        <a href="#">About</a>
        <a href="#">Contact</a>
        
        <a href="#">Newsletter</a>
        
        <button className="get">Get In Touch</button>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header> 
  );
};

export default Navbar;
