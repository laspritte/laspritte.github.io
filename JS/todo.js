const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input")
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOLIST_KEY = "todolist"
const savedToDos = localStorage.getItem(TODOLIST_KEY);

function deleteToDos(event){
    const li = event.target.parentNode;
    toDos = toDos.filter((item)=> item.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
}

function updateTodoList(toDosObj){
    const li = document.createElement("li");
    li.id = toDosObj.id;
    const span = document.createElement("span");
    span.innerText = toDosObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDos)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const tempText = toDoInput.value;
    toDoInput.value = "";
    toDosObj = {
        text: tempText,
        id: Date.now()
    };
    updateTodoList(toDosObj);
    toDos.push(toDosObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleTodoSubmit);

if(savedToDos !== null){
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos;
    toDos.forEach(updateTodoList);
}

