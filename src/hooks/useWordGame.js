import React, { useState, useEffect, useRef } from "react";

function useWordGame(gameTime = 20) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(gameTime);
  const [isTrue, setIsTrue] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function changeVal(e) {
    const { value } = e.target;
    setText(value);
  }

  function textCount(text) {
    const words = text.trim().split(" ");
    return words.filter(word => word !== "").length;
  }

  function startGame() {
    setIsTrue(true);
    setTimeRemaining(gameTime);
    setWordCount(0);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTrue(false);
    setWordCount(textCount(text));
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTrue) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTrue]);

  return {
    changeVal,
    text,
    timeRemaining,
    startGame,
    wordCount,
    isTrue,
    textBoxRef
  };
}

export default useWordGame;
