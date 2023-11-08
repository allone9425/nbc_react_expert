import React from "react";

function Box3() {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "#c491be",
    color: "white",
  };
  console.log("Box3 컴포넌트가 렌더링 되었어요!");
  return <div style={style}>Box3</div>;
}
export default React.memo(Box3);
