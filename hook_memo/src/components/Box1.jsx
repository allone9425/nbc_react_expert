import React from "react";

function Box1() {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "#01c49f",
    color: "white",
  };
  console.log("Box1 컴포넌트가 렌더링 되었어요!");
  return <div style={style}>Box1</div>;
}
export default React.memo(Box1);
