//중앙 데이터 관리소 (스토어) 를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import todo from "../modules/todos";

const rootReducer = combineReducers({
  todo,
});
const store = createStore(rootReducer); //인자로 리듀서의 묶음이 들어가야함 = 루트리듀서

export default store;
