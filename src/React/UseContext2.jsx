import React, { useContext } from "react";
import myContext from "./CreateContext";
function UseContext2() {
  const value = useContext(myContext);
  console.log(value);
}

export default UseContext2;
