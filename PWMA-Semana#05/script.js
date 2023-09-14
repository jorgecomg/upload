var login = true
var passwordinvisible = true
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
    <input type="text" id="senha" oninput="maskPassword()">
    <p><button type="button" onclick = "entrarcad()">Entrar</button></p>
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
    <input type="text" id="senha" oninput="maskPassword()">
    <p>Confirme a senha:</p>
    <input type="text" id = "senha1"><br><br>
    <p><button type="button" onclick = "entrarcad()">Cadastrar</button></p>
    `
    }
}

function entrarcad() {
    if (login) {
        if(document.getElementById('email').value != "" && document.getElementById('senha').value != "") {
            window.alert("logado")
        } else {
            window.alert("erro login")
        }
    } else {
        if(document.getElementById('email').value != "" && document.getElementById('senha').value != "" && document.getElementById('senha').value == document.getElementById('senha1').value) {
            window.alert("cadastrado")
        } else {
            window.alert("erro cad")
        }
    }
}

function switchsenha() {
    passwordinvisible = !passwordinvisible

    passwordvalue = document.getElementById('senha').value
    if (!passwordinvisible) {
    
    document.getElementById('camposenha').innerHTML  = `
    <input type="text" id="senha" placeholder = "Senha">
    <button type="button" onclick = "switchsenha()">
    <img src = "eye-open.png">
    </button>
    `
    document.getElementById('senha').value = passwordvalue
    } else {
        document.getElementById('camposenha').innerHTML  = `
        <input type="password" id="senha" placeholder = "Senha">
        <button type="button" onclick = "switchsenha()">
        <img src = "eye-close.png">
        </button>
        `
        document.getElementById('senha').value = passwordvalue
    }
    
}
