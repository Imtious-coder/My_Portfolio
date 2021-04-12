import React from 'react';
import Articles from '../Articles/Articles';
import Description from '../Description/Description';
import Form from '../Form/Form';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div style={{backgroundColor:'#303133'}}>
            <Navbar></Navbar>
            <Description></Description>
            <div style={{borderBottom:'1px solid grey', width:'75%'}} className="container mt-5 pt-5"></div>
            <Projects></Projects>
            <div style={{borderBottom:'1px solid grey', width:'75%'}} className="container mt-5 pt-5"></div>
            <Articles></Articles>
            <Form></Form>
        </div>
    );
};

export default Home;