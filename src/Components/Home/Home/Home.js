import React from 'react';
import Description from '../Description/Description';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div style={{backgroundColor:'#303133'}}>
            <Navbar></Navbar>
            <Description></Description>
        </div>
    );
};

export default Home;