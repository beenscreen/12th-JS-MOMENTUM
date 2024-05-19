const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function editToDo(event) {
  const li = event.target.parentElement;
  const span = li.querySelector("span");
  const newText = prompt("Edit the to-do:", span.innerText);
  if (newText !== null && newText.trim() !== "") {
    const todoId = parseInt(li.id);
    toDos = toDos.map((toDo) => {
      if (toDo.id === todoId) {
        toDo.text = newText;
      }
      return toDo;
    });
    span.innerText = newText;
    saveToDos();
  }
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  li.id = newToDo.id;
  span.innerText = newToDo.text;
  deleteButton.innerText = "X";
  editButton.innerText = "Edit";

  deleteButton.className = "button-name";
  editButton.className = "button-name";

  deleteButton.addEventListener("click", deleteToDo);
  editButton.addEventListener("click", editToDo);

  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.appendChild(editButton);
}

toDoForm.addEventListener("submit", handleToDoSubmit);