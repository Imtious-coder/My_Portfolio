import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../node_modules/hover.css/css/hover-min.css';
import './Navbas.css';

const Navbar = () => {
    return (
            <nav style={{backgroundColor:"#303133"}} class="navbar navbar-expand-lg navbar-light pb-5">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto me-auto">
                            <Link to="/home">
                            <li class="nav-item me-5">
                                <a class="nav-link active text-white mt-2 hvr-bob Nav" aria-current="page" href="#">Home</a>
                            </li>
                            </Link>
                            <li class="nav-item me-5">
                                <a class="nav-link text-white mt-2 hvr-bob Nav" href="#">About</a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link text-white mt-2 hvr-bob Nav" href="#">Projects</a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link text-white hvr-glow Name" href="#">"AS"</a>
                            </li>
                            <Link to="/brain">
                            <li class="nav-item me-5">
                                <a class="nav-link text-white hvr-bob mt-2 Nav" href="#">Brain</a>
                            </li>
                            </Link>
                            <li class="nav-item me-5">
                                <a class="nav-link text-white hvr-bob mt-2 Nav" href="#">Blog</a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link text-white hvr-bob mt-2 Nav" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;