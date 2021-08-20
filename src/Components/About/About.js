import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import { useEffect } from 'react';
import Image3 from './My.jpg';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section style={{ backgroundColor: "#FEFCED" }}>
            <div className="container">
                <div className="row">
                    {/* Image */}
                    <div data-aos="fade-right" className="col-md-4 ">
                        <div className="d-flex justify-content-center mt-5 mb-5 pt-5 pb-5">
                            <img className="shadow-lg" id="Image1" src={Image3} alt="" />
                        </div>
                    </div>

                    <div className="col-md-1"></div>
                    {/* Description */}
                    <div data-aos="fade-left" className="col-md-7 mt-5 mb-5 pt-3 pb-5">
                        <div>
                            <h1 className=" d-flex justify-content-center text-dark">—— About me ——</h1>
                            {/* Details */}
                            <p className="text-dark mt-4 d-flex justify-content-center "> A passionate Front-End    
                                Developer. Searching for a challenging
                                role at a progressive organization that will help me to
                                implement my skills and knowledge with the goal of the
                                organization’s success. I am passionately in love with frontend shizzle with pixel-perfect design and will be a world-class
                                developer by 2022.</p>
                            {/* Skills */}
                            <div className="row text-dark pt-3 d-flex justify-content-center">
                                <div data-aos="flip-left" className="col-md-6 border me-2 shadow-sm">
                                    {/* Front end skills */}
                                    <p className="text-center "> <b>—Front-End—</b></p>
                                    <p className="text-center "> <b>|</b> JavaScript (ES6+)  <b>|</b> ReactJS  <b>|</b> REST API  <b>|</b> HTML5  <b>|</b> CSS3  <b>|</b> Bootstrap  <b>|</b> Antd  <b>|</b> SASS  <b>|</b> Material UI  <b>|</b> Typescript  <b>|</b></p>
                                </div>
                                {/* Back end skills */}
                                <div data-aos="flip-right" className="col-md-5 border shadow-sm">
                                    <p className="text-center "><b>—Back-End—</b></p>
                                    <p className="text-center "> <b>|</b> NodeJS <b>|</b> ExpressJS  <b>|</b> MongoDB  <b>|</b> Heroku  <b>|</b> Firebase  <b>|</b> Netlify <b>|</b></p>
                                </div>
                            </div>
                            {/* Tools */}
                            <div className="container mt-2">
                                <div className="row">
                                    <div data-aos="fade-up" className="col-md-12 text-center text-dark border shadow-sm">
                                        <p><b>—Tools—</b></p>
                                        <p><b>|</b> Git <b>|</b> Github <b>|</b> Npm <b>|</b> Figma <b>|</b> VS Code <b>|</b> Chrome Dev Tools <b>|</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;