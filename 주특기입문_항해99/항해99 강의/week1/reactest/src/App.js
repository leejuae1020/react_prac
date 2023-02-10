import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "react를 배워봅시다",
    },
    { id: 2, title: "원장님 재밌어요" },
    { id: 3, title: "매니저님들 짱" },
  ]);

  const addBtnHandler = () => {
    const newTodos = {
      id: todos.length + 1,
      title: title,
    };

    setTodos([...todos, newTodos]);
  };

  return (
    <div>
      <div className="container">
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button onClick={addBtnHandler}>추가하기</button>
      </div>

      <h1>Todo List</h1>
      <div className="todos-container">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
