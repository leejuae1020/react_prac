import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  //디바운스 번호설명 : 1 . timerId라는게 처음엔 null이기때문에
  let timerId = null;
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      //언마운트 시 동작이 가능 : Home이라는 컴포넌트가 사라질 때 동작가능하다.
      //만약에 TimerId가 존재한다면 (어떤동작이 실행되고있다는것이니까) 기존에 존재하고있는 타이머를 없애달라는 요청.
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  });

  //버튼을 아무리 많이 눌러도 상관없이 쓰로틀링은 2000ms 후에만 추가요청을 1번만 받는다.
  const throttle = (delay) => {
    if (timerId) {
      //timerId가 있으면 바로 함수 종료 -> return문써주면 종료되니까 써주기
      return;
    }

    console.log(`API요청 실행 ㅠㅠ! ${delay}ms 동안 추가요청은 안받는다 가라.`);
    timerId = setTimeout(() => {
      console.log(`${delay}ms 지났으니까 추가요청 받는다 들어와.`);
      timerId = null;
    }, delay);
  };

  //반복적인 이벤트 이후, delay가 지나면 function
  //1-1 디바운스가 실행이 됬을 떄
  const debounce = (delay) => {
    // 2. 여기값은 null이기때문에
    if (timerId) {
      //할당되어있는 timerId에 해당하는 타이머 제거
      //3. 아래로 들어가지 않는다.
      clearTimeout(timerId);
    }
    //4. 그러면 여기로 흐름이 전환된다. setTimout이 동작하게 되서
    timerId = setTimeout(() => {
      //5. 2000ms(2초) 후에 아래 로직으로 들어가게 되고 콘솔로그가 찍힘
      //5-5. 만약 2초를 기다리지못하고 여러번 클릭하게된다면 다시 1-1로 감. 그땐이미 timerId엔 null이아니라 값이 들어가 있음. 값이들어가 있기때문에 clearTimeout으로 들어가 작동하여 들어가있는 값을 제거함. 그 뒤 setTimeout이 재할당 되어 초기화 됨.
      console.log(`마지막 요청으로부터 ${delay}ms 지났으므로 API 요청 실행!!`);
      timerId = null;
    }, delay);
  };
  return (
    <div
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <h1>Button 이벤트 예제</h1>
      <button onClick={() => throttle(2000)}>쓰로틀링 버튼</button>
      <button onClick={() => debounce(2000)}>디바운싱 버튼</button>
      <div>
        <button
          onClick={() => {
            navigate("/company");
          }}
        >
          페이지이동
        </button>
      </div>
    </div>
  );
}

export default Home;
