function validarFormulario() {
    
    var nome = document.forms["formulario"]["nome"].value;
    var email = document.forms["formulario"]["email"].value;
    var reclamacao = document.forms["formulario"]["reclamacao"].value;
    var sugestao = document.forms["formulario"]["sugestao"].value;
    var elogio = document.forms["formulario"]["elogio"].value;


    if (nome == "") {
        alert("Por favor, informe o seu nome.");
        return false;
    } else if (!validarNome(nome)) {
    alert("O nome deve conter pelo menos 3 caracteres.");
    return false;
}

    if (email == "") {
        alert("Por favor, informe o seu e-mail.");
        return false;
    } else if (!validarEmail(email)) {
        alert("Por favor, informe um e-mail válido.");
        return false;
    }

    if (reclamacao == "") {
        alert("Por favor, informe a sua reclamacao.");
        return false;
    
    } else if (!validarReclamacao(reclamacao)) {
    alert("A mensagem deve conter mais de 10 caracteres.");
    return false;
}

if (sugestao == "") {
    alert("Por favor, informe a sua sugestao.");
    return false;

} else if (!validarSugestao(sugestao)) {
alert("A mensagem deve conter mais de 10 caracteres.");
return false;
}

if (elogio == "") {
    alert("Por favor, informe seu elogio.");
    return false;

} else if (!validarElogio(elogio)) {
alert("A mensagem deve conter mais de 10 caracteres.");
return false;
}

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("reclamacao", reclamacao);
    localStorage.setItem("sugestao", sugestao);
    localStorage.setItem("elogio", elogio);

    return true;
}

function validarNome(nome) {
    
    return nome.length > 3 ;
}

function validarEmail(email) {
    
    return email.includes("@") && email.includes(".");
}

function validarReclamacao(reclamacao) {
    
    return reclamacao.length > 10 ;
}
function validarSugestao(sugestao) {
    
    return sugestao.length > 10 ;
}
function validarElogio(elogio) {
    
    return elogio.length > 10 ;
}


function exibirInformacoes() {

    var nome = localStorage.getItem("nome");
    var email = localStorage.getItem("email");
    var reclamacao = localStorage.getItem("reclamacao");
    var sugestao = localStorage.getItem("sugestao");
    var elogio = localStorage.getItem("elogio");

    alert("Nome: " + nome + "\nE-mail: " + email + "\nReclamacao: " + reclamacao + "\nSugestao: " + sugestao + "\nElogio: " + elogio);
}



function logout() {
   
    window.location.href = "menu.html"; 
}

