import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../../node_modules/hover.css/css/hover-min.css';
import './Navbas.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (

        <nav style={{ backgroundColor: "#303133" }} class="navbar navbar-expand-lg navbar-light ps-2 sticky-top shadow-sm">
            <div class="container-fluid">
                {/* Toggle Button */}
                <a class="Name me-5 Font1" href="#">Imtious</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <Link to="/home">
                            <li class="nav-item me-4 ms-3 float-start">
                                <a class="nav-link active text-white hvr-bob Nav" aria-current="page" href="#">Home</a>
                            </li>
                        </Link>
                        <Link to="/resume">
                            <li class="nav-item me-4 ms-3 text-center">
                                <a class="nav-link text-white hvr-bob Nav" href="#">Resume</a>
                            </li>
                        </Link>
                        <Link to="/allprojects">
                            <li class="nav-item me-4 ms-3 float-end">
                                <a class="nav-link text-white hvr-bob Nav" href="#">Projects</a>
                            </li>
                        </Link>
                        <Link to="/brain">
                            <li class="nav-item me-4 ms-3 float-start">
                                <a class="nav-link text-white hvr-bob Nav" href="#">Brain</a>
                            </li>
                        </Link>
                        <li class="nav-item me-4 ms-3 text-center">
                            <a class="nav-link text-white hvr-bob Nav" href="https://medium.com/@iarafat386" target="_blank" rel="noreferrer">Articles</a>
                        </li>
                        <Link to="/about">
                            <li class="nav-item me-4 ms-3 float-end">
                                <a class="nav-link text-white hvr-bob Nav" href="#">About</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;