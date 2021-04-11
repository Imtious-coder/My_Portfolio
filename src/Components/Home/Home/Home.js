import React from 'react';
import Description from '../Description/Description';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div style={{backgroundColor:'#303133'}}>
            <Navbar></Navbar>
            <Description></Description>
            <hr/>
            <Projects></Projects>
        </div>
    );
};

export default Home;