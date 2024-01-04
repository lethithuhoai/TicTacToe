import React, { useState } from "react";
import "./style.css";

export const TicTacToe = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [square, setSquares] = useState(Array(array.length).fill(null));
  console.log("square", square);
  const [click, setClick] = useState(true);

  //check winner
  const checkWinner = () => {
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
      const [x, y, z] = lines[i];
      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }
    return null;
  };
  const status = checkWinner() ? `Winner: ${checkWinner()}` : "";
  // checkWinner();

  // console.log(square);
  const handleOnclick = (index) => {
    if (checkWinner() || square[index]) {
      return;
    }
    const newSquares = square.slice();
    console.log("newSquares", newSquares);
    newSquares[index] = click ? "X" : "O";

    setSquares(newSquares);
    setClick(!click);
  };

  return (
    <div className="tic-toe">
      <div className="grid-container">
        {array.map((arr, index) => (
          <div
            className="grid-item"
            key={index}
            onClick={() => handleOnclick(index)}
          >
            {square[index]}
          </div>
        ))}
      </div>

      <div className="status">{status}</div>
    </div>
  );
};
