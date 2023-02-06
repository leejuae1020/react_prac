import { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, //기존의 form내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, //원하는 값 덮어씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    //클릭함수
    alert(username + ':' + message); // 알림창 띄우기
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick(); // 엔터키가 눌리면 onClick 함수 실행가기
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="나메에와!!!!"
        value={username}
        onChange={onChange}
      ></input>

      <input
        type="text"
        name="message"
        placeholder="왜들그리다운 아무거나 입력해"
        value={message}
        onChange={onChange} // {} 중괄호 안의 것들은 위에서 const로 선언한것들임
        onKeyPress={onKeyPress} //삭제된 문법이라서 취소선 가있음.
      ></input>

      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
