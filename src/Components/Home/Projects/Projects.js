import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import AOS from 'aos';
import './Projects.css';
import 'aos/dist/aos.css';

// images
import Doctor1 from './A_Doctors.png';
import StoreX1 from './StoreX1.jpg';
import Temperature1 from './Temperature1.png';
import Ashop1 from './Ashop1.png';
import School1 from './School1.jpg';
import Amazon1 from './Amazon1.png';
import Calculator from './calculator.png';

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

                        {/* Calculator card */}
                        <div data-aos="fade-right" className="col-md-4 mb-5">
                            <div className="Card">
                                {/* Image */}
                                <img className="Card_Images" src={Calculator} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <p className="mt-2 Card_Title">Calculator</p>
                                    <p className="Card_Description"> Front-End Development</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://dreamy-curran-97dd26.netlify.app/" target="_blank" rel="noreferrer">
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
                        {/* Calculator card */}

                        {/* A_Doctors card */}
                        <div data-aos="fade-right" className="col-md-4 mb-5">
                            <div className="Card">
                                {/* Image */}
                                <img className="Card_Images" src={Doctor1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <p className="mt-2 Card_Title">A_Doctors</p>
                                    <p className="Card_Description"> Front-End Development</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://keen-sinoussi-d5c500.netlify.app/" target="_blank" rel="noreferrer">
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
                        <div data-aos="flip-right" className="col-md-4 mb-5">
                            <div className="Card">
                                {/* Image */}
                                <img className="Card_Images" src={StoreX1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <p className="mt-2 Card_Title">StoreX</p>
                                    <p className="Card_Description"> PSD to HTML</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://imtious-coder.github.io/Store_X/" target="_blank" rel="noreferrer">
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
                        <div data-aos="fade-left" className="col-md-4 mb-5">
                            <div className="Card">
                                {/* Image */}
                                <img className="Card_Images" src={Temperature1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <p className="mt-2 Card_Title">Temperature-Finder</p>
                                    <p className="Card_Description"> Full Stack Development</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://imtious-coder.github.io/Temperature-Finder/" target="_blank" rel="noreferrer">
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
                        <div data-aos="fade-right" className="col-md-4 mb-5">
                            <div className="Card">
                                {/* Image */}
                                <img className="Card_Images" src={School1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <p className="mt-2 Card_Title">My_School</p>
                                    <p className="Card_Description"> Full Stack E-Commerce Project</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://myschool-com.web.app/" target="_blank" rel="noreferrer">
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
                        <div data-aos="flip-right" className="col-md-4 mb-5">
                            <div className="Card">
                                {/* Image */}
                                <img className="Card_Images" src={Ashop1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <p className="mt-2 Card_Title">A_ShopBD</p>
                                    <p className="Card_Description"> Full Stack E-Commerce Project</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://ema-john-7355e.web.app/" target="_blank" rel="noreferrer">
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
                        <div data-aos="fade-left" className="col-md-4 mb-5">
                            <div className="Card">
                                {/* Image */}
                                <img className="Card_Images" src={Amazon1} alt="" />
                                {/* Description overlay */}
                                <div className="container Description">
                                    <p className="mt-2 Card_Title">Amazon_Login_CLone</p>
                                    <p  className="Card_Description"> Full Stack Development</p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        {/* Live site */}
                                        <a href="https://fir-14da6.web.app/" target="_blank" rel="noreferrer">
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