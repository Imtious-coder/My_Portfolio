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
                            <p className="text-dark mt-4 d-flex justify-content-center "> 2+ years of professional experience in Front-End Development.
                                Looking for a challenging role at a progressive organization to grow
                                my skills and knowledge with the goal of the organization’s success.
                                Highly passionate and skilled in front-end development with pixelperfect design and the use of the latest technologies and tools.
                            </p>
                            {/* Skills */}
                            <div className="row text-dark pt-3 d-flex justify-content-center">
                                <div data-aos="flip-left" className="col-md-12 border me-2 shadow-sm">
                                    {/* Front end skills */}
                                    <h3 className="text-center "> <b>—Front-End—</b></h3>
                                    <div className="mt-3 mb-3">
                                        <p><b> JavaScript   <b>|</b> ES6+  <b>|</b> React.js  <b>|</b> HTML5  <b>|</b> CSS3  <b>|</b> Bootstrap  <b>|</b> Tailwind  <b>|</b> Ant Design  <b>|</b> Material UI  <b>|</b> Netlify   <b>|</b> Git  <b>|</b> Npm </b> <b>|</b> Node.js <b>|</b> Express.js <b>|</b> Typescript <b>|</b> MongoDB  <b>|</b> Heroku  <b>|</b> REST API <b>|</b> Firebase  <b>|</b> Figma <b>|</b> Chrome Dev Tools <b>|</b> </p>
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