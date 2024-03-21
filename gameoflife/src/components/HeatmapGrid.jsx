import React from 'react';

const getColorForCell = (cellAge) => {
  const gradient = [
    "#76ff03", // Alive, green
    "#aeea00",
    "#cddc39",
    "#d4e157",
    "#dce775", // Middle age
    "#e6ee9c",
    "#f0f4c3",
    "#f9fbe7",
    "#fff9c4",
    "#ffecb3",
    "#ffcc80", // Dead for 10 or more iterations, dark red
  ];

  // Clamp the cellAge to the range we have defined in our gradient
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

