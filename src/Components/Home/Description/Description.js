import React from 'react';
import './Description.css';
import '../../../../node_modules/hover.css/css/hover-min.css';

const Description = () => {
    return (
        <section className="container mt-5 pb-5">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <h1 className="text-white mt-5 mb-1">Imtious Islam Midul</h1>
                    <h5 className="text-white mb-3">JavaScript Developer (React)</h5>
                    <small className="text-secondary">I'm a front-end developer based in Feni, Bangladesh specializing
                    in building (and occasionally designing) exceptional websites
                    with latest technologies.</small>
                    <div className="Button mt-3 hvr-buzz">Resume</div>
                </div>
            </div>
        </section>
    );
};

export default Description;