import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron p-5 bg-primary text-white">
        <h1 className="display-4">Welcome to Conway's Game of Life</h1>
        <p className="lead">Discover the fascinating world of cellular automata.</p>
        <hr className="my-4" />
        <p>Click the button below to start the simulation or learn more about the game's rules and history.</p>
        <Link className="btn btn-light btn-lg" to="/game" role="button">Start Simulation</Link>
      </div>
      
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Game Rules</h5>
              <p className="card-text">
                Learn about the simple rules that create complex behaviors in Conway's Game of Life. Conway’s Game of Life (or just, Life, as I will call it) is a game that is “played” based on a grid system. Every individual location on the grid can be understood as a cell. The game, or simulation, occurs over iterations, or generations. After a generation, a cell may change from living or dead based on how many living or dead neighbors it had in a previous iteration. A neighbor is any immediately adjacent spot on the grid (horizontal, vertical or diagonal). We can understand this more clearly with an example and a clear demonstration of the rules.
              </p>
              <p className="card-text">
                Life has 4 simple rules:
                <ul>
                  <li>A living cell with less than two living neighbours dies.</li>
                  <li>A living cell with two or three live neighbours lives.</li>
                  <li>A living cell with more than three live neighbours dies.</li>
                  <li>A dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Credits</h5>
              <p className="card-text">Meet the creators and contributors who brought this project to life.</p>
              <Link to="/credits" className="btn btn-primary">View Credits</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

