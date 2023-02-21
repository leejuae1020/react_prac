// 초기 상태 값 (state)
const initialState = {
  user: 123, //객체니까 key : value 상태로 존재
};

// const [number, setNumber] = useState(0)

// 리듀서 : "state에 변화를 일으키는" 함수
// (1) state를 action의 type에 따라 변겨하는 함수
// 인자로 두개를 받음 . input : state와 action
// action : state를 어떻게 할건지 어떻게 수정할건지, 액션에대해 표현하는 객체. type과 value가 존재

const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
