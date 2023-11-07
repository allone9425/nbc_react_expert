import styled from "styled-components";
import TestPage from "./components/TestPage";
import GlobalStyle from "./components/GlobalStyle";
const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

const StP = styled.p`
  color: purple;
`;
//박스의 색
const boxList = ["red", "blue", "green", "black"];

//색을 넣으면 이름을 반환
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간 박스";
    case "green":
      return "초록박스";
    case "blue":
      return "파란박스";
    default:
      return "검은박스";
  }
};

function App() {
  return (
    // <StContainer>
    //   {boxList.map((box) => {
    //     return (
    //       <StBox borderColor={box}>
    //         <StP>안녕 {getBoxName(box)}</StP>
    //       </StBox>
    //     );
    //   })}
    // </StContainer>
    <>
      <GlobalStyle />
      <TestPage title="제목" contents="내용입니다" />
    </>
  );
}

export default App;
