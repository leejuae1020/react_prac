import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //3. 아래서 받아온 data를 컴포넌트안에서 데이터로서, state로 쓰기위해서 state를 만들어준다
  const [todos, setTodos] = useState(null);

  //8. input태그에 엮을 state 만들어주기
  const [inputValue, setInputValue] = useState({
    //json 방식의 DB들은 id속성은 대부분 자동으로 입력되기때문에 id 생략
    title: "",
  });

  //13-1. 수정하기 input 태그에 엮을 state 만들어주기
  const [targetId, setTargetId] = useState("");
  const [contents, setContents] = useState("");

  //1. axios 통신 요청

  const fetchTodos = async () => {
    //2 . GET요청 (조회함수)// async {} 블록 안에서 awit를 만나면 response{data}를 할당 받을때까지 기다렸다가 밑에줄이 실행된다.
    const { data } = await axios.get("http://localhost:4000/todos");
    console.log("너의 data는..", data); //db.json에있는 의미있는 data들이 출력 됨

    //4. todo에다가 data를 set해주어야 함. 그래야지만 이 컴포넌트안에서 state에 DB가 들어감
    setTodos(data);
  };

  //11. POST요청 (추가함수)
  const onSubmitHandler = async () => {
    axios.post("http://localhost:4000/todos", inputValue);

    //실시간으로 화면에서 추가되게 해주기
    // setTodos([...todos, inputValue]);
    // db에는 id가 자동으로 입력되지만 state에는 반영이 안되기때문에 다시 fectTodos를 불러와야한다.
    fetchTodos();
  };

  //12. DELETE 요청 (삭제함수)
  const onDeletBtnclickHandler = async (id) => {
    //인자로 id를 넘겨줬으니 다시 id로 받고 4000번의 todos에 있는걸 삭제할건데 id번째꺼를 삭제할것이다. `백틱` 사용
    axios.delete(`http://localhost:4000/todos/${id}`);

    //실시간으로 화면에서 삭제되게 해주기
    // item의 id가 아닌것만 뽑아내줘!
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  //14. PATCH 요청 (수정함수)
  const onUpdataBtnClickHandler = async () => {
    //어떻게 바꿔줄건지 -> {}객체 형태이기때문에 {}형태로 넣어준다.
    // targetId를 가지고 title을 바꿔줄거기때문에 위에있는 contents 로 바꾸어줄 것 (title : contents)
    axios.patch(`http://localhost:4000/todos/${targetId}`, {
      title: contents,
    });

    setTodos(
      todos?.map((item) => {
        if (item.id == targetId) {
          return { ...item, title: contents };
        } else {
          return item;
        }
      })
    );
  };
  //실시간으로 화면에서 추가되게 해주기
  //item에 있는 id와 targetId가 일치하면 원래있는 item그대로 뿌려주고 titile만 contents로 뿌려주기

  useEffect(() => {
    //2-2 db로부터 값을 가져올 것이다.
    fetchTodos();
  }, []);

  // 5. todos를 가지고 어떤 값을 뿌려줄 수 있다
  return (
    <>
      <div>
        {/* 13. 수정영역/ input의 value , onChange 속성추가 */}
        <input
          type="text"
          placeholder="수정할 ID"
          value={targetId}
          onChange={(e) => {
            setTargetId(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="수정할 내용"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button onClick={onUpdataBtnClickHandler}>수정</button>
        <br />
        <br />
      </div>
      <div>
        {/*7. input영역 */}
        <form
          onSubmit={(e) => {
            e.preventDefault();

            //10. 버튼 클릭시 input에 들어있는 값 (state)을 이용하여 DB에 저장 (post요청)
            onSubmitHandler();
          }}
        >
          {/* 9. input value, onChange / inputValue의 형태는 스트리잉이 아니라 {} 형식이기때문에 맞추어주자*/}
          <input
            type="text"
            value={inputValue.title}
            onChange={(e) => {
              setInputValue({
                title: e.target.value,
              });
            }}
          />
          <button>추가</button>
        </form>
      </div>

      <div>
        {/*  data출력되는 부분  */}
        {/* 6. todos? 라고 해주지않으면 todos는 현재 null일수도이 있기때문에 옵셔널체이닝을 해주어야 함. todos가있다면? 보여줘 */}
        {todos?.map((item) => {
          return (
            <div key={item.id}>
              {item.id} : {item.title}
              {/* 12-1 .인자가포함된경우 함수로 한번 감싸주어야함. 그렇지않으면 렌더링시에 함수가 바로 호출되버림 */}
              &nbsp; <button onClick={() => onDeletBtnclickHandler(item.id)}>삭제</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
