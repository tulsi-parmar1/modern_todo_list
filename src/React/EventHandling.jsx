import React from "react";

function EventHandling() {
  function handleButtonClick(e) {
    // alert("hey i am event");
    console.log(e.nativeEvent.isTrusted);
    console.log(e.isTrusted);
  }
  return (
    <div>
      <button onClick={handleButtonClick}>touch me </button>
    </div>
  );
}

export default EventHandling;
