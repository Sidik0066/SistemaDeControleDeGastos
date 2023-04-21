const a ={
    btnEntrar: document.querySelector('#entrar-btn'),
    btnRegistar: document.querySelector('#register-page')
}

a.btnEntrar.addEventListener("click", entrar);
a.btnRegistar.addEventListener("click", registar);

function entrar(){
    window.location.href = "../View/pages/login.html";
}

function registar() {
    window.location.href = "../View/pages/register.html";
}