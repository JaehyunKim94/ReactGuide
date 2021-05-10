function getFullName(user) {
  if (user) {
    return user.firstName + " " + user.lastName;
  } else {
    return "Stranger";
  }
}

const chapter = "02_IntroduceJSX";

const user = {
  firstName: "Kim",
  lastName: "Jaehyun",
};

/*
div: 자식 포함하기
h1: 변수 포함하기
h2: 함수 호출 결과 포함하기
*/
const element = (
  <div>
    <h1>{chapter}</h1>
    <h2>Hello, {getFullName(user)}</h2>
  </div>
);

function IntroduceJSX() {
  return element;
}
export default IntroduceJSX;
