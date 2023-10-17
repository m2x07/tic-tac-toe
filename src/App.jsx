import React, { useState } from "react";
import "./App.sass";
import propTypes from "prop-types";

function Square({ value, onSquareClick }) {
  Square.propTypes = {
    value: propTypes.string,
    onSquareClick: propTypes.func,
  };

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function resetBoard() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  let status = winner
    ? "Player " + winner + " wins"
    : "Next Player: " + (xIsNext ? "X" : "O");

  return (
    <div className="wrapper">
      <h1>Tic Tac Toe</h1>
      <div className="board-wrapper">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>

      <div className="game-info">{status}</div>
      <button className="reset-board material-symbols-outlined" onClick={resetBoard}>restart_alt</button>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    if (
      squares[a] === squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}
