//action value (휴먼에러를 방지)
const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

//action creator (휴먼에러 방지) : action value를 return하는 함수
export const plus = () => {
  return {
    type: PLUS,
  };
};

export const minus = () => {
  return {
    type: MINUS,
  };
};

export const plusN = (payload) => {
  // console.log("payload", payload);
  return {
    type: PLUS_N,
    payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

// 초기 상태 값 (state)
const initialState = {
  number: 0, //객체니까 key : value 상태로 존재
};

// const [number, setNumber] = useState(0)

// 리듀서 : "state에 변화를 일으키는" 함수
// (1) state를 action의 type에 따라 변경하는 함수
// 인자로 두개를 받음 . input : state와 action
// action : state를 어떻게 할건지 어떻게 수정할건지, 액션에대해 표현하는 객체. type과 value가 존재

//input : state 와 action
//action 객체라는 것은 action type을 paylode만큼 처리하는 것이다
//ex : paylode가 3이다. 3만큼 plus.

const counter = (state = initialState, action) => {
  //   console.log(state);
  switch (action.type) {
    case PLUS:
      return {
        number: state.number + 1,
      };
    case MINUS:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
