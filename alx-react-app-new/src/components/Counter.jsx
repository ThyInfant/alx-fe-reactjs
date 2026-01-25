import React, { useState } from "react";

const Counter = () => {
  // Initialize state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "1.5em", margin: "20px 0" }}>
        Current Count: {count}
      </p>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: "10px 20px", margin: "0 10px", fontSize: "1em" }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ padding: "10px 20px", margin: "0 10px", fontSize: "1em" }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            padding: "10px 20px",
            margin: "0 10px",
            fontSize: "1em",
            backgroundColor: "#f44336",
            color: "white",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
