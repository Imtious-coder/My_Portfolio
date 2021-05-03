import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGitAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <footer data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0" className="bg-dark pb-4">
            <div className="container pt-5">
                <div className="row">
                    {/* Socila links */}
                    <div className="col-md-4">
                        <p id="Social">Say Hello . . .</p>
                        {/* Icons */}
                        <a href="https://www.facebook.com/profile.php?id=100030607042215" ><FontAwesomeIcon id="Social-Icon1" icon={faFacebook} /></a>
                        <a href="https://github.com/Imtious-coder" ><FontAwesomeIcon id="Social-Icon2" icon={faGitAlt} /></a>
                        <a href="https://www.linkedin.com/in/imtious-islam-842a73189/" ><FontAwesomeIcon id="Social-Icon3" icon={faLinkedin} /></a>
                    </div>
                    <div className="col-md-4"></div>
                    {/* Copyright */}
                    <div className="col-md-4 d-flex align-items-center text-white">
                        <p>© All rights 2021 reserved by "@Imtious"</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;