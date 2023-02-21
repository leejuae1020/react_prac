import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  //1-2. 초깃값을 이제는 객체형태로 묶어 놓고 todos뿐만 아니라 하위 3개들도 설정해주자.
  isLoading: false,
  isError: false,
  error: null,
};

//1. thunk API호출
// 두개의인자 문자열 name, 함수(컴포넌트에서 주는 payload, thunk와관련된 기능을 가지고있는 thunkAPI)
//1-3 Thunk 함수만들기
// thunk함수는 비동기통신이기때문에 소괄호 앞에 async 붙여주고 블록안에서 await 만나면 끝날때까지 기다린 후 아랫줄 실행 됨
export const __getTodos = createAsyncThunk("todos/getTodos", async (payload, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:4001/todos");
    console.log("response", response.data);
    //2.toolkit 에서 제공하는 API
    //Promise -> resolve(=네트워크 요청이 성공한경우) -> dispatch해주는 기능을 가진 API
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    console.log("error", error);
    //toolkit 에서 제공하는 API
    //실패한 value를 가지고 dispatch해줌
    return thunkAPI.rejectWithValue(error);
  }
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  //1-1. extraReucers 추가
  extraReducers: {
    [__getTodos.pending]: (state) => {
      //아직 진행중일 때
      state.isLoading = true; //// 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      state.isError = false;
    },
  },
  [__getTodos.fulfilled]: (state, action) => {
    // console.log("풀필드: ", action);
    state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
    state.isError = false;
    state.todos = action.payload; //Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
  },
  [__getTodos.rejected]: (state, action) => {
    state.isLoading = false; //// 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    state.isError = true;
    state.error = action.payload; //catch 된 error 객체를 state.error에 넣습니다.
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
