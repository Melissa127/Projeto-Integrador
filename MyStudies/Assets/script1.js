function validarFormulario() {
    var nome = document.forms["formulario"]["nome"].value;
    var email = document.forms["formulario"]["email"].value;
    var senha = document.forms["formulario"]["senha"].value;

    if (nome == "") {
        alert("Por favor, informe o seu nome.");
        return false;
    }

    if (email == "") {
        alert("Por favor, informe o seu e-mail.");
        return false;
    } else if (!validarEmail(email)) {
        alert("Por favor, informe um e-mail válido.");
        return false;
    }

    if (senha == "") {
        alert("Por favor, informe a sua senha.");
        return false;
    } else if (!validarSenha(senha)) {
        alert("A senha deve conter pelo menos 9 caracteres, números, letras maiúsculas e minúsculas.");
        return false;
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    return true;
}

function validarEmail(email) {
    
    return email.includes("@") && email.includes(".");
}

function validarSenha(senha) {
    
    return senha.length >= 9 && /[0-9]/.test(senha) && /[a-z]/.test(senha) && /[A-Z]/.test(senha);
}

function exibirDados() {
    var nome = localStorage.getItem("nome");
    var email = localStorage.getItem("email");
    var senha = localStorage.getItem("senha");

    alert("Nome: " + nome + "\nE-mail: " + email + "\nSenha: " + senha);
}

function validarLogin() {
    let email = document.getElementById("loginEmail").value;
    let senha = document.getElementById("loginSenha").value;

    let armazenadoEmail = localStorage.getItem("email");
    let armazenadoSenha = localStorage.getItem("senha");

    if (email.trim() === armazenadoEmail.trim() && senha.trim() === armazenadoSenha) {
        alert("Login bem-sucedido!");
      
        window.location.href = "menu.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
}

function exibirInformacoesUsuario() {
    var nome = localStorage.getItem("nome");
    var email = localStorage.getItem("email");

    document.getElementById("userInfoNome").innerText = nome;
    

   document.getElementById("userInfoEmail").innerText = email;

}
function voltarLogin() {
   
    window.location.href = "index.html"; 
}

