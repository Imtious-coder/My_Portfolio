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
                                <b>Front-End: </b>
                                <p><b>|</b> React.js  <b>|</b> JavaScript  <b>|</b> ES6+  <b>|</b> HTML5  <b>|</b> CSS3  <b>|</b> Bootstrap  <b>|</b> Tailwind  <b>|</b> Ant Design  <b>|</b> Material UI  <b>|</b></p>
                            </div>
                            {/* Back end */}
                            <div className="mt-3 border shadow-sm">
                                <b>Back-End: </b>
                                <p><b>|</b> Node.js <b>|</b> Express.js  <b>|</b> MongoDB  <b>|</b> Heroku  <b>|</b> REST API <b>|</b> Firebase  <b>|</b> Netlify <b>|</b></p>
                            </div>
                            {/* Tools */}
                            <div className="mt-3 border shadow-sm">
                                <b>Tools: </b>
                                <p><b>|</b> Git <b>|</b> Npm <b>|</b> Figma <b>|</b> VS Code <b>|</b> Chrome Dev Tools <b>|</b></p>
                            </div>
                        </div>
                        {/* Skills */}
                        {/* Experience */}
                        <div data-aos="fade-right" className="text-center text-dark">
                            <h4 style={{ backgroundColor: "grey" }} className="text-center mt-4 pb-1 text-dark shadow-lg"><b>EXPERIENCE</b></h4>
                            <div className="border shadow-sm">
                                <b>Software Engineer Intern </b>
                                <p className="m-0">CircleDi</p>
                                <p>20th may 2021 - Current</p>
                            </div>
                        </div>
                        {/* Experience */}
                        {/* Hobbies */}
                        <div data-aos="fade-right" className="text-center text-dark mb-5">
                            <h4 style={{ backgroundColor: "grey" }} className="text-center mt-4 pb-1 text-dark shadow-lg"><b>EXPERIENCE</b></h4>
                            <div className="row mt-3">
                                <div className="col-md-6 shadow-sm"><p>Coding</p></div>
                                <div className="col-md-6 shadow-sm"><p>Reading</p></div>
                                <div className="col-md-6 shadow-sm"><p>Writing</p></div>
                                <div className="col-md-6 shadow-sm"><p>Traveling</p></div>
                            </div>
                        </div>
                        {/* Hobbies */}
                    </div>
                    {/* Left side */}

                    {/* Right side */}
                    <div className="col-md-1"></div>
                    <section data-aos="fade-left" className="col-md-7 mt-5 text-dark">
                        {/* Description... */}
                        <div data-aos="zoom-in" className="text-justify">
                            <p>A passionate curious Front-End Developer. Searching for a challenging role at a progressive organization that will help me to implement my skills and knowledge with the goal the organization success. I am passionately in love with front-end shizzle with pixel perfect design and hungry to learn new things daily.</p>
                        </div>
                        <div>
                            <h4 className="text-center mt-5 pb-1 text-dark"><b>———————————PROJECTS——————————</b></h4>
                        </div>
                        {/* project 1 */}
                        <div data-aos="flip-left" className="ps-5 pt-3 border shadow-sm">
                            <h5><b>A_Doctors</b></h5>
                            <p><b>Front End Development (React)</b></p>
                            <ul>
                                <li>Appointment taking website.</li>
                                <li>Choose the service you want.</li>
                                <li>Pick any flexible date for appointment.</li>
                            </ul>
                            <p><b>Tech and Tools:</b> HTML5, CSS3, Bootstrap5, JavaScript, ES6, React, <br /> Material UI, React Router, Netlify, Git, Github</p>
                        </div>
                        {/* Project 2 */}
                        <div data-aos="flip-right" className="ps-5 mt-2 pt-3 border shadow-sm">
                            <h5><b>My_School </b></h5>
                            <p><b>Full Stack Website(ongoing)</b></p>
                            <ul>
                                <li>School Management System</li>
                                <li>Teachers, Students, Notice, Results details</li>
                                <li>Admin can update Notice, result and other details</li>
                            </ul>
                            <p><b>Tech and Tools:</b> HTML5, CSS3, Bootstrap5, React, Material UI, <br /> React Router, Git, Github
                            </p>
                        </div>
                        {/* Project 3 */}
                        <div data-aos="flip-up" className="ps-5 mt-2 pt-3 border shadow-sm">
                            <h5><b>AshopBD</b></h5>
                            <p><b>Full Stack Website</b></p>
                            <ul>
                                <li>Awesome E-commerce website.</li>
                                <li>Select product, add to cart, remove from cart.</li>
                                <li>Google Authentication and Privet Routes.</li>
                            </ul>
                            <p><b>Tech and Tools:</b> HTML5, CSS3, Bootstrap5, JavaScript, ES6, React, <br /> Material UI, NodeJS, ExpressJS, Firebase Authentication, React Router, Git, Github
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
                                <p>Feni Computer Institute</p>
                                <p>Telecom and Computer Science</p>
                                <p>3rd semester (3.32)</p>
                            </div>
                            {/* SSC */}
                            <div className="mt-3 border shadow-sm pt-2">
                                <p><b>S.S.C (2018)</b></p>
                                <p>Shimpur High School </p>
                                <p>Science - 4.44	</p>
                            </div>
                        </div>
                        {/* Others skills */}
                        <div data-aos="zoom-in" className="mt-4 pt-3 border shadow-sm text-center">
                            <p>Quick Learner | Team Worker | Tech Lover</p>
                        </div>
                    </section>
                    {/* Right side */}
                </div>
            </div>
        </section>
    );
};

export default Resume;