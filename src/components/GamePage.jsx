import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Alert, Badge } from 'react-bootstrap';
import './Grid.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 



const initialRows = 20;
const initialCols = 20;



const createGrid = (rows, cols) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.random() < 0.05 ? 1 : 0));
};

const GamePage = () => {
  const [showHeatmap, setShowHeatmap] = useState(false);

  const [grid, setGrid] = useState(() => createGrid(initialRows, initialCols));
  const [height, setHeight] = useState(initialRows);
  const [width, setWidth] = useState(initialCols);
  const [error, setError] = useState('');
  const [liveCellsCount, setLiveCellsCount] = useState(0);

  useEffect(() => {
    setLiveCellsCount(grid.flat().reduce((acc, cell) => acc + cell, 0));
  }, [grid]);

  const updateGridSize = () => {
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
    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[rowIndex][colIndex] = grid[rowIndex][colIndex] ? 0 : 1;
    setGrid(newGrid);
  };

  const progressSimulation = () => {
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
    return newGrid;
  };

  const getColorForCell = (iterationsSinceAlive, isAlive) => {
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
  
    if (isAlive) return gradient[0]; 
  
    
    const index = Math.min(iterationsSinceAlive, gradient.length - 1);
    return gradient[index];
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


    
    <div>
      <button onClick={() => setShowHeatmap(!showHeatmap)}>
        {showHeatmap ? 'Show Normal View' : 'Show Heatmap'}
      </button>

      <div className="grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${grid[0].length}, 20px)` }}>
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
           
            const backgroundColor = showHeatmap ? getColorForCell(cell) : cell === 0 ? 'green' : 'white';

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                style={{ width: '20px', height: '20px', backgroundColor, border: '1px solid #000' }}
              ></div>
            );
          })
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