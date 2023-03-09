function verificar_contraseña(){
    let contraseña = document.getElementById("password").value;
    let validar_contraseña = document.getElementById("validate_password").value;
if (contraseña != validar_contraseña) {
    respuesta.innerHTML = "Las NO contraseñas coinciden";
    respuesta.classList = [];
    respuesta.classList.add("notification");
    respuesta.classList.add("is-danger");
    return false;
  } else {
    respuesta.innerHTML = "Las contraseñas SI coinciden";
    respuesta.classList = [];
    respuesta.classList.add("notification");
    respuesta.classList.add("is-info");
  }
}

document.getElementById("cambio_color").onmouseover = function() {
    this.style.color = "red";
};


document.getElementById("cambio_color").onmouseout = function() {
    this.style.color = "black";
};

const icono = document.getElementById("icono");
const texto = document.getElementById("texto");

icono.addEventListener("click", () => {
  texto.style.display = "block";
  texto.innerHTML = "Este ícono demuestra que como seres humanos nos interesa cualquier cosa y le picamos a cualquier cosa que vemamos... que tal que era un virus?????";
});
