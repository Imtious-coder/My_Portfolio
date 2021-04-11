import React from 'react';
import AM1 from '../../../Images/A_Music.png';
import AM2 from '../../../Images/A_Music_Search.png';
import AM3 from '../../../Images/A_Music_Lyric.png';


const Projects = () => {
    return (
        <section className="container mt-5 pb-5">
            <h4 className="text-white mb-5 pb-5">Projects__</h4>
            <div className="row pb-5">
                <div className="col-md-1"></div>
                <div className="col-md-5 hvr-shadow-radial hvr-grow" style={{ height: '200px' }}>
                    <div style={{ width: '100%', height: '100%' }} id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
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
                <div className="col-md-4 hvr-hang">
                    <h1 className="text-success">A_Music</h1>
                    <h6 className="text-info">HTML5, CSS3, JavaScript, Bootstrap5</h6>
                    <small className="text-secondary">This is a lyric finding website. Made in Vanila JS. You can find any update music lyriq here.
                    Just put the name and hit the search button and you will get more then 7+ lyriq folder.
                    </small>
                </div>
            </div>

            <div className="row mt-5 pb-5 pt-5">
                <div className="col-md-1"></div>
                <div className="col-md-4 hvr-hang">
                    <h1 className="text-success">A_Music</h1>
                    <h6 className="text-info">HTML5, CSS3, JavaScript, Bootstrap5</h6>
                    <small className="text-secondary">This is a lyric finding website. Made in Vanila JS. You can find any update music lyriq here.
                    Just put the name and hit the search button and you will get more then 7+ lyriq folder.
                    </small>
                </div>

                <div className="col-md-1"></div>
                <div className="col-md-5 hvr-shadow-radial hvr-grow" style={{ height: '200px' }}>
                    <div style={{ width: '100%', height: '100%' }} id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
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
            </div>

            <div className="row mt-5 pt-5 pb-5">
                <div className="col-md-1"></div>
                <div className="col-md-5 hvr-shadow-radial hvr-grow" style={{ height: '200px' }}>
                    <div style={{ width: '100%', height: '100%' }} id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
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
                <div className="col-md-4 hvr-hang">
                    <h1 className="text-success">A_Music</h1>
                    <h6 className="text-info">HTML5, CSS3, JavaScript, Bootstrap5</h6>
                    <small className="text-secondary">This is a lyric finding website. Made in Vanila JS. You can find any update music lyriq here.
                    Just put the name and hit the search button and you will get more then 7+ lyriq folder.
                    </small>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 border-bottom-info"></div>
                    <div className="col-md-2">
                        <button className="btn btn-success">See more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;