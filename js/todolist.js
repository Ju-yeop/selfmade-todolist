const todoforms = document.querySelector("#todof");
const todoinput = document.querySelector("#todoinput");
const todolist = document.querySelector("#todo-list");

let todos = [];

function settodo(){
    localStorage.setItem("Todos",JSON.stringify(todos));
}

function deletetodo(event){
    const li = event.target.parentElement;
    todos = todos.filter(todo => todo.id !== li.id);
    li.remove();
    settodo();
}

function painttodo(newtodo){
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    span.innerText = newtodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deletetodo);
    li.appendChild(button);
    li.appendChild(span);
    todolist.appendChild(li);
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



const loca = localStorage.getItem("Todos");

if(loca !== null){
    const parselocal = JSON.parse(loca);
    todos = parselocal;
    parselocal.forEach(painttodo);
}

todoforms.addEventListener("submit",handletodo);

// 개선해야 할 점 : TODO 읿력 후 바로 리스트를 삭제하면 타겟한 UL태그 내의 LI태그는 삭제되지만 LocalStorage에서는 삭제되지않는다.//

// 주의사항 및 의문점 //
/*
1. 함수 소문자 대문자 구분 잘하기 
2. '' has already been declared -> const로 선언한 변수를 재설정하려고 할 경우의 에러 메세지, 
내장되어있는 함수명을 const로 선언해도 동일 에러 발생 Ex)const local -> Error
3. deletetodo에 parseInt를 쓰는 이유 */