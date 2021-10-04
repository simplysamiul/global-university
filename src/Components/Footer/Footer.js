import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746984.3777154787!2d88.10047638415524!3d23.490586149541453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1633343169532!5m2!1sen!2sbd"
    return (
        <div className="footer-container">
           <div className="footer-body">
           <div className="campus-info">
                <Link to = "/">Privacy Policy</Link>
                <Link to = "/">Our Blogs</Link>
                <Link to = "/">Campus &#38; College </Link>
                <Link to = "/">Admission</Link>
                <Link to = "/">Notice Board</Link>    
            </div>
            <div className="contact-area">
                <div className="contact-info">
                    <p><i class="fas fa-envelope"></i> globaluniversity.bd@dhaka.com</p>
                    <p><i class="fas fa-phone-square-alt"></i> +880 1785 000 222</p>
                    <p><i class="fas fa-map-marker"></i> Gazipur, Dhaka, Bangladesh</p>
                </div>
                <div className="location-map">
                <iframe src={mapLink}></iframe>
                </div>
            </div>
            <div className="social-icon">
            <i class="fab fa-dribbble"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
            </div>
           </div>
           <marquee>All Copyright © Reserved In global-university.bd</marquee>
        </div>
    );
};

export default Footer;