import React, { useState } from "react";
import './App.css';

const Square = (props: any) => {
  return (
    <button 
      className="square"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  )
}

const Board = () => {
  const [ square, setSquare ] = useState(Array(9).fill(""));
  const [ xIsNext, setXIsNext ] = useState(true);

  const renderSquare = (i: number) =>  {
    return (
      <Square 
        value={square[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  const handleClick = (i: number) => {
    const box = square.slice();
    if (calculateWinner(box) || box[i]) {
      return ;
    }
    box[i] = xIsNext ? 'X' : 'O';
    setSquare(box);
    setXIsNext(!xIsNext);
  }

    const winner = calculateWinner(square);
    let status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
}

export default function Game(){
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
}

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}  