import { faBars, faFeather, faHome, faLaptopCode, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../../node_modules/hover.css/css/hover-min.css';
import './Navbas.css';

const Navbar = () => {
    
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (        

    <nav>
      {/* <!-- LOGO --> */}
      <label className="logo Font1">Imtious Islam</label>
      {/* <!-- BARS --> */}
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
      <FontAwesomeIcon icon={faBars} />
        {/* <i class="fas fa-bars"></i> */}
      </label>
      {/* <!-- NAVIGATIONS --> */}
      <ul>
        <Link to="/home">
            <li>
                <a class="active hvr-bob" aria-current="page" href="Home"><FontAwesomeIcon icon={faHome} /> Home </a>
            </li>
        </Link>
        <Link to="/articles">
            <li>
                <a class="nav-links hvr-bob" href="articles"> <FontAwesomeIcon className='blue' icon={faFeather} /> Articles</a>
            </li>
        </Link>
        <Link to="/allprojects">
            <li>
                <a class="nav-links hvr-bob" href="allprojects"><FontAwesomeIcon className='blue' icon={faLaptopCode} /> Projects</a>
            </li>
        </Link>
        <Link to="/about">
            <li>
                <a class="nav-links hvr-bob" href="About"><FontAwesomeIcon className='blue' icon={faUserSecret} /> About</a>
            </li>
        </Link>
      </ul>
      {/* <!-- NAVIGATIONS --> */}
    </nav>
    );
};

export default Navbar;