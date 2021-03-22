var password = document.getElementById("password").value;
var boton = document.getElementById('passwordConf');
var confirmacion = document.getElementById('confirmacionPassword');
boton.addEventListener('click',chequeoPassword);

function chequeoPassword(){
    var password = document.getElementById("password").value;

    if(password ==="impa"){
        confirmacion.style.display = 'block';
        confirmacion.innerHTML = 'contraseña correcta';

    } else {
        confirmacion.style.display = 'block';
        confirmacion.innerHTML = 'INCORRECTO, TRATE NUEVAMENTE';
    }

}