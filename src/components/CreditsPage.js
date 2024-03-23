import React from 'react';

const CreditsPage = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron p-5 bg-secondary text-white">
        <h1 className="display-4">Credits</h1>
        <p className="lead">Acknowledgments to those who contributed to this project.</p>
      </div>
      <div className="card mb-4 shadow-sm"> 
        <div className="card-body">
          <h5 className="card-title">Project Team</h5>
          <p className="card-text">This project was brought to life by a dedicated team of developers, designers, and enthusiasts passionate about cellular automata.</p>
          <ul>
            <li>Chi - Developer</li>
            <li>Chi - Designer</li>
            <li>Chi - Research</li>
          </ul>
        </div>
      </div>
      
    
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Special Thanks</h5>
          <p className="card-text">Special thanks to everyone who supported this project, including:</p>
          <ul>
            <li>Community Members</li>
            <li>Open Source Contributors</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">External Resources</h5>
          <p className="card-text">Source code</p>
          <ul>
            <li><a href="https://github.com/Kevin990001/Chi-Gong-assignment2" target="_blank" rel="noopener noreferrer">Conway's Game of Life Wiki</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditsPage;
