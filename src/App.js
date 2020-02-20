import React from "react";
import "./css/style.css";
import useWordGame from "./hooks/useWordGame";

function App() {
  const {
    changeVal,
    text,
    timeRemaining,
    startGame,
    wordCount,
    isTrue,
    textBoxRef
  } = useWordGame(10);
  return (
    <div>
      <h1>How Fast Can You Type?</h1>
      <textarea
        onChange={changeVal}
        value={text}
        disabled={!isTrue}
        ref={textBoxRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      {wordCount > 0 ? (
        <button onClick={startGame} disabled={isTrue}>
          Play Again
        </button>
      ) : (
        <button onClick={startGame} disabled={isTrue}>
          Start
        </button>
      )}
      {wordCount ? <h4>Word Count: {wordCount}</h4> : null}
    </div>
  );
}

export default App;
