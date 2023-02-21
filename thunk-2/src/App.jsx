import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "./redux/modules/todosSlice";

function App() {
  // thunk를 호출할때도 dispatch를 사용하지용
  const dispatch = useDispatch();

  //useSelector로 store의 state에 접근이 가능함. state.todos에 접근하게되면 todos안에 있는것들 모조리다 가져올 수있음
  // 안에있는것들을 아래와 같이구조분해할당으로 빼올 수 있음
  const { isLoading, error, todos } = useSelector((state) => {
    return state.todos;
  });
  //컴포넌트가 mount될 때만 호출 할 수 있도록 함
  useEffect(() => {
    // patload (인자) 필요없음 : axios.get하는데 payload하지 않기때문에.
    dispatch(__getTodos());
  }, []);

  if (isLoading) {
    return <div>로딩 중 ...........</div>;
    //나왜 계속 로딩중?....
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default App;
