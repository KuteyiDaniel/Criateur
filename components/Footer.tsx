import React from 'react';
import Image from 'next/image';
import '@/css/components/footer.scss';
import FooterLogo from "@/images/Criateur Logo 2.svg";
import EllipseLogo from "@/images/Ellipse 2.svg";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Image src={FooterLogo} alt="Criateur Logo" width={40} height={40} />
          <span className="brand-name">CRIATEUR</span>
        </div>

        <div className="footer-columns">
          <div className="column">
            <h4>Information</h4>
            <p>About Us</p>
            <p>Testimonials</p>
          </div>
          <div className="column">
            <h4>Helpful Links</h4>
            <p>Services</p>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
          <div className="column">
            <h4>Our Services</h4>
            <p>Content creation & Strategy</p>
            <p>Branding & Design</p>
            <p>Digital Marketing Management</p>
            <p>Marketing Consulting & Auditing</p>
          </div>
          <div className="column">
            <h4>Contact Us</h4>
            <p>+2349034452816</p>
            <p>reachcriateur@outlook.com</p>
            <div className="socials">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-ellipse">
        <Image src={EllipseLogo} alt="Footer Ellipse" />
      </div>
    </footer>
  );
};

export default Footer;
