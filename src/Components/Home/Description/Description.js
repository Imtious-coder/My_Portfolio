import React from 'react';
import './Description.css';
import '../../../../node_modules/hover.css/css/hover-min.css';

const Description = () => {
    return (
        <section className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <h1 className="text-white mt-5 mb-1">Imtious Islam Midul</h1>
                    <h5 className="text-white mb-3">JavaScript Developer (React)</h5>
                    <small className="text-secondary">I'm a front-end developer based in Feni, Bangladesh specializing
                    in building (and occasionally designing) exceptional websites
                    with latest technologies.</small>
                    <a className="" href="https://drive.google.com/file/d/18C1ttniHhvdfl7wmbVajLLhwDYFZZSrC/view?usp=sharing"><button className="Button mt-3">Resume</button></a>
                </div>
            </div>
        </section>
    );
};

export default Description;