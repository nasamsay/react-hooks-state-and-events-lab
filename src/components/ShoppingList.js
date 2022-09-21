import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState('All')
  
  const itemDisplayed = items.filter(item => {
    if( selectedCategory == "All") {
      return items
    }
    else {
      return item.category === selectedCategory
    }
  })

  function handleClick(event) {
    setCategory(() => event.target.value)
  }

  const itemList = itemDisplayed.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))


  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleClick}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
