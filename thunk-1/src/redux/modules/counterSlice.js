// src/redux/modules/counterSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//1 . 청크 생성 , 이름앞에 언더바 두개 ..
//  2개의 INPUT
// (1) 이름 : 의미는 크게없음
// (2) 함수

export const __addNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  //인자가 2개들어감. paylode와 thunkAPI
  (paylode, thunkAPI) => {
    //수행하고 싶은 동작 넣어주기 : 3초를 기다리게 할 예정
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(paylode));
    }, 3000);
  }
);

export const __minusNumber = createAsyncThunk(
  "MINUS_NUMBER_WAIT",
  //인자가 2개들어감. paylode와 thunkAPI
  (paylode, thunkAPI) => {
    //수행하고 싶은 동작 넣어주기 : 3초를 기다리게 할 예정
    setTimeout(() => {
      thunkAPI.dispatch(minusNumber(paylode));
    }, 3000);
  }
);

const initialState = {
  number: 0,
};

// counterSlice.js의 Slice 구조
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // 리듀서 안에서 만든 함수 자체가 리듀서의 로직이자, 액션크리에이터가 된다.
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
