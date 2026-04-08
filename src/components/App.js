import React from "react";

function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div className="container">
      <h1>JSX Keyword Replacement Challenge</h1>

      <label htmlFor="nameInput">Enter Name:</label>
      <input id="nameInput" type="text" />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
