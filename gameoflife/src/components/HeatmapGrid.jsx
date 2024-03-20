// HeatmapGrid.jsx
import React from 'react';
import './Grid.css'; // Assuming your CSS styles are applicable globally

const maxHistory = 10; // Maximum history to track

// Calculate color based on the cell's history
// Calculate color based on the cell's history
const calculateColor = (history) => {
  // Bright green for alive
  const aliveColor = [0, 255, 0]; // Green
  // Dark red for dead for 10 or more iterations
  const deadColor = [139, 0, 0]; // Dark Red
  const mix = Math.min(history / 10, 1);
  // Interpolate between the colors based on history
  const color = aliveColor.map((c, i) => 
    Math.round(c + (deadColor[i] - c) * mix)
  );
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
};


const HeatmapGrid = ({ grid, toggleCellState, showHeatmap }) => {
  return (
    <div className="grid-container" style={{ gridTemplateColumns: `repeat(${grid[0].length}, 20px)` }}>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="cell"
            onClick={() => toggleCellState(rowIndex, colIndex)}
            style={{
              backgroundColor: showHeatmap ? calculateColor(cell) : cell === 0 ? 'red' : 'blue',
              width: 20,
              height: 20,
              border: '1px solid black',
            }}
          ></div>
        )),
      )}
    </div>
  );
};

export default HeatmapGrid;
