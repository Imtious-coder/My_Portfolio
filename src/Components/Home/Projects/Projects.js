import React, { useEffect } from 'react';
import Doctor1 from './A_Doctors.png';
import StoreX1 from './StoreX1.jpg';
import Temperature1 from './Temperature1.png';
import Ashop1 from './Ashop1.png';
import School1 from './School1.jpg';
import Amazon1 from './Amazon1.png';
import './Projects.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <section className="container pb-5 pt-5">
            <h4 data-aos="flip-left" className="text-white mt-5 mb-5 pb-5">Projects ——</h4>

            <section>
                <div className="container">
                    <div className="row">
                        {/* A_Doctors card */}
                        <div data-aos="fade-right" className="col-md-4 mb-5">
                            <div className="Card">
                                {/* Image */}
                                <img style={{ width: '100%', height: '200px' }} src={Doctor1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <h4 className="mt-5">A_Doctors</h4>
                                    <p> Front-End Development</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://keen-sinoussi-d5c500.netlify.app/" target="_blank">
                                            <div>
                                                <button className="Preview--Button"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                            </div>
                                        </a>
                                        {/* Details */}
                                        <div>
                                            <button className="Details--Button">Details <FontAwesomeIcon className="pt-1" icon={faCaretRight} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* A_Doctors card */}
                        {/* StoreX card */}
                        <div data-aos="flip-right" className="col-md-4">
                            <div className="Card">
                                {/* Image */}
                                <img style={{ width: '100%', height: '200px' }} src={StoreX1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <h4 className="mt-5">StoreX</h4>
                                    <p> PSD to HTML</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://imtious-coder.github.io/Store_X/" target="_blank">
                                            <div>
                                                <button className="Preview--Button"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                            </div>
                                        </a>
                                        {/* Details */}
                                        <div>
                                            <button className="Details--Button">Details <FontAwesomeIcon className="pt-1" icon={faCaretRight} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* StoreX card */}
                        {/* Temperature-Finder card */}
                        <div data-aos="fade-left" className="col-md-4">
                            <div className="Card">
                                {/* Image */}
                                <img style={{ width: '100%', height: '200px' }} src={Temperature1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <h4 className="mt-5">Temperature-Finder</h4>
                                    <p> Full Stack Development</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://imtious-coder.github.io/Temperature-Finder/" target="_blank">
                                            <div>
                                                <button className="Preview--Button"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                            </div>
                                        </a>
                                        {/* Details */}
                                        <div>
                                            <button className="Details--Button">Details <FontAwesomeIcon className="pt-1" icon={faCaretRight} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Temperature-Finder card */}
                        {/* My_School card */}
                        <div data-aos="fade-right" className="col-md-4">
                            <div className="Card">
                                {/* Image */}
                                <img style={{ width: '100%', height: '100%' }} src={School1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <h4 className="mt-5">My_School</h4>
                                    <p> Full Stack E-Commerce Project</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://myschool-com.web.app/" target="_blank">
                                            <div>
                                                <button className="Preview--Button"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                            </div>
                                        </a>
                                        {/* Details */}
                                        <div>
                                            <button className="Details--Button">Details <FontAwesomeIcon className="pt-1" icon={faCaretRight} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* My_School card */}
                        {/* A_ShopBD card */}
                        <div data-aos="flip-right" className="col-md-4">
                            <div className="Card">
                                {/* Image */}
                                <img style={{ width: '100%', height: '100%' }} src={Ashop1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <h4 className="mt-5">A_ShopBD</h4>
                                    <p> Full Stack E-Commerce Project</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://ema-john-7355e.web.app/" target="_blank">
                                            <div>
                                                <button className="Preview--Button"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                            </div>
                                        </a>
                                        {/* Details */}
                                        <div>
                                            <button className="Details--Button">Details <FontAwesomeIcon className="pt-1" icon={faCaretRight} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* A_ShopBD card */}
                        {/* Amazon_Login_CLone card */}
                        <div data-aos="fade-left" className="col-md-4">
                            <div className="Card">
                                {/* Image */}
                                <img style={{ width: '100%', height: '100%' }} src={Amazon1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <h4 className="mt-5">Amazon_Login_CLone</h4>
                                    <p> Full Stack Development</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://fir-14da6.web.app/" target="_blank">
                                            <div>
                                                <button className="Preview--Button"> <FontAwesomeIcon icon={faEye} /> Preview</button>
                                            </div>
                                        </a>
                                        {/* Details */}
                                        <div>
                                            <button className="Details--Button">Details <FontAwesomeIcon className="pt-1" icon={faCaretRight} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Amazon_Login_CLone card */}
                        
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