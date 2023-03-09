import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listItem, setListItem] = useState([]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function handleAddClick() {
    setListItem((prevValue) => {
      return [...prevValue, inputValue];
    });

    setInputValue("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInputChange} type="text" value={inputValue} />
        <button onClick={handleAddClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
