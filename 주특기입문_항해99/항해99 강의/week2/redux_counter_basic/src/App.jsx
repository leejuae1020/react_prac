import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusN } from "./redux/modules/counter";
import { minusN } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);
  //여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
  // useSelector 라는 Hook을 쓸것임
  const counter = useSelector((state) => {
    return state.counter;
  });

  // useEffect(() => {
  //   console.log("number", +number);
  // }, [number]);

  // dispatch를 가져와보자.
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            // setNumber(+event.target.value); 아래는 구조분해할당으로 한것
            const { value } = event.target;
            setNumber(+value);
          }}
        />
      </div>
      <button
        onClick={() => {
          // + 1 해주는 로직
          // dispatch(plus());
          dispatch(plusN(number));
        }}

        // dispatch({
        //   type: PLUS_N,
        //   payload: 3,
        // })
      >
        +
      </button>
      <button
        onClick={() => {
          // - 1 해주는 로직
          // dispatch(minus());
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
