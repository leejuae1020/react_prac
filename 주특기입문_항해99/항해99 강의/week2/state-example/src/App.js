import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div>Number State: {number}</div>
      <button
        onClick={() => {
          // 기존 업데이트 방법
          // 배치성으로 처리 됌 -> 배치업데이트가 됌
          // state를 파악하는방법이 "배치업데이트"
          // 한꺼번에 변경 된 내용을 모아서 한 번만 반영 됌. (명령을 한개로 모아서 한 번만 실행)

          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);

          // 렌더링이 잦다 -> 성능에 이슈가 있는 것. 불필요한 렌더링을 피하기위해 배치업뎃을 사용
          // 동선을 줄이기위해, 비용을 절감하기위해 배치업뎃을 사용한다.(피자주문의 예를 떠올려보기)

          // 함수형 업데이트 방법
          // 명령들을 모아서 순차적으로 한개 씩 실행함
          // 인자부분에 현재상태의 state가 들어오고 바뀐 state를 반환하기때문에 최신값을 유지함

          setNumber((cur) => cur + 1);
          setNumber((cur) => cur + 1);
          setNumber((cur) => cur + 1);
        }}
      >
        누르면 UP
      </button>
    </>
  );
}

export default App;
