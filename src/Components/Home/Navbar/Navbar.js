import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../node_modules/hover.css/css/hover-min.css';
import './Navbas.css';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: "#303133" }} class="navbar navbar-expand-lg navbar-light ps-5 pb-5">
            <div class="container-fluid">
                {/* Toggle Button */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {/* Main Navigations */}
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div className=" container d-flex justify-content-center">
                        <ul class="navbar-nav ms-auto me-auto">
                            <Link to="/home">
                                <li class="nav-item me-5">
                                    <a class="nav-link active text-white mt-2 hvr-bob Nav" aria-current="page" href="#">Home</a>
                                </li>
                            </Link>
                            <li class="nav-item me-5">
                                <a class="nav-link text-white mt-2 hvr-bob Nav" href="#">Resume</a>
                            </li>
                            <Link to="/allprojects">
                                <li class="nav-item me-5">
                                    <a class="nav-link text-white mt-2 hvr-bob Nav" href="#">Projects</a>
                                </li>
                            </Link>
                            <li class="nav-item me-5">
                                <a class="nav-link text-white Name" href="#">"AS"</a>
                            </li>
                            <Link to="/brain">
                                <li class="nav-item me-5">
                                    <a class="nav-link text-white hvr-bob mt-2 Nav" href="#">Brain</a>
                                </li>
                            </Link>
                            <li class="nav-item me-5">
                                <a class="nav-link text-white hvr-bob mt-2 Nav" href="#">Blog</a>
                            </li>
                            <Link to="/mail">
                                <li class="nav-item me-5">
                                    <a class="nav-link text-white hvr-bob mt-2 Nav" href="#">About</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;