import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const calculateWinner = (cSquares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (cSquares[a] && cSquares[a] === cSquares[b] && cSquares[a] === cSquares[c]) {
                return cSquares[a];
            }
        }

        return null;
    }

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`;

    const handleSquareClick = (i) => {
        let squaresNew = squares.slice();

        // If winner is decieded or the square is filled: do nothing
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squaresNew[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresNew);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (i) => (
        <Square 
            value={squares[i]}
            onClick={() => handleSquareClick(i)} 
        />
    );
    
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

export default Board;