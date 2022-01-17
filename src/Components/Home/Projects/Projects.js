import { faAngleRight, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectData from './ProjectData.json';
import './Projects.css';



const Projects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);

    useEffect(() => {
        setData(ProjectData.slice(0, 6))
        console.log(data);
    }, []);

    return (
        <section className="container pb-5 pt-5">
            <h4 data-aos="flip-left" className="my-md-4 pb-5 blue bold">PROJECTS ——</h4>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            data.map(project => {
                                return (
                                    <div data-aos="zoom-in" className="col-md-4 mb-5">
                                        <div className="Card">
                                            {/* Image */}
                                            <img className="Card_Images" src={project.image} alt="" />
                                            {/* Description overlay */}
                                            <div className="container Description">
                                                <p className="mt-2 blue Card_Title">{project.name}</p>
                                                <p className="Card_Description">{project.description}</p>
                                                <p className="Card_Info">{project.information}</p>
                                                {/* Buttons */}
                                                <div className="d-flex">
                                                    {/* Live site */}
                                                    <a href={project.website} target="_blank" rel="noreferrer">
                                                        <div>
                                                            <button className="Preview--Button"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                                        </div>
                                                    </a>
                                                    {/* Details */}
                                                    <Link to={"/projectDetails/" + project.name}>
                                                        <div>
                                                            <button className="Details--Button">Details <FontAwesomeIcon icon={faAngleRight} /></button>
                                                        </div>
                                                    </Link>
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
            <div className="container mt-md-5">
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