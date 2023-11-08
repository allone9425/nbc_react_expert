import React from "react";

function Box2() {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "#4e93ed",
    color: "white",
  };
  console.log("Box2 컴포넌트가 렌더링 되었어요!");
  return <div style={style}>Box2</div>;
}

export default React.memo(Box2);
