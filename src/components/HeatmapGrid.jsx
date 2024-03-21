import React from 'react';

const getColorForCell = (cellAge) => {
  const gradient = [
    "#76ff03", 
    "#aeea00",
    "#cddc39",
    "#d4e157",
    "#dce775", 
    "#e6ee9c",
    "#f0f4c3",
    "#f9fbe7",
    "#fff9c4",
    "#ffecb3",
    "#ffcc80", 
  ];

  
  const index = Math.min(cellAge, gradient.length - 1);
  return gradient[index];
};

const HeatmapGrid = ({ grid }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${grid[0].length}, 20px)`,
        gap: '2px',
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: getColorForCell(cell),
              border: '1px solid #757575',
            }}
          ></div>
        )),
      )}
    </div>
  );
};

export default HeatmapGrid;

