import { useState } from "react";
import "./App.css";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

function App() {
  const [count, setCount] = useState(0);
  console.log("App 컴포넌트가 렌더링 되었어요!");
  //1증가
  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };
  //1감소
  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>카운터</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
