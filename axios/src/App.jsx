import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //3. 아래서 받아온 data를 컴포넌트안에서 데이터로서, state로 쓰기위해서 state를 만들어준다
  const [todos, setTodos] = useState(null);

  //1. axios 통신 요청
  const fetchTodos = async () => {
    //2 .async {} 블록 안에서 awit를 만나면 response{data}를 할당 받을때까지 기다렸다가 밑에줄이 실행된다.
    const { data } = await axios.get("http://localhost:4000/todos");
    // console.log("너의 data는..", data); //db.json에있는 의미있는 data들이 출력 됨

    //4. todo에다가 data를 set해주어야 함. 그래야지만 이 컴포넌트안에서 state에 DB가 들어감
    setTodos(data);
  };
  useEffect(() => {
    //2-2 db로부터 값을 가져올 것이다.
    fetchTodos();
  }, []);

  // 5. todos를 가지고 어떤 값을 뿌려줄 수 있다
  return (
    <div>
      {/* todos? 라고 해주지않으면 todos는 현재 null일수도이 있기때문에 옵셔널체이닝을 해주어야 함. todos가있다면? 보여줘 */}
      {todos?.map((item) => {
        return (
          <div key={item.id}>
            {item.id} : {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default App;
