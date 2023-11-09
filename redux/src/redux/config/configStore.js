//중앙 데이터 관리소를 설정하는 방법

import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";

const rootReducer = combineReducers({
  counter,
});
const store = createStore(rootReducer);

export default store;
