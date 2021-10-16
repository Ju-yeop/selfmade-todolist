const loginput = document.querySelector("#login input");
const login = document.querySelector("#login");
const greet = document.querySelector("h2");

function handlelogin(event){
    event.preventDefault();
    const inputname = loginput.value;
    login.classList.add("hidden");
    localStorage.setItem("Username",inputname);
    Appeargreet(inputname);
}

function Appeargreet(name){
    greet.innerText = `Hello ${name}`;
    greet.classList.remove("hidden");
}

const local = localStorage.getItem("Username");
if(local === null){
    login.classList.remove("hidden");
    login.addEventListener("submit",handlelogin);
}else{
    Appeargreet(local);
}