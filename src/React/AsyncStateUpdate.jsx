import React, { useState } from "react";

function AsyncStateUpdate() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}></button>
    </div>
  );
}

export default AsyncStateUpdate;
