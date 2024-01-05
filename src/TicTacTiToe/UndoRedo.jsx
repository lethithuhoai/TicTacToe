import React from "react";
import "./style.css";

export const UndoRedo = ({ handleUndo, handleRestart }) => {
  return (
    <div className="btn">
      <button className="undo" onClick={handleUndo}>
        Undo
      </button>
      <button className="redo" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};
