import React from 'react';
import AM1 from '../../../Images/A_Music.png';
import AM2 from '../../../Images/A_Music_Search.png';
import AM3 from '../../../Images/A_Music_Lyric.png';
import Doctor1 from '../../../Images/Doctors1.png';
import Doctor2 from '../../../Images/Doctors2.png';
import Doctor3 from '../../../Images/Doctors3.png';
import T1 from '../../../Images/T1.png';
import T2 from '../../../Images/T2.png';
import T3 from '../../../Images/T3.png';
import './Projects.css';


const Projects = () => {
    return (
        <section className="container mt-5 pb-5 mt-5 pt-5">
            <h4 className="text-white mt-5 mb-5 pb-5">Projects ——</h4>
            <div className="row pb-5">
                <div className="col-md-1"></div>
                <div className="col-md-5 hvr-shadow-radial hvr-grow ImageBG">
                    <div style={{ width: '100%', height: '100%', paddingTop: '10px', paddingBottom: '10px' }} id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div style={{ width: '100%', height: '100%', borderRadius: '5px' }} class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <img src={AM1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={AM2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={AM3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4 hvr-bob Details">
                    <h1 className="H1">A_Music</h1>
                    <h6 className="H6">HTML5, CSS3, JavaScript, Bootstrap5</h6>
                    <small className="text-secondary">This is a lyric finding website. Made in Vanila JS. You can find any update music lyriq here.
                    Just put the name and hit the search button and you will get more then 7+ lyriq folder.
                    </small> <br />
                    <a className="text-secondary" href="https://imtious-coder.github.io/A_Music/">Site</a>
                </div>
            </div>
            {/* Project 2 Doctors Portal */}
            <div className="row mt-5 pb-5 pt-5">
                <div className="col-md-1"></div>
                <div className="col-md-4 hvr-bob Details">
                    <h1 className="H1">A_Doctors</h1>
                    <h6 className="H6">HTML5, CSS3, JavaScript, Bootstrap5, React, Express, Node.js, MaterialUI</h6>
                    <small className="text-secondary">This is a lyric finding website. Made by following MERN system. You can get an apointmen from the doctors.
                    This is my own project developed for practicing.
                    </small> <br />
                    <a className="text-secondary" href="https://keen-sinoussi-d5c500.netlify.app/">Site</a>
                </div>

                <div className="col-md-1"></div>
                <div className="col-md-5 hvr-shadow-radial hvr-grow ImageBG">
                    <div style={{ width: '100%', height: '100%', paddingTop: '10px', paddingBottom: '10px' }} id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div style={{ width: '100%', height: '100%', borderRadius: '5px' }} class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <img src={Doctor1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={Doctor2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={Doctor3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5 pt-5 pb-5">
                <div className="col-md-1"></div>
                <div className="col-md-5 hvr-shadow-radial hvr-grow ImageBG">
                    <div style={{ width: '100%', height: '100%', paddingTop: '10px', paddingBottom: '10px' }} id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div style={{ width: '100%', height: '100%', borderRadius: '5px' }} class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <img src={T1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={T2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={T3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4 hvr-bob Details">
                    <h1 className="H1">Temperature Finder</h1>
                    <h6 className="H6">HTML5, CSS3, JavaScript, Bootstrap5</h6>
                    <small className="text-secondary">This is a temperature finding website. Made in Vanila JS. You can find any countries update temperature here.
                    </small> <br />
                    <a className="text-secondary" href="https://imtious-coder.github.io/Temperature-Finder/?">Site</a>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 border-bottom-info"></div>
                    <div className="col-md-2">
                        <button className="SeeMoreButton">See more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;