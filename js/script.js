/* Funcion para validar los input del formulario, este retorna una cadena con distinto contenido segun el caso. */
function validarCampos(){

    /* Almacenamos el valor de cada input. */
    let nombre = document.getElementById('form-nombre').value;
    let apellido = document.getElementById('form-apellido').value;
    let email = document.getElementById('form-email').value;

    /* Validacion con IF-ELSE anidados */
    if (nombre === '' || apellido === '' || email === ''){
        return 'Por favor, completa todos los campos.';
    }
    else {
        if (!email.includes('@')){
            return 'Por favor, ingrese un email valido.';
            
        }
        else {
            return 'Formularo enviado con exito.';
        }
    }
}

/* MENSAJE PERSONALIZADO MOSTRAR TRAS SUBMIT */
function mostrarMensaje(){
    let cadena = validarCampos();
    let contenedor = document.getElementById('contenedor-mensaje-aviso');
    let mensaje = document.getElementById('mensaje-aviso');
    contenedor.style.display = 'flex';
    mensaje.textContent = cadena;
    return false;
}

/* MENSAJE PERSONALIZADO OCULTAR TRAS ACEPTAR*/
document.getElementById('btn-aviso').addEventListener('click', function(){
    document.getElementById('contenedor-mensaje-aviso').style.display = 'none';
});

/* FUNCION PARA ACTUALIZAR EL CONTADOR DE VISITAS */
function actualizarContador(){
    let contador = localStorage.getItem('contador');

    if ( contador === null){
        contador = 1;
    } 
    else {
        contador = parseInt(contador) + 1;
    }

    localStorage.setItem('contador', contador);
    document.getElementById('contador-visitas').textContent = contador;
    return;
}
actualizarContador(); /* CADA VEZ QUE SE CARGUE LA PAGINA, LLAMA A LA FUNCION */

/* FUNCION PARA ACTUALIZAR EL TEMPORTIZADOR DE ENTREGA */
function actualizarTemporizador(){
    let temporizador = document.getElementById('temporizador-entrega');
    let ahora = new Date();
    let limite = new Date(2025, 4, 5, 23, 59)

    let tiempoRestante = limite - ahora;
    if ( tiempoRestante <= 0 ){
        temporizador.textContent = '00:00';
        clearInterval(intervalId);
        return;
    }
    else {
        let horas = Math.floor(tiempoRestante / (1000 * 60 * 60));
        let minutos = Math.floor((tiempoRestante / (1000 * 60)) % 60);
        temporizador.textContent = String(horas).padStart(2, '0') + ':' + String(minutos).padStart(2, '0');
        return;
    }
}
setInterval(actualizarTemporizador, 1000);

/* EVENTO PARA OCULAR O MOSTRAR EL CONTENIDO DE LA SECCION PELICULAS */

document.getElementById('btn-peliculas').addEventListener('click', function(){
    let contenedor = document.getElementById('contenedor-peliculas');
    if (contenedor.style.display === 'flex'){
        contenedor.style.display = 'none';
        return;
    }
    else {
        contenedor.style.display = 'flex';
        return;
    }
});