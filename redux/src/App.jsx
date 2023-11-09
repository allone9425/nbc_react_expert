import "./App.css";
import { useDispatch, useSelector } from "react-redux"; //
import { PLUS_ONE, MINUS_ONE } from "./redux/modules/counter";
import { useEffect, useState } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const counter = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>현재 카운트 : {counter.number}</div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch({
            type: PLUS_ONE,
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: MINUS_ONE,
          });
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
