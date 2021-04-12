import React from 'react';
import './Brain.css';
import { ProgressBar } from 'react-bootstrap';

const Brain = () => {
    return (
        <main>
            <div className="InsideOfBrain">
                <div className="container pb-5">
                    <p className="Skills">JavaScript(ES6)--</p>
                    <ProgressBar striped variant="success" now={97} label={`${97}%`} />
                    <p className="Skills">React--</p>
                    <ProgressBar striped variant="warning" now={95} label={`${95}%`} />
                    <p className="Skills">HTML5--</p>
                    <ProgressBar striped variant="danger" now={99} label={`${99}%`} />
                    <p className="Skills">CSS3--</p>
                    <ProgressBar striped variant="dark" now={95} label={`${95}%`} />
                    <p className="Skills">Bootstrap5--</p>
                    <ProgressBar striped variant="info" now={90} label={`${90}%`} />
                    <p className="Skills">Git - Github--</p>
                    <ProgressBar striped variant="primary" now={99} label={`${99}%`} />
                    <p className="Skills">React Router--</p>
                    <ProgressBar striped variant="secondary" now={99} label={`${99}%`} />
                    <p className="Skills">Firebase--</p>
                    <ProgressBar striped variant="success" now={92} label={`${92}%`} />
                    <p className="Skills">MongoDB--</p>
                    <ProgressBar striped variant="dark" now={90} label={`${90}%`} />
                    <p className="Skills">Node.js--</p>
                    <ProgressBar striped variant="danger" now={87} label={`${87}%`} />
                </div>
            </div>
        </main>
    );
};

export default Brain;