//초기값
const initialState = {
  number: 0,
};
// const [number, setNumber] = usestate(0)과 같은 것

export const PLUS_ONE = "counter/PLUS_ONE";
export const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
// 리듀서 = state에 변화를 일으키는 함수
// 변화 : state를 action의 type에 따라 변경하는 함수
// input : state와 action
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return { number: state.number + 1 };
    case MINUS_ONE:
      return { number: state.number - 1 };
    case PLUS_N:
      return { number: state.number + action.payload };
    default:
      return state;
  }
};

export default counter;
