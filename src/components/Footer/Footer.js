import React from 'react';
import LOGO from '../../images/LOGO.png';
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="display-flex">
      <img src={ LOGO }/>
      <div>
        <a
          href="https://www.linkedin.com/company/tractian/"
          target="blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.facebook.com/tractian"
          target="blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.youtube.com/c/TRACTIAN/"
          target="blank"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/tractian/"
          target="blank"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
