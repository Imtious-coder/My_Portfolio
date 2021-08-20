import { useParams } from 'react-router';
import { faCodeBranch, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProjectDetails.css';
import ProjectData from '../../Home/Projects/ProjectData.json';


const ProjectDetails = () => {

  const { projectName } = useParams();
  const details = ProjectData.find((detail) => detail.name === projectName);
  const {
    name,
    fullImage,
    information,
    website,
    code,
    li1,
    li2,
    li3,
    li4,
    li5,
    li6,
    li7
  } = details;

  return (
    <section className="pt-5 pb-5 Project-Details">
      <div className="container">
        <div className="row">
          {/* Project details */}
          <div className="col-md-6">
            <p className="Project-Name">{name}</p>
            <p className="Project-Description">{information}</p>
            <ul className="Project-UL">
              <li> {li1} </li>
              <li> {li2} </li>
              <li> {li3} </li>
              <li> {li4} </li>
              <li> {li5} </li>
              <li> {li6} </li>
              <li> {li7} </li>
            </ul>
            {/* Website and code */}
            <div className="d-flex">
              <a href={website}
                target="_blank"
                rel="noreferrer">
                <p className="Project-Icons"> <FontAwesomeIcon icon={faGlobeEurope} /> Website </p>
              </a>
              <a href={code}
                target="_blank"
                rel="noreferrer">
                <p className="Project-Icons" > <FontAwesomeIcon icon={faCodeBranch} /> Code </p>
              </a>
            </div>
          </div>
          {/* Project Image */}
          <div className="col-md-6">
            <img className="Project-Image" src={fullImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;