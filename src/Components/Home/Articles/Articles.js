import React from 'react';
import coffee from '../../../Images/coffee.jfif';
import './Articles.css';
import '../../../../node_modules/hover.css/css/hover-min.css';

const Articles = () => {
    return (
        <section>
            <section className="container">
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <h4 className="mt-5 pt-5 mb-5 pb-5 text-white">—— Articles</h4>
                    </div>
                </div>
            </section>

            <section className="container pb-5">
                <div className="row">
                    <div className="col-md-4 hvr-wobble-vertical">
                        <div class="card Articles">
                            <img src={coffee} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 hvr-wobble-top">
                        <div class="card Articles">
                            <img src={coffee} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="card Articles hvr-wobble-bottom">
                            <img src={coffee} class="card-img-top " alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </section>
    );
};

export default Articles;