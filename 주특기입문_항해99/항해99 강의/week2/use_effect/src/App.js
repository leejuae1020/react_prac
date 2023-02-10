import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // 어떠한값을 input에 입력할때마다 value 라는 stats에 저장이됨
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("안녕 유즈이풱트");

    return () => {
      console.log("안녕 나 사라져요룰레이"); // 컴포넌트가 사라질때 실행시키고 싶다면
    };
  }, []); // 의존성배열

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
