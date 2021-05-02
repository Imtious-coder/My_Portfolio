import React, { useEffect } from 'react';
import './Description.css';
import '../../../../node_modules/hover.css/css/hover-min.css';
import Resume from '../../../Resume/RESUME.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Description = () => {
    useEffect (() => {
        AOS.init({duration: 1000})
    }, [])
    return (
        <section className="container">
            <div data-aos="fade-up" className="row">
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    {/* Name */}
                    <h1 className="text-white pt-5 mt-5 mb-1">Imtious Islam Midul</h1>
                    {/* Title */}
                    <h5 className="text-white mb-3">Front-End Developer</h5>
                    {/* Description */}
                    <small className="text-secondary">I'm a front-end developer based in Feni, Bangladesh specializing
                    in building (and occasionally designing) exceptional websites
                         with latest technologies.</small> <br />
                    {/* Resume Download Button */}
                    <a href={Resume} target="_blank" className="hvr-grow" download><button className="Button mt-3">Resume<FontAwesomeIcon className="Button-Icon ms-1" icon={faArrowAltCircleDown} /></button></a>
                </div>
            </div>
        </section>
    );
};

export default Description;