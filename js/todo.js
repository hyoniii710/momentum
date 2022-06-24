const todoFrm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// 기존에 있던 todo를 넣어 기억하기 위해선 const 보다 let 사용
let toDos = [];
// JSON.stringify : 자바스크립트 object나 array 어떤것이든 string 으로 바꿔주는 기능.

// (5) toDo를 로컬스토리지에 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  // 클릭한 todo와 id가 다른 todo만을 filter로 남기고싶다 = 삭제의 의미
  toDos = toDos.filter((todoDel) => todoDel.id !== parseInt(li.id));
  saveToDos();
}

// (2) todo 추가 함수
function createTodo(NewTodo) {
  const li = document.createElement("li");
  li.id = NewTodo.id;
  const span = document.createElement("span");
  span.innerText = NewTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  // like
  const like = document.createElement("span"); //span 태그 생성
  // like안에 아이콘 넣기 위해 i태그 생성
  const likeIcon = document.createElement("i");
  //like 에 스타일 클래스 리스트 추가
  like.classList.add("like");
  // likeicon에 클래스 리스트 추가
  likeIcon.classList.add("material-icons");
  likeIcon.innerText = "favorite_border";

  like.appendChild(likeIcon);

  like.addEventListener("click", (e) => {
    const target = e.target;
    const liketext =
      target.innerText === "favorite" ? "favorite_border" : "favorite";
    target.innerText = liketext;
    console.log(liketext);
  });

  // if문 사용
  // like.addEventListener("click", (e) => {
  //   const target = e.target;
  //   if (target.innerText === "favorite") {
  //     target.innerText = "favorite_border";
  //   } else {
  //     target.innerText = "favorite";
  //   }
  // });

  li.appendChild(like);
  // like 끝

  //li에 span 자식태그 추가
  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
}

// (1) 만든 todo 저장 함수
function ToDoSubmit(e) {
  e.preventDefault();
  //todo input 받은 값 저장
  const NewTodo = todoInput.value;
  // (2) input을 비우고,
  todoInput.value = "";
  // toDos 배열에 담긴 값들을 로컬스토리지에 넣을 예정
  // (3) 그 텍스트(NewTodo)를 toDos 배열에 push 하고,
  const NewTodoObj = {
    text: NewTodo,
    id: Date.now(),
  }; //object를 만들어서 toDos 에 저장한다.
  toDos.push(NewTodoObj);
  // (4) 그 다음 화면에 toDo를 그리고
  // 원래는 createTodo(NewTodo)stirng 을 줬는데 object로 바꿔줌
  createTodo(NewTodoObj);
  saveToDos();
}

// (1) 사용자가 form 을 submit
todoFrm.addEventListener("submit", ToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  // string 객체 json 객체로 변환 (JSON.parse)
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // 각각의 item에 함수 실행 -> forEach
  // forEach로 createTodo 하는것만 남음
  parsedToDos.forEach(createTodo);
  // createTodo 함수는 텍스트를 받음, 그 받은 텍스트를 각각 전달만 해주면 됨
}
