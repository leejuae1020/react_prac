// src/App.jsx

import React from "react";
// import { useState } from "react";
import useInput from "./hooks/useInput";

const App = () => {
  // 우리가 만든 훅을 마치 원래 있던 훅인것마냥 사용해봅니다.
  const [title, onChangeTitleHandler] = useInput();
  const [body, onChangeBodyHandler] = useInput();

  // // input의 갯수가 늘어날때마다 state와 handler가 같이 증가한다.
  // const [title, setTitle] = useState("");
  // const onChangeTitleHandler = (e) => {
  //   setTitle(e.target.value);
  // };

  // // input의 갯수가 늘어날때마다 state와 handler가 같이 증가한다.
  // const [body, setBody] = useState("");
  // const onChangeBodyHandler = (e) => {
  //   setBody(e.target.value);
  // };

  return (
    <div>
      <input type="text" name="title" value={title} onChange={onChangeTitleHandler} />
      <input type="text" name="title" value={body} onChange={onChangeBodyHandler} />
    </div>
  );
};

export default App;
