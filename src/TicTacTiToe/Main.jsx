import React, { useState } from "react";
import { TicTacToe } from "./TicTacToe";
import { UndoRedo } from "./UndoRedo";

export const Main = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [square, setSquares] = useState(Array(array.length).fill(null));
  const [squaresToUndo, setSquaresToUndo] = useState([]);

  const [history, setHistory] = useState([]);
  const [currentMove, setCurrentMove] = useState(0);
  const [click, setClick] = useState(true);

  //xIsNext = currentMove % 2 === 0
  const currentSquare = square[currentMove];

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

  const handleOnclick = (index) => {
    const newSquares = square.slice();

    let a = [...squaresToUndo];
    a.push(newSquares);
    setSquaresToUndo(a);

    newSquares[index] = click ? "X" : "O";

    if (checkWinner() || square[index]) {
      return;
    }

    setHistory([...history, newSquares]);
    // setSquares(newSquares) *
    setCurrentMove(history.length);
    // console.log({ a, newSquares });
    setSquares(newSquares);
    setClick(!click);
    // setCurrentMove(index); *
  };

  console.log(square);
  const handleUndo = () => {
    console.log("handleOnclick");
    let squaresToUndoClone = JSON.parse(JSON.stringify(squaresToUndo));

    if (squaresToUndoClone?.length === 0) return;

    if (squaresToUndoClone.length - 2 < 0) {
      setSquares(Array(array.length).fill(null));
    } else {
      setSquares(squaresToUndoClone[squaresToUndoClone.length - 2]);
    }

    squaresToUndoClone.pop();
    setSquaresToUndo(squaresToUndoClone);
  };

  const handleRestart = () => {
    setClick(true);
    setSquares(Array(array.length).fill(null));
  };
  return (
    <div>
      <UndoRedo handleUndo={handleUndo} handleRestart={handleRestart} />
      <TicTacToe
        square={square}
        status={status}
        handleOnclick={handleOnclick}
        checkWinner={checkWinner}
      />
      <div className="status">{status}</div>
    </div>
  );
};
