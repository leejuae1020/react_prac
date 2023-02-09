import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  // 추가버튼
  const addBtnHandler = () => {
    //1. 새로운 형태의 이놈을 만든다 ㅋㅋ
    //이놈 : { id: 1, age: 30, name: "송중기" }
    //2. 새로운 이놈을 배열에 더한다.

    const 이놈 = {
      id: users.length + 1,
      age: age, // 동일하면 생략가능  age : (state에 있는) age (13번줄)
      name: name, // name : (state에있는) name (12번줄)
    };

    setUsers([...users, 이놈]);
  };

  //삭제버튼 클릭할때
  const delBtnHandler = (iidd) => {
    // ()안에는 아무렇게나 작명해 됨 . 63번째 줄의 (item.id를 받아온것)
    // users.filter(user => user.id !== 어떤값)
    // 어떤값을 어떻게 ? item.id를 매개변수로 넘겨주자

    const newUsers = users.filter((x) => x.id !== iidd);
    /*const newUsers = users.filter(function(user){
      return users.id !== id;
    })*/

    //user.id와 받아온 iidd랑 비교해서 아닌것만 필터링.
    //x -> 아무렇게나 작명해도 됨
    //필터링한 users를 새로운 변수(nweUsers)로 할당해줌

    setUsers(newUsers);
    //users가 상태가 바뀌었으니 setUsers를 통해 셋팅해주어야함
  };

  return (
    <div>
      <div>
        이름 : &nbsp;
        <input value={name} onChange={nameChangeHandler} />
        {/* 인풋 값에 타이핑할때마다 name에 담아줌. setName을 통해. */}
        <br />
        나이 : &nbsp;
        <input value={age} onChange={ageChangeHandler} />
        <br />
        <button onClick={addBtnHandler}>추가</button>
        {/* 인풋 값에 타이핑할때마다 age에 담아줌. setAge를 통해. */}
      </div>
      <div className="app-style">
        {users.map((item) => {
          return <User item={item} delBtnHandler={delBtnHandler} />;
        })}
      </div>
    </div>
  );
};

const User = ({ item, delBtnHandler }) => {
  return (
    <div key={item.id} className="component-style">
      {item.age}-{item.name}
      <button onClick={() => delBtnHandler(item.id)}>X</button>
    </div>
  );
};

export default App;
