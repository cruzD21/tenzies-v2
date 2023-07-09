import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import logo from "./logo.svg";
import "./App.css";
import Die, { DieProps } from "./components/Die/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  const diceElements: any = dice.map((die) => (
    <Die
      id={die.id}
      isHeld={die.isHeld}
      value={die.value}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function allNewDice() {
    const diceArr = [];
    for (let i = 0; i <= 4; i++) {
      diceArr.push(generateNewDice());
    }
    return diceArr;
  }

  function generateNewDice() {
    return {
      isHeld: false,
      value: Math.ceil(Math.random() * 6),
      id: nanoid(),
    };
  }

  function holdDice(id: string) {
    setDice((oldDice) => {
      return oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  function rollDice() {
    setDice((oldDice) => {
      return oldDice.map((die) => {
        return die.isHeld ? die : generateNewDice();
      });
    });
  }

  return (
    <main>
      <h1 className="title">Testing</h1>
      <h3 className="instructions">testiong</h3>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice}>button</button>
    </main>
  );
}

export default App;
