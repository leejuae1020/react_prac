import axios from "axios";

//axsios를 구성하는  환경설정 관련 코드가 입력값으로 들어간다.
// axios.create의 입력값으로 들어가는 객체는 configuration "객체"다.
const instance = axios.create({
  baseURL: "http://localhost:4000",
  //   timeout: 1, //단위 ms . 1 = 0.001초
});

instance.interceptors.request.use(
  //첫 콜백 함수 : 요청을 보내기 전 수행
  // 인자를 항상 config로 받음
  function (config) {
    console.log("인터셉트 요청 성공 !");
    return config;
  },

  //두번째 콜백 함수 : 오류 요청을 보내기 전 수행
  function (error) {
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  //서버로부터 정상 응답을 받은 경우
  function (response) {
    console.log("인터셉트 정상 응답 수신!");
    return response;
  },

  //서버로부터 오류 응답을 받은 경우
  function (error) {
    console.log("인터셉스 오류 응답 수신!");
    return Promise.reject(error);
  }
);

export default instance;
