import React from 'react';

const CreditsPage = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron p-5 bg-secondary text-white">
        <h1 className="display-4">Credits</h1>
        <p className="lead">Acknowledgments to those who contributed to this project.</p>
      </div>
      <div className="card mb-4 shadow-sm"> {/* Added shadow for depth */}
        <div className="card-body">
          <h5 className="card-title">Project Team</h5>
          <p className="card-text">This project was brought to life by a dedicated team of developers, designers, and enthusiasts passionate about cellular automata.</p>
          <ul>
            <li>Person A - Developer</li>
            <li>Person B - Designer</li>
            <li>Person C - Research</li>
            {/* Additional team members and roles can be listed here */}
          </ul>
        </div>
      </div>
      
      {/* Optional: Additional sections or cards for special thanks or external resources can be added here */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Special Thanks</h5>
          <p className="card-text">Special thanks to everyone who supported this project, including:</p>
          <ul>
            <li>Community Members</li>
            <li>Open Source Contributors</li>
            {/* Additional acknowledgments */}
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">External Resources</h5>
          <p className="card-text">This project was inspired by and built upon a wealth of knowledge and resources, including:</p>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">Conway's Game of Life Wiki</a></li>
            {/* More resources can be listed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditsPage;
