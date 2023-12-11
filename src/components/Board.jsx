import React, { useState } from "react";
import Square from "./Square";
import { IconCircle } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import { IconRefresh } from "@tabler/icons-react";

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
	return (
		<div className="neumorphic-shadow bg-black h-fit rounded-2xl p-5">
			<h1 className="m-0 text-center font-display text-[45px] font-medium tracking-wider">
				Tic Tac Toe
			</h1>
			<div className="board-wrapper my-2 block w-fit">
				<div className="board-row flex">
					<Square
						value={squares[0]}
						onSquareClick={() => handleClick(0)}
					/>
					<Square
						value={squares[1]}
						onSquareClick={() => handleClick(1)}
					/>
					<Square
						value={squares[2]}
						onSquareClick={() => handleClick(2)}
					/>
				</div>
				<div className="board-row flex">
					<Square
						value={squares[3]}
						onSquareClick={() => handleClick(3)}
					/>
					<Square
						value={squares[4]}
						onSquareClick={() => handleClick(4)}
					/>
					<Square
						value={squares[5]}
						onSquareClick={() => handleClick(5)}
					/>
				</div>
				<div className="board-row flex">
					<Square
						value={squares[6]}
						onSquareClick={() => handleClick(6)}
					/>
					<Square
						value={squares[7]}
						onSquareClick={() => handleClick(7)}
					/>
					<Square
						value={squares[8]}
						onSquareClick={() => handleClick(8)}
					/>
				</div>
			</div>

			<div className="game-info flex w-full items-center justify-center text-2xl">
				<span className="mr-1 inline-block">
					{winner ? "WINNER: " : "NEXT PLAYER: "}
				</span>
				<span className="relative top-[2px] inline-block">
					{winner ? (
						winner == "X" ? (
							<IconX color="#ef3e36" size="32" />
						) : (
							<IconCircle color="#f9c639" size="32" />
						)
					) : xIsNext ? (
						<IconX color="#ef3e36" size="32" />
					) : (
						<IconCircle color="#f9c639" size="32" />
					)}
				</span>
			</div>
			<button
				className="reset-board m-auto mt-5 flex h-10 w-1/4 items-center justify-center rounded-md bg-dodgerBlue-400 text-lg text-black focus:outline-none active:bg-dodgerBlue-500"
				onClick={resetBoard}>
				<IconRefresh />
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
