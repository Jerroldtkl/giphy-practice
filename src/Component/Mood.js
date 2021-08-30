import React, { useState } from "react";

function Mood() {
  const [inputMood, setInputMood] = useState("");
  const [currentMood, setCurrentMood] = useState("How are you feeling?");

  function handleMood() {
    setInputMood(currentMood);
  }

  function handleCurrentMood(e) {
    setCurrentMood(e.target.value);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={currentMood}
          onChange={handleCurrentMood}
        ></input>
        <button onClick={handleMood}>Submit</button>
      </form>
    </div>
  );
}

export default Mood;
