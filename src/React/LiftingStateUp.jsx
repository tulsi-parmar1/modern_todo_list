import React, { useState } from "react";

function LiftingStateUp() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <InputValue
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></InputValue>
      <DisplayInputValue
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></DisplayInputValue>
    </div>
  );
}
export default LiftingStateUp;

const InputValue = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
    </>
  );
};
const DisplayInputValue = ({ inputValue, setInputValue }) => {
  return (
    <>
      <h1>you have entered:{inputValue}</h1>
    </>
  );
};
