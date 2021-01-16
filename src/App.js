import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const click = () => {
    dispatch({ type: "CHANGE_NAME" });
  };
  return (
    <div className="App">
      <h1>app {state.name}</h1>
      <button onClick={click}>click</button>
    </div>
  );
};

export default App;
