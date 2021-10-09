import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faMobileAlt, faEnvelope, faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import Image1 from './My.jpg';
import './Resume.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Resume = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section>
            <div className="container">
                <div className="row">
                    {/* Left side */}
                    <div data-aos="fade-right" style={{ backgroundColor: "lightGrey" }} className="col-md-4 ">
                        {/* Image and Name */}
                        <div>
                            <div data-aos="zoom-in" className="d-flex justify-content-center mt-5">
                                <img id="Image" src={Image1} alt="" />
                            </div>
                            <h1 className="text-center mt-3 text-dark"><b>Imtious Islam</b></h1>
                            <p className="text-center text-dark"><b>Front-End Developer</b></p>
                            {/* Icons */}
                            <div className="text-center">
                                <FontAwesomeIcon className="Icon1" icon={faFacebook} />
                                <FontAwesomeIcon className="Icon2" icon={faGithub} />
                                <FontAwesomeIcon className="Icon3" icon={faLinkedin} />
                            </div>
                        </div>
                        {/* Image and Name */}

                        {/* Contact */}
                        <div data-aos="fade-right">
                            {/* Title */}
                            <h4 style={{ backgroundColor: "grey" }} className="text-center mt-5 pb-1 text-dark shadow-lg"><b>CONTACT</b></h4>
                            <div>
                                {/* Contact Details */}
                                <div className="text-dark mt-3 border shadow-sm">
                                    <div className="d-flex justify-content-center">
                                        <FontAwesomeIcon className="mt-1 me-1" icon={faMapMarkerAlt} />
                                        <p>Cumilla, Bangladesh</p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <FontAwesomeIcon className="mt-1 me-1" icon={faMobileAlt} />
                                        <p>+8801635501610</p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <FontAwesomeIcon className="mt-1 me-1" icon={faEnvelope} />
                                        <p>iarafat386@gmail.com</p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <FontAwesomeIcon className="mt-1 me-1" icon={faGlobeEurope} />
                                        <p>https://portfolio-c926a.web.app/</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Contact */}

                        {/* Skils */}
                        <div data-aos="fade-right" className="text-center text-dark">
                            <h4 style={{ backgroundColor: "grey" }} className="text-center mt-3 pb-1 text-dark shadow-lg"><b>SKILL</b></h4>
                            {/* Front end */}
                            <div className="mt-3 border shadow-sm">
                                <p><b> JavaScript   <b>|</b> ES6+  <b>|</b> React.js  <b>|</b> HTML5  <b>|</b> CSS3  <b>|</b> Bootstrap  <b>|</b> Tailwind  <b>|</b> Ant Design  <b>|</b> Material UI  <b>|</b> Netlify   <b>|</b> Git  <b>|</b> Npm </b> <b>|</b> Node.js <b>|</b> Express.js <b>|</b> Typescript <b>|</b> MongoDB  <b>|</b> Heroku  <b>|</b> REST API <b>|</b> Firebase  <b>|</b> Figma <b>|</b> Chrome Dev Tools <b>|</b> </p>
                            </div>
                        </div>
                        {/* Skills */}

                        {/* Experience */}
                        <div data-aos="fade-right" className="text-center text-dark">
                            <h4 style={{ backgroundColor: "grey" }} className="text-center mt-4 pb-1 text-dark shadow-lg"><b>EXPERIENCE</b></h4>
                            <div className="border shadow-sm pt-2 mt-3">
                                <b>Front-End Developer </b>
                                <p className="m-0">DeshIT</p>
                                <p>2<sup>nd</sup> May 2021 - 5<sup>th</sup> May</p>
                            </div>
                            <div className="border shadow-sm pt-2">
                                <b>Software Engineer Intern </b>
                                <p className="m-0">CircleDi</p>
                                <p>20<sup>th</sup> May 2021 - Current</p>
                            </div>
                        </div>
                        {/* Experience */}

                        {/* Hobbies */}
                        <div data-aos="fade-right" className="text-center text-dark mb-3">
                            <h4 style={{ backgroundColor: "grey" }} className="text-center mt-4 pb-1 text-dark shadow-lg"><b>HOBBIES</b></h4>
                            <div className="row mt-3">
                                <div className="col-md-6 shadow-sm"><p>Coding</p></div>
                                <div className="col-md-6 shadow-sm"><p>Reading</p></div>
                                <div className="col-md-6 shadow-sm"><p>Writing</p></div>
                                <div className="col-md-6 shadow-sm"><p>Traveling</p></div>
                            </div>
                        </div>
                        {/* Hobbies */}

                        {/* Others skills */}
                        <div data-aos="zoom-in" className="mt-2 pt-3 border shadow-sm text-center text-secondary">
                            <p><b>Quick Learner | Team Worker | Tech Lover</b></p>
                        </div>
                    </div>
                    {/* Left side */}

                    {/* Right side */}
                    <div className="col-md-1"></div>
                    <section data-aos="fade-left" className="col-md-7 mt-5 text-dark">
                        {/* Description... */}
                        <div data-aos="zoom-in" className="text-justify">
                            <p>2+ years of professional experience in Front-End Development. Highly skilled in front-end development with pixel-perfect design and the use of the latest technologies and tools. Self-motivated and willing to take challenges to improve my skills with the success of the organization. Experience in leadership and team management.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-center mt-5 pb-1 text-dark"><b>———————————PROJECTS——————————</b></h4>
                        </div>
                        {/* project 1 */}
                        <div data-aos="flip-left" className="ps-5 pt-3 border shadow-sm">
                            <h5><b>Note App</b></h5>
                            <p><b>Front End Development (React)</b></p>
                            <ul>
                                <li>A note app by JavaScript.</li>
                                <li>Add multiple notes.</li>
                                <li>Select and edit notes.</li>
                                <li>Live preview of edit and clean code.</li>
                            </ul>
                            <p><b>Tech and Tools:</b>  React.js, JavaScript (ES6+), HTML5, CSS3, React Hooks, React Markdown, React Uuid, and Git</p>
                        </div>
                        {/* Project 2 */}
                        <div data-aos="flip-right" className="ps-5 mt-2 pt-3 border shadow-sm">
                            <h5><b>Calculator </b></h5>
                            <p><b>Front End Development (React)</b></p>
                            <ul>
                                <li>Responsive design.</li>
                                <li>Smooth calculation.</li>
                                <li>Clean code.</li>
                            </ul>
                            <p><b>Tech and Tools:</b> React.js, JavaScript (ES6+), HTML5, CSS3,  React Hooks, Material UI, <br /> React Router, CSS Grid, and Git
                            </p>
                        </div>
                        {/* Project 3 */}
                        <div data-aos="flip-up" className="ps-5 mt-2 pt-3 border shadow-sm">
                            <h5><b>Comus</b></h5>
                            <p><b>Front End Development (React)</b></p>
                            <ul>
                                <li>A color picker website.</li>
                                <li>Pick the color and get the color code.</li>
                                <li>Live background changes on color pick. </li>
                                <li>Smooth, responsive, clean, & well commented code.</li>
                            </ul>
                            <p><b>Tech and Tools:</b> React.js, JavaScript (ES6+), HTML5, CSS3, React Color, Git, and Netlify.
                            </p>
                        </div>
                        {/* Eduvation section */}
                        <div data-aos="zoom-in" className="text-center">
                            <div>
                                <h4 className="text-center mt-5 pb-1 text-dark"><b>———————————EDUCATION——————————</b></h4>
                            </div>
                            {/* Diploma */}
                            <div className="mt-3 border shadow-sm pt-2">
                                <p><b>Diploma In Engineering (ongoing)</b></p>
                                <p>Feni Computer Institute (FCI)</p>
                                <p>Telecommmunication & Computer Science Technology</p>
                                <p>3rd semester (3.32)</p>
                            </div>
                            {/* SSC */}
                            <div className="mt-3 mb-2 pb-1 border shadow-sm pt-2">
                                <p><b>S.S.C (2018)</b></p>
                                <p>Shimpur High School </p>
                                <p>Science - 4.44	</p>
                            </div>
                        </div>

                    </section>
                    {/* Right side */}
                </div>
            </div>
        </section>
    );
};

export default Resume;