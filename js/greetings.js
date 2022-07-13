const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const LOCALSTORAGE_KEY = "username";

function onloginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(LOCALSTORAGE_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `hello ${username}!!!`;
}


const savedUserName = localStorage.getItem(LOCALSTORAGE_KEY);

if(savedUserName === null ){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onloginSubmit);
} else {
    paintGreetings(savedUserName);
}
