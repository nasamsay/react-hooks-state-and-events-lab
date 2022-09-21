import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [displayMode, setDisplayMode] = useState(false)
  function handleClick() {
    setDisplayMode(display => !display)
  }
  const appClass = displayMode ? "App dark" : "App light"
  const mode = displayMode ? "Dark Mode" : "Light Mode" 

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick} className={appClass}>{mode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
