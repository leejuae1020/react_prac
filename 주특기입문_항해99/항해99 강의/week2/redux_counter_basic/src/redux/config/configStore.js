// 중앙 데이터 관리소 (store)를 설정하는 부분
import { createStore } from "redux"; //스토어를 만드는 API
import { combineReducers } from "redux"; //reducer를 하나로 묶는 역할
import counter from "../modules/counter";
import users from "../modules/users";

const rootReducer = combineReducers({
  // key : value형태
  // 키밸류가 중복일경우 counter, 으로 생략가능
  // 이 애플리케이션 전체에서 store를 쓰게되는 것
  counter: counter,
  users,
});
const store = createStore(rootReducer); //중앙데이터관리소 인자로 reducer의 묶음들이 들어감 -> rootReduser

export default store;
