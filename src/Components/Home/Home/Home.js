import React from 'react';
import Articles from '../Articles/Articles';
import Description from '../Description/Description';
import Form from '../Form/Form';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#303133' }}>
            <Description></Description>
            <div style={{ borderBottom: '1px solid grey', width: '86%' }} className="container mt-5 pt-5"></div>
            <Projects></Projects>
            <div style={{ borderBottom: '1px solid grey', width: '75%' }} className="container mt-5 pt-5"></div>
            <Articles></Articles>
            <div style={{ borderBottom: '1px solid grey', width: '75%' }} className="container mt-5 pt-5"></div>
            <Form></Form>
        </div>
    );
};

export default Home;