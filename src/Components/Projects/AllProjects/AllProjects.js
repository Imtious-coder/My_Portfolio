import { faAngleRight, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import ProjectData from '../../Home/Projects/ProjectData.json';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AllProjects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);

    useEffect(() => {
        setData(ProjectData)
        console.log(data);
    }, []);
    return (
        <div  style={{ backgroundColor: "rgb(48, 49, 51)" }}>
            <section>
                <div className="container pt-5">
                    <div className="row">
                        {
                            data.map(project => {
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
        </div>
    );
};

export default AllProjects;