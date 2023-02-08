import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

function List({ todos, setTodos }) {
  // 다른 형제 컴포넌트들의 event에 의해 부모컴포넌트에서 수정된 props들을 넘겨 받는다.

  const onDeleteHandler = (selectedId) => {
    const remainedTodos = todos.filter((todo) => {
      return todo.id !== selectedId;
    });
    setTodos(remainedTodos);
  };

  const onCompleteHandler = (selectedId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === selectedId) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="list_container">
      <h1>잊지마 넌 흐린 어둠사이</h1>
      <div className="list_wrapper">
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onCompleteHandler={onCompleteHandler}
              />
            );
          }
        })}
      </div>
      <h1>왼손으로 그린 별 하나</h1>
      <div className="list_wrapper">
        {todos.map((todo) => {
          if (todo.isDone === true) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onCompleteHandler={onCompleteHandler}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
export default List;
