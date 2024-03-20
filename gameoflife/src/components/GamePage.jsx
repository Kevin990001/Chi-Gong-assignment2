// import React, { useState, useEffect } from 'react';
// import './Grid.css'; // Ensure your CSS file is correctly referenced


// const initialRows = 20;
// const initialCols = 20;

// // Function to create a grid with a random initial state
// const createGrid = (rows, cols) => {
//   return Array.from({ length: rows }, () =>
//     Array.from({ length: cols }, () => Math.random() < 0.05 ? 1 : 0));
// };

// const GamePage = () => {
//   const [grid, setGrid] = useState(() => createGrid(initialRows, initialCols));
//   const [height, setHeight] = useState(initialRows);
//   const [width, setWidth] = useState(initialCols);
//   const [error, setError] = useState('');
//   const [liveCellsCount, setLiveCellsCount] = useState(0);

//   useEffect(() => {
//     setLiveCellsCount(grid.flat().reduce((acc, cell) => acc + cell, 0));
//   }, [grid]);

//   const updateGridSize = () => {
//     const newHeight = parseInt(height, 10);
//     const newWidth = parseInt(width, 10);
//     if (newHeight >= 3 && newHeight <= 40 && newWidth >= 3 && newWidth <= 40) {
//       setGrid(createGrid(newHeight, newWidth));
//       setError('');
//     } else {
//       setError('Please enter numbers in the range 3-40 for both height and width.');
//     }
//   };

//   const toggleCellState = (rowIndex, colIndex) => {
//     const newGrid = JSON.parse(JSON.stringify(grid));
//     newGrid[rowIndex][colIndex] = grid[rowIndex][colIndex] ? 0 : 1;
//     setGrid(newGrid);
//   };

//   const progressSimulation = () => {
//     const newGrid = grid.map((row, rowIndex) =>
//       row.map((cell, colIndex) => {
//         let liveNeighbors = 0;
//         for (let i = -1; i <= 1; i++) {
//           for (let j = -1; j <= 1; j++) {
//             if (i === 0 && j === 0) continue;
//             const x = rowIndex + i;
//             const y = colIndex + j;
//             if (x >= 0 && x < height && y >= 0 && y < width) {
//               liveNeighbors += grid[x][y];
//             }
//           }
//         }

//         if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) return 0;
//         if (cell === 0 && liveNeighbors === 3) return 1;
//         return cell;
//       })
//     );
//     setGrid(newGrid);
//   };

//   return (
//     <div className="game-page">
//       <div className="control-panel">
//         <input
//           type="number"
//           value={height}
//           onChange={(e) => setHeight(e.target.value)}
//           placeholder="Height (3-40)"
//         />
//         <input
//           type="number"
//           value={width}
//           onChange={(e) => setWidth(e.target.value)}
//           placeholder="Width (3-40)"
//         />
//         <button onClick={updateGridSize}>Update Size</button>
//       </div>
//       {error && <div className="error-message">{error}</div>}
//       <div
//         className="grid-container"
//         style={{
//           display: 'grid',
//           gridTemplateColumns: `repeat(${width}, 20px)`,
//         }}
//       >
//         {grid.map((row, rowIndex) =>
//           row.map((cell, colIndex) => (
//             <div
//               key={`${rowIndex}-${colIndex}`}
//               onClick={() => toggleCellState(rowIndex, colIndex)}
//               style={{
//                 width: 20,
//                 height: 20,
//                 backgroundColor: cell ? 'black' : 'white',
//                 border: 'solid 1px black',
//               }}
//             ></div>
//           )),
//         )}
//       </div>
//       <button onClick={() => setGrid(createGrid(height, width))}>Reset Grid</button>
//       <button onClick={progressSimulation}>Next Step</button>
//       <div>Live Cells: {liveCellsCount}</div>
//     </div>
//   );
// };

// export default GamePage;










import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Alert, Badge } from 'react-bootstrap';
import './Grid.css'; // Make sure your CSS file is correctly referenced
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const initialRows = 20;
const initialCols = 20;

// Function to create a grid with a random initial state
const createGrid = (rows, cols) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.random() < 0.05 ? 1 : 0));
};

const GamePage = () => {
  const [grid, setGrid] = useState(() => createGrid(initialRows, initialCols));
  const [height, setHeight] = useState(initialRows);
  const [width, setWidth] = useState(initialCols);
  const [error, setError] = useState('');
  const [liveCellsCount, setLiveCellsCount] = useState(0);

  useEffect(() => {
    // Count the live cells whenever the grid updates
    setLiveCellsCount(grid.flat().reduce((acc, cell) => acc + cell, 0));
  }, [grid]);

  const updateGridSize = () => {
    // Validate and update the grid size based on user input
    const newHeight = parseInt(height, 10);
    const newWidth = parseInt(width, 10);
    if (newHeight >= 3 && newHeight <= 40 && newWidth >= 3 && newWidth <= 40) {
      setGrid(createGrid(newHeight, newWidth));
      setError('');
    } else {
      setError('Please enter numbers in the range 3-40 for both height and width.');
    }
  };

  const toggleCellState = (rowIndex, colIndex) => {
    // Toggle the state of a cell between alive (1) and dead (0)
    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[rowIndex][colIndex] = grid[rowIndex][colIndex] ? 0 : 1;
    setGrid(newGrid);
  };

  const progressSimulation = () => {
    // Apply the rules of Conway's Game of Life to progress the simulation
    const newGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        let liveNeighbors = 0;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const x = rowIndex + i;
            const y = colIndex + j;
            if (x >= 0 && x < height && y >= 0 && y < width) {
              liveNeighbors += grid[x][y];
            }
          }
        }
        if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) return 0;
        if (cell === 0 && liveNeighbors === 3) return 1;
        return cell;
      })
    );
    setGrid(newGrid);
  };


  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Conway's Game of Life</h1>
      
      <div className="d-flex justify-content-center mb-3">
        <Form inline>
          <Form.Control
            className="mr-2"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height (3-40)"
          />
          <Form.Control
            className="mr-2"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Width (3-40)"
          />
          <Button variant="primary" onClick={updateGridSize}>Update Size</Button>
        </Form>
      </div>
  
      {error && <Alert variant="danger" className="text-center">{error}</Alert>}
  
      <div className="d-flex justify-content-center">
        <div
          className="grid-container"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${width}, 20px)`,
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => toggleCellState(rowIndex, colIndex)}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: cell ? 'black' : 'white',
                  border: 'solid 1px black',
                  cursor: 'pointer',
                }}
              ></div>
            )),
          )}
        </div>
      </div>
  
      <div className="d-flex justify-content-center mt-3">
        <Button variant="warning" className="mr-2" onClick={() => setGrid(createGrid(height, width))}>Reset Grid</Button>
        <Button variant="success" onClick={progressSimulation}>Next Step</Button>
      </div>
      
      <div className="d-flex justify-content-center mt-3">
        <Badge bg="info">Live Cells: {liveCellsCount}</Badge>
      </div>
    </Container>
  );
  };

  export default GamePage;