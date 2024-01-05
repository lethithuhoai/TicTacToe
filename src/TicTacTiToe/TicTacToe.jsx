// import React, { useState } from "react";
import "./style.css";
// import Main from "../TicTacTiToe/Main";

export const TicTacToe = ({
  handleOnclick,
  checkWinner,
  square = [],
  status,
}) => {
  console.log({ square });
  return (
    <div className="tic-toe">
      <div className="grid-container">
        {square?.map((arr, index) => (
          <div
            className="grid-item"
            key={index}
            onClick={() => handleOnclick(index)}
          >
            {square[index]}
          </div>
        ))}
      </div>
      {/* <div className="grid-container">
      </div> */}
    </div>
  );
};
