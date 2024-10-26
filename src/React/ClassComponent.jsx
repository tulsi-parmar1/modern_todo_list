import React, { useState } from "react";
import { Component } from "react";

// class ClassComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       a: 6,
//     };
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increment
//         </button>
//         {(() => {
//           if (this.state.a == 6) {
//             return <p>hey hello</p>;
//           }
//         })()}

//         <p>count{this.state.count}</p>
//       </React.Fragment>
//     );
//   }
// }
function ClassComponent() {
  const [count, setCount] = useState(0);
  const arr = [];

  return (
    <>
      <p>{arr.length && "arr"}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
}
export default ClassComponent;
