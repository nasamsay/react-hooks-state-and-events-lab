import React, { useState } from "react";

function Item({ name, category }) {
  const [itemClass, setItemClass] = useState(true)
  const itemClassName = itemClass ? "" : "in-cart"
  const buttonText = itemClass ? "Add to Cart" : "Remove from Cart"
  function handleClick() {
    setItemClass( item => !item)
  }
  return (
    <li className={itemClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
