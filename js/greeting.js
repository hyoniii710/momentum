const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 많이 사용되는 string을 담는 변수
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
  Greeting(username);
}

// 반복되는 코드 함수작성
function Greeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", onLoginSubmit);

// 입력된 유저이름 저장
const saveUsername = localStorage.getItem("USERNAME_KEY");

if (saveUsername === null) {
  // saveUsername 값이 null 이면 form의 hidden class명을 지운다.
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 저장된 이름 보여주기
  Greeting(saveUsername);
}
