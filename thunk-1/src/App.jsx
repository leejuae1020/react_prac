// src/App.jsx

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addNumber, __minusNumber } from "./redux/modules/counterSlice";

const App = () => {
  const globalNumber = useSelector((state) => state.counter.number);
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  const onClickAddNumberHandler = () => {
    // dispatch(addNumber(+number));
    dispatch(__addNumber(+number));
  };

  const onClickMinusNumberHandler = () => {
    // dispatch(minusNumber(+number));
    dispatch(__minusNumber(+number));
  };

  return (
    <div>
      <div>{globalNumber}</div>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
