import React, { useEffect } from 'react';
import './Description.css';
import '../../../../node_modules/hover.css/css/hover-min.css';
import Resume from '../../../Resume/RESUME.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Description = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
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
                    <small className="text-secondary">A passionate curious Front-End Developer based in Feni. Searching for a challenging role at a progressive organization that will help me to implement my skills and knowledge with the goal the organization success. I am passionately in <br/> love with front-end shizzle with pixel perfect design and exploring new things daily.</small> <br />
                    {/* Resume Download Button */}
                    <a href={Resume} target="_blank" className="hvr-grow" download><button className="Button mt-3">Resume<FontAwesomeIcon className="Button-Icon ms-1" icon={faArrowAltCircleDown} /></button></a>
                </div>
            </div>
        </section>
    );
};

export default Description;