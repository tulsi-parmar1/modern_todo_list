import React, { useState } from "react";

const a = 20;
function Hooks() {
  if (a === 20) {
    const [count, setCount] = useState(0);
  }

  return (
    <div>
      <p>hy</p>
    </div>
  );
}

export default Hooks;
