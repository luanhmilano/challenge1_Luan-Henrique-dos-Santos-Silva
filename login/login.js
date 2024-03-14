const form = document.querySelector('.form')

form.addEventListener("submit", function(e) {
    e.preventDefault()
    if (login()) {
        alert("Usuário encontrado, bem vindo!")
    } else {
        document.querySelector(".login-error").innerHTML = "Wow, invalid username or password. Please, try again!"
        let campos = document.querySelectorAll(".form-input")
        for (const element of campos) {
            element.style.border = "2px solid #E9B425"
        }
    }
})

function login() {
    const inputEmail = document.getElementById('email-login')
    const inputPassword = document.getElementById('password-login')
    let active

    const getUser = JSON.parse(localStorage.getItem("users"))
    for (const element of getUser) {
        if (element.email === inputEmail.value) {
            if (element.password === inputPassword.value) {
                active = true
                break
            }
        } else {
                active = false
        }
    }
    return active
}


