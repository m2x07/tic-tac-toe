import React, { useState } from "react";
// import "./Board.sass";
import Square from "./Square";

function Board() {
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
    <div className="neumorphic-shadow h-fit rounded-xl p-5">
      <h1 className="m-0 text-center font-display text-[45px] font-semibold tracking-wide">
        Tic Tac Toe
      </h1>
      <div className="board-wrapper my-2 block w-fit">
        <div className="board-row flex">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row flex">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row flex">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>

      <div className="game-info mt-1 block w-full text-center text-2xl font-bold uppercase tracking-wider">
        {status}
      </div>
      <button
        className="reset-board bg-blue-400 active:bg-blue-500 m-auto mt-5 flex h-10 w-1/4 items-center justify-center rounded-md text-lg text-black focus:outline-none"
        onClick={resetBoard}
      >
        R
      </button>
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
      if (squares[a] === null) {
        continue;
      }
      return squares[a];
    }
  }
  return null;
}

export default Board;
