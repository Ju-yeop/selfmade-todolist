const todoform = document.querySelector("#todoform");
const todoinput = document.querySelector("#todoform input");
const todolist = document.querySelector("#todolist");

let todos = [];

function painttodo(newtodo){
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    span.innerText = newtodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deletetodo);
    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);
}

function deletetodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function handletodo(event){
    event.preventDefault();
    const newtodo = todoinput.value;
    const newtodoobj = {text:newtodo, id:new Date()};
    todoinput.value = "";
    todos.push(newtodoobj);
    painttodo(newtodoobj);
    settodo();
}

function settodo(){
    localStorage.setItem("Todos",JSON.stringify(todos));
}

const local = localStorage.getItem("Todos");

if(local !== null){
    const parselocal = JSON.parse(local);
    todos = parselocal;
    todos.forEach(painttodo);
}
todoform.addEventListener("submit",handletodo);