import { faArrowAltCircleDown, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import '../../../../node_modules/hover.css/css/hover-min.css';
import './Description.css';
import Image from './images.jpg';

const Description = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    
    return (
        <section className="container pb-md-5">
            <div data-aos="fade-up" className="row">
                <div className="col-md-6 ms-3">
                    {/* NAME */}
                    <h1 
                        className="
                            pt-md-5
                            mt-5 
                            mb-1 
                            Font2 
                            black 
                            bold 
                            blue">
                        Imtious Islam
                    </h1>
                    {/* TITLE */}
                    <h5 
                        className="
                            mb-3 
                            Font2 
                            black 
                            bold"> 
                        JavaScript Developer {" "}
                        <FontAwesomeIcon icon={faSitemap} />
                    </h5>
                    {/* Description */}
                    <small 
                        className="
                            text-secondary 
                            Description_Details
                            Font2">
                            2+ years of learning experience in Front-End Development. Highly interested in Python & Golang. Self-motivated and willing to take challenges to improve my skills with the success of the organization. Experience in leadership and team management.
                        {/* 2+ years of learning experience in Front-End Development. Highly skilled in front-end development with pixel-perfect design and the use of the latest technologies and tools. Self-motivated and willing to take challenges to improve my skills with the success of the organization. Experience in leadership and team management. */}
                    </small> <br />
                    {/* DOWNLOAD BUTTON */}
                    <a 
                        href="https://drive.google.com/file/d/1-VONdHwCbjIqA6TXnQYCcmRfuGTna0Sw/view?usp=sharing" target="_blank" 
                        rel="noreferrer" 
                        className='hvr-grow' 
                        download>
                        <button 
                            className="
                                button3D 
                                mt-4 
                                bold">
                            Resume
                            <FontAwesomeIcon 
                                className="Button-Icon ms-1" 
                                icon={faArrowAltCircleDown} />
                        </button>
                    </a>
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