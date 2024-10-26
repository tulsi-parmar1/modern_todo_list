import React, { createContext } from "react";
import UseContext2 from "./UseContext2";
import myContext from "./CreateContext";

function UseContext() {
  const obj = { name: "riddhi", age: 21 };
  const obj2 = { name: "pihuu", age: 21 };
  return (
    <myContext.Provider value={{ obj2, obj }}>
      <UseContext2></UseContext2>
    </myContext.Provider>
    //without Provider
    // <myContext>
    //   <UseContext2></UseContext2>
    // </myContext>
  );
}
export default UseContext;
