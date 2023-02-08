import React from "react";
import "./style.css";

function Todo({ todo, onDeleteHandler, onCompleteHandler }) {
  return (
    <div className="todo_container">
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
      <div className="btn_set">
        <button onClick={() => onDeleteHandler(todo.id)} className="del_btn">
          삭 제
        </button>
        {/* 자식 컴포넌트에 props(프로퍼티)로 이벤트 핸들러나 함수를 전달하여 사용할 때에는 바인딩 필요... 화살표함수를 통해 할 수 있으며, 매개변수를 받아 사용 가능 */}
        <button onClick={() => onCompleteHandler(todo.id)} className="complete_btn">
          {todo.isDone ? "취 소" : "완 료"}
        </button>
      </div>
    </div>
  );
}
export default Todo;
