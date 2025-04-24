const senha = document.getElementById("senha")
const eye = document.getElementById("eye")

eye.addEventListener("click", () => {
    const mostrarSenha = senha.type === "text"

    senha.type = mostrarSenha ? "password" : "text"
    eye.src = mostrarSenha ? "./assets/eye.svg" : "./assets/eye-off.svg"
})