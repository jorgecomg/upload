var login = true

function switchlogin() {
    login = !login
    updateinfo()
}

function updateinfo() {
    if (login) {
    document.getElementById('logincad').innerHTML  = `
    <p><button type="button" onclick = "switchlogin()">switch</button></p>
    <h1>
    <p>Login</p>
    </h1><br>
    <p>E-mail:</p>
    <input type="text" id = "email"><br>
    <p>Senha:</p>
    <div id="camposenha">
    <input type="password" id="senha" placeholder = "Senha">
    <button type="button" onmousedown = "switchsenha()" onmouseup = "switchsenha1()">
    <img src = "eye-close.png">
    `
    } else {
    document.getElementById('logincad').innerHTML  = `
    <p><button type="button" onclick = "switchlogin()">switch</button></p>
    <h1>
    <p>Cadastro</p>
    </h1><br>
    <p>Nome:</p>
    <input type="text" id = "nome"><br>
    <p>E-mail:</p>
    <input type="text" id = "email"><br>
    <p>Senha:</p>
    <div id="camposenha">
    <input type="password" id="senha" placeholder = "Senha">
    <button type="button" onmousedown = "switchsenha()" onmouseup = "switchsenha1()">
    <img src = "eye-close.png">
    </div>
    <p>Confirme a senha:</p>
    <input type="text" id = "senha1"><br><br>
    <p><button type="button" onclick = "entrarcad()">Cadastrar</button></p>
    `
    }
}

function entrarcad() {
    if (login) {
        email = document.getElementById('email').value;
        if(document.getElementById('email').value != "" && document.getElementById('senha').value != "") {
            window.alert("logado");
            window.location.href = "index.html";
            sessionStorage.setItem("usuario", email);
        } else {
            window.alert("erro login")
        }
    } else {
        nome = document.getElementById('nome');
        if(document.getElementById('nome').value != "" && document.getElementById('email').value != "" && document.getElementById('senha').value != "" && document.getElementById('senha').value == document.getElementById('senha1').value) {
            
            sessionStorage.setItem("usuario", nome);
            window.alert("Cadastro feito com sucesso");
            window.location.href = "index.html";
            
        } else {
            window.alert("erro cad")
        }
    }
}

function switchsenha() {

    passwordvalue = document.getElementById('senha').value
    
    document.getElementById('camposenha').innerHTML  = `
    <input type="text" id="senha" placeholder = "Senha">
    <button type="button" onmousedown = "switchsenha()" onmouseup = "switchsenha1()">
    <img src = "eye-open.png">
    </button>
    `
    document.getElementById('senha').value = passwordvalue
    
}

function switchsenha1() {

    passwordvalue = document.getElementById('senha').value
    
    
        document.getElementById('camposenha').innerHTML  = `
        <input type="password" id="senha" placeholder = "Senha">
        <button type="button" onmousedown = "switchsenha()" onmouseup = "switchsenha1()">
        <img src = "eye-close.png">
        </button>
        `
        document.getElementById('senha').value = passwordvalue
    
}

function updateuser() {
    usueruser = sessionStorage.getItem("usuario")
    if (usueruser == null) {
        document.getElementById("user").innerHTML = "<p><h2>Sem usuário</h2></p>";
    } else {
    document.getElementById("user").innerHTML = "<p><h2>"+usueruser+"</h2></p>";
    }
}
