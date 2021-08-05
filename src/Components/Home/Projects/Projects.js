import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectData from './ProjectData.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import AOS from 'aos';
import './Projects.css';
import 'aos/dist/aos.css';
import { useState } from 'react';

const Projects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);

    useEffect(() => {
        setData(ProjectData)
        console.log(data);
    }, []);

    return (
        <section className="container pb-5 pt-5">

            <h4 data-aos="flip-left" className="text-white mt-5 mb-5 pb-5">Projects ——</h4>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            data.map(project =>  {
                                return (
                                    <div data-aos="fade-right" className="col-md-4 mb-5">
                                    <div className="Card">
                                        {/* Image */}
                                        <img className="Card_Images" src={project.image} alt="" />
                                        {/* Description overlay */}
                                        <div className="container Description">
                                            <p className="mt-2 Card_Title">{project.name}</p>
                                            <p className="Card_Description">{project.description}</p>
                                            <p className="Card_Info">{project.information}</p>
                                            {/* Buttons */}
                                            <div className="d-flex">
                                                {/* Live site */}
                                                <a href={project.preview} target="_blank" rel="noreferrer">
                                                    <div>
                                                        <button className="Preview--Button"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                                    </div>
                                                </a>
                                                {/* Details */}
                                                <div>
                                                    <button className="Details--Button">Details <FontAwesomeIcon icon={faAngleRight} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>

            {/* See more button.. */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2 ms-auto d-flex justify-content-center">
                        <Link to="/allprojects"><button className="SeeMoreButton">See more</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;