const a ={
    btnEntrar: document.querySelector('#entrar-btn')
}

a.btnEntrar.addEventListener("click", entrar);

function entrar(){
    window.location.href = "../View/pages/login.html";
}