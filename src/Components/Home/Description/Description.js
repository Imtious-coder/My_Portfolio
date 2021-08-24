import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

import './Description.css';
import '../../../../node_modules/hover.css/css/hover-min.css';
import Resume from './RESUME.pdf';
import Image from './images.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Description = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="container">
            <div data-aos="fade-up" className="row">
                <div className="col-md-6 ms-3">
                    {/* Name */}
                    <h1 className="text-white pt-5 mt-5 mb-1">Imtious Islam Midul</h1>
                    {/* Title */}
                    <h5 className="text-white mb-3">Front-End Developer</h5>
                    {/* Description */}
                    <small className="text-secondary Description_Details">A passionate and curious Frontend Developer. Ready to start a challenging role at a progressive organization to implement my skills and knowledge with the goal of the organization’s success. Excellent time management skills with experience of 20+ projects, including e-commerce applications. I’ve got a good grasp of the latest technologies and tools.
                    </small> <br />
                    {/* Resume Download Button */}
                    <a href={Resume} target="_blank" className="hvr-grow" rel="noreferrer" download><button className="Button mt-3">Resume<FontAwesomeIcon className="Button-Icon ms-1" icon={faArrowAltCircleDown} /></button></a>
                </div>
                <div className="col-md-1"></div>
                {/* Right Side */}
                <div className="col-md-4 mt-5">
                    <img src={Image} className="Image" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Description;