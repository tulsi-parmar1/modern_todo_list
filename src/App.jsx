import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { AuthContext } from "./Components/Context";
import Reactpr2 from "./Components/ReactPr2";
import ClassComponent from "./React/ClassComponent";
import PropsImmutable from "./React/PropsImmutable";
import AsyncStateUpdate from "./React/AsyncStateUpdate";
import PropsValidate from "./React/PropsValidate";
import JsxAsProps from "./React/JsxAsProps";
import StyledComponents from "./React/StyledComponents";
import EventHandling from "./React/EventHandling";
import Hooks from "./React/Hooks";
import DerivedState from "./React/DerivedState";
import LiftingStateUp from "./React/LiftingStateUp";
import UseEffect from "./React/UseEffect";
import UseContext from "./React/UseContext";
import UseRefHook from "./React/UseRefHook";
import Todo from "./React/Todo/Todo";
function App() {
  const name = {
    a: "riddhi",
    b: 21,
  };
  Object.freeze(name);
  let a = 10;

  return (
    <>
      {/* <PropsImmutable name={name}>
        <h1>hello</h1>
        <p>how are you?</p>
      </PropsImmutable> */}
      {/* <AsyncStateUpdate></AsyncStateUpdate>
       */}
      {/* <PropsValidate name="riddhi" age={21}></PropsValidate> */}
      {/* <JsxAsProps gretting={<h1>greeting of the day broooo</h1>} /> */}
      {/* <StyledComponents a={a}></StyledComponents> */}
      {/* <EventHandling></EventHandling> */}
      {/* <Hooks></Hooks> */}
      {/* <DerivedState price={12000} discount={10}></DerivedState> */}
      {/* <LiftingStateUp></LiftingStateUp> */}
      {/* <UseEffect></UseEffect> */}
      {/* <UseContext></UseContext> */}
      {/* <UseRefHook></UseRefHook> */}
      <Todo></Todo>
    </>
  );
}

export default App;
