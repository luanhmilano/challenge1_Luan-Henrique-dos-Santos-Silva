// localStorage.clear()

const form = document.querySelector('.form')

form.addEventListener("submit", function(e) {
    e.preventDefault()

    let inputFirstName = document.getElementById('first-name').value
    let inputLastName = document.getElementById('last-name').value
    let inputCity = document.getElementById('city').value
    let inputEmail = document.getElementById('email').value
    let inputPassword = document.getElementById('password').value

    let users = []

    if (localStorage.hasOwnProperty("users")) {
        users = JSON.parse(localStorage.getItem("users"))
    }

    users.push ({
        firsName: inputFirstName,
        lastName: inputLastName,
        city: inputCity,
        email: inputEmail,
        password: inputPassword
    })

    localStorage.setItem("users", JSON.stringify(users))
    alert("Usuário cadastrado com sucesso")
    window.location.href = "../login/login.html"
})

/* Função para verificar se as senhas são iguais */

function conferir() {
    const password = document.getElementById('password')
    const confirm_password = document.getElementById('confirm-password')

    if (confirm_password.value === password.value) {
        confirm_password.setCustomValidity('')
    } else {
        confirm_password.setCustomValidity('As senhas não conferem')
    }
}

/* Bloquear novo usuário com mesmo email */

function verificaEmail() {
    const inputEmail = document.getElementById('email')

    if (emailValido(inputEmail.value)) {
        const getUser = JSON.parse(localStorage.getItem("users"))
        for (const element of getUser) {
            if (element.email === inputEmail.value) {
                inputEmail.setCustomValidity("Email já cadastrado.")
                break
            } else {
                inputEmail.setCustomValidity('')
            }
        }
    } else {
        inputEmail.setCustomValidity("Digite um email válido.")
    }

    
}

function emailValido(email) {
    const validar = /\w+@\w+\.\w+/

    return validar.test(email)
}