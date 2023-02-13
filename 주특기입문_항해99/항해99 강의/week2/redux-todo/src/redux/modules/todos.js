//초기상태값 (state)

const initialState = [
  {
    id: 1, // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: 2, // id는 모두 고유값이어야 합니다.
    title: "점심 먹기",
    body: "점심 뭐먹지..?",
    isDone: false,
  },
];

//리듀서 = state에 변화를 일으키는 함수
// ㄴ state를 action의 type에따라 변경하는 함수다
//input : state와 action

const todo = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todo;
