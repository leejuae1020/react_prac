import { useState } from "react";
import "./App.css";

// 레이아웃 , 헤더 , 폼 , 리스트 => 한 page

function App() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");

  const onInputTitleHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const onInputBodyHandler = (event) => {
    setInputBody(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); //새로고침 초기화 방지
  };

  return (
    <>
      {/*레이아웃*/}
      <div className="layout"></div>

      {/*헤더*/}
      <header className="container">
        <div>My Todo List</div>
        <div>React</div>
      </header>

      {/*폼*/}
      <form onSubmit={onSubmitHandler} className="form_container">
        <div className="input_container">
          <label>제목</label>
          {/* 인풋창을 빈칸으로 두고 submit을 했을 시 id가 모두 0으로 출력되어 삭제/업데이트 시 한꺼번에 이벤트가 일어나는 오류 발생 */}
          {/* 유저가 인풋창에 값을 필수로 넣고 진행할 수 있게 required 속성 추가 */}
          <input type="text" name="title" value={inputTitle} onChange={onInputTitleHandler} required />
          <label>내용</label>
          <input type="text" name="body" value={inputBody} onChange={onInputBodyHandler} />
        </div>
        <button className="btn">추가하기</button>
      </form>

      {/*리스트*/}
      <div className="list_container">
        <h1 className="list_title">❤️You can do it❤️</h1>

        <div className="list_wrapper">
          <div className="todo_container">
            <h2 className="todo_title">과제 제출</h2>
            <div>손흥민 체고</div>
            <div className="btn_set">
              <button className="del_btn">삭제</button>
              <button className="complete_btn">완료</button>
            </div>
          </div>
        </div>

        <h1 className="list_title">❤️I knew you could do it ❤️</h1>

        <div className="list_wrapper">
          <div className="todo_container">
            <h2 className="todo_title">밤새기</h2>
            <div>나에게 힘을 주소서</div>
            <div className="btn_set">
              <button className="del_btn">삭제</button>
              <button className="complete_btn">완료</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
