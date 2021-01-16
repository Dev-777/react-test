import React from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import axios from "axios";

const App = () => {
  const inputRef = useRef();
  const state = useSelector((state) => state);
  const click = () => {
    axios
      .post("https://sign-up-backend.herokuapp.com/app/test44", {
        input: inputRef,
      })
      .then(() => console.log("post test179 dont"));
  };
  const get = () => {
    axios
      .get("https://sign-up-backend.herokuapp.com/app/test33")
      .then((data) => console.log(data, "data getting"));
  };

  return (
    <div className="App">
      <h1>app {state.name}</h1>
      <input ref={inputRef} type="text" />
      <button onClick={click}>post</button>
      <button onClick={get}>getData</button>
    </div>
  );
};

export default App;
