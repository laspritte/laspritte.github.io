const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const h1 = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

/** 처음 실행 시 저장된 username이 있는지 확인 후 자동 로그인 */
function _init(){
    const username = localStorage.getItem(USERNAME_KEY);
    if(username !== null){
        loginForm.classList.toggle(HIDDEN_CLASSNAME);
        h1.innerText = `Welcome! ${localStorage.getItem(USERNAME_KEY)}`;
        h1.classList.toggle(HIDDEN_CLASSNAME);
    } 
}

/** submit시 작성된 내용을 username으로 localstorage에 저장 */
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    h1.innerText = `Welcome! ${localStorage.getItem(USERNAME_KEY)}`;
    h1.classList.toggle(HIDDEN_CLASSNAME); 
}

_init()
loginForm.addEventListener("submit", onLoginSubmit);