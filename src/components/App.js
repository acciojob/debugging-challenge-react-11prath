import React from "react";

function App() {

  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div className="container">
      <h1>JSX Keyword Replacement Challenge</h1>

      <label htmlFor="name">Enter Name:</label>
      <input id="name" type="text" />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;