import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { BsFillTelephoneMinusFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <section>
      <div className="footer__container container">
        <div className="school__info">
          <div className="logo">
            <img src={logo} alt="school logo" />
            <p>ICAST <span>SCHOOL</span></p>
          </div>
          <div className="text">
            <p>Welcome to ICAST School, where we nurture young minds and foster a love for learning. 
               Our commitment to academic excellence and holistic development ensures that every child thrives.</p>
          </div>
          <div className="socials">
            <ul>
              <li><Link to="#"><FaFacebookF /></Link></li>
              <li><Link to="#"><FaTiktok /></Link></li>
              <li><Link to="#"><FaInstagram /></Link></li>
            </ul>
          </div>
        </div>
        <div className="quick__links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/portal">Portal</Link></li>
            <li><Link to="/admission">Admission</Link></li>
          </ul>
        </div>
        <div className="contact__us">
          <h2>Contact Us</h2>
          <div className="text">
            <p>If you have any questions or need further information, please don't hesitate to reach out to us. 
               We're here to help you!</p>
          </div>
          <div className="contact__info">
            <p><FaAddressBook className='icon' /><span>123 School Lane, Education City, EC 12345</span></p>
            <p><BsFillTelephoneMinusFill className='icon' /><span>(123) 456-7890</span></p>
            <p><MdMarkEmailUnread className='icon' /><span>info@icast-school.edu</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
