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
        <section className="container pb-5">
            <div data-aos="fade-up" className="row">
                <div className="col-md-6 ms-3">
                    {/* Name */}
                    <h1 className="text-white pt-5 mt-5 mb-1">Imtious Islam Midul</h1>
                    {/* Title */}
                    <h5 className="text-white mb-3"> JavaScript Developer (M E R N - S T A C K)</h5>
                    {/* Description */}
                    <small className="text-secondary Description_Details">2+ years of professional experience in Front-End Development. Highly skilled in front-end development with pixel-perfect design and the use of the latest technologies and tools. Self-motivated and willing to take challenges to improve my skills with the success of the organization. Experience in leadership and team management.
                    </small> <br />
                    {/* Resume Download Button */}
                    <a href="https://drive.google.com/file/d/1Z3AaubCs_Lg6gStURI7jNX0H3G3gOhav/view?usp=sharing" target="_blank" className="hvr-grow" rel="noreferrer" download><button className="Button mt-3">Resume<FontAwesomeIcon className="Button-Icon ms-1" icon={faArrowAltCircleDown} /></button></a>
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