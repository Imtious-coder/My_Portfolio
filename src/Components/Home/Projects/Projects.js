import React, { useEffect } from 'react';
import Doctor1 from './Doctors1.png';
import Doctor2 from './Doctors2.png';
import Doctor3 from './Doctors3.png';
import School1 from './School1.jpg';
import School2 from './School2.png';
import School3 from './School3.png';
import Ashop1 from './Ashop1.png';
import Ashop2 from './Ashop2.png';
import Ashop3 from './Ashop3.png';
import StoreX1 from './StoreX1.jpg';
import StoreX2 from './StoreX2.png';
import StoreX3 from './StoreX3.png';
import './Projects.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect (() => {
        AOS.init({duration: 1000})
    }, [])
    const handleProject1 = () => {
        const Project_1 = document.getElementById("Project1");
        Project_1.addEventListener("click", () => {
            document.getElementById("Project1").style.display = "none";
            document.getElementById("Project1_Details1").style.display = "block";
        })
    }
    const handleProject2 = () => {
        const Project_2 = document.getElementById("Project2");
        Project_2.addEventListener("click", () => {
            document.getElementById("Project2").style.display = "none";
            document.getElementById("Project1_Details2").style.display = "block";
        })
    }
    const handleProject3 = () => {
        const Project_3 = document.getElementById("Project3");
        Project_3.addEventListener("click", () => {
            document.getElementById("Project3").style.display = "none";
            document.getElementById("Project1_Details3").style.display = "block";
        })
    }
    const handleProject4 = () => {
        const Project_4 = document.getElementById("Project4");
        Project_4.addEventListener("click", () => {
            document.getElementById("Project4").style.display = "none";
            document.getElementById("Project1_Details4").style.display = "block";
        })
    }
    return (
        <section className="container pb-5 pt-5">
            <h4 className="text-white mt-5 mb-5 pb-5">Projects ——</h4>

            <div className="row mb-5 pb-5">
                {/* A_Doctors Card */}
                <div data-aos="fade-right" id="Project1" className="col-md-6 hvr-grow">
                    <img src={Doctor1} class="d-block w-100 Images" alt="..." />
                    {/* Details Button */}
                    <button onMouseEnter={handleProject1} className="Details">Details</button>
                </div>

                <div id="Project1_Details1" className="col-md-6 justify-content-center ms-auto text-white">
                    <div className="mb-5 ms-5">
                        <h1>A_Doctors</h1>
                        <p>Full Stack Project</p>
                        <ul className="text-secondary">
                            <li>Dentist Appointment taking website.</li>
                            <li>Choose the service you want.</li>
                            <li>Pick any flexible date for appointment.</li>
                        </ul>
                        <p className="text-secondary"> <b>Tech and Tools: </b>JavaScript, React, HTML5, CSS3, Bootstrap, <br /> React Router, Fontawesome, Netlify, Git, Github</p>
                    </div>
                </div>
                {/* A_Doctors Card */}

                {/* MySchool Card */}
                <div data-aos="fade-left" id="Project2" className="col-md-6 hvr-grow">
                    <img src={School1} class="d-block w-100 Images" alt="..." />
                    <button onMouseEnter={handleProject2} className="Details">Details</button>
                </div>
                <div id="Project1_Details2" className="col-md-6 justify-content-center ms-auto text-white">
                    <div className="ms-5 mb-5">
                        <h1>My_School</h1>
                        <p>Full Stack Project</p>
                        <ul className="text-secondary">
                            <li>A School Management System.</li>
                            <li>Teachers information..</li>
                            <li>All notice.</li>
                            <li>Students informations.</li>
                            <li>Admin/Teachers can add or remove a notice.</li>
                            <li>Admin/Teachers are able to update results.</li>
                            <li>Students can update theis informations.</li>
                        </ul>
                        <p className="text-secondary"> <b>Tech and Tools: </b>JavaScript, React, Node, Express, HTML5, CSS3, Bootstrap, <br /> MaterialUI, React Router, Fontawesome, Git, Github</p>
                    </div>
                </div>
                {/* MySchool Card */}

                {/* AshopBD Card */}
                <div data-aos="fade-right" id="Project3" className="col-md-6 hvr-grow mt-4">
                    <img src={Ashop1} class="d-block w-100 Images" alt="..." />
                    <button onMouseEnter={handleProject3} className="Details">Details</button>
                </div>
                <div id="Project1_Details3" className="col-md-6 justify-content-center ms-auto text-white">
                    <div className="mb-5 ms-5">
                        <h1> AshopBD</h1>
                        <p>Full Stack Website</p>
                        <ul className="text-secondary">
                            <li>Awesome E-commerce website.</li>
                            <li>Select product, add to cart, remove from cart options</li>
                            <li>Google Authentication and Privet Routes.</li>
                        </ul>
                        <p className="text-secondary"> <b>Tech and Tools: </b> JavaScript, ES6, React, Material UI, NodeJS, <br /> ExpressJS, HTML5, CSS3, Bootstrap5, Firebase Authentication, React Router, Git, Github
                        </p>
                    </div>
                </div>
                {/* A_shopBD Card */}

                {/* StoreX Card */}
                <div data-aos="fade-left" id="Project4" className="col-md-6 hvr-grow mt-4">
                    <img src={StoreX1} class="d-block w-100 Images" alt="..." />
                    <button onMouseEnter={handleProject4} className="Details">Details</button>
                </div>
                <div id="Project1_Details4" className="col-md-6 justify-content-center ms-auto text-white">
                    <div className="mb-5 ms-5">
                        <h1> Store_X</h1>
                        <p>PSD to HTML</p>
                        <ul className="text-secondary">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>Font Awesome</li>
                        </ul>
                    </div>
                </div>
                {/* StoreX Card */}

            </div>

            {/* See more button.. */}
            <div className="container">
                <div className="row">
                    <div className="col-md-10 border-bottom-info"></div>
                    <div className="col-md-2">
                        <Link to="/allprojects"><button className="SeeMoreButton">See more</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;