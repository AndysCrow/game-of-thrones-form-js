const secciones = document.querySelectorAll(".pregunta");
const btnSiguiente = document.querySelectorAll(".btnSiguiente");
const btnCalificar = document.getElementById("btnCalificar");
const btnVolver = document.getElementById("btnVolver");
const btnReiniciar = document.getElementById("btnReiniciar");
const textoResultado = document.getElementById("textoResultado");

let puntaje = 0;
let indexSeccion = 0;

function mostrarSeccion(){
    secciones.forEach(seccion => seccion.classList.remove("activa"));
    const seccion = secciones[indexSeccion];
    seccion.classList.add("activa");
}

function cambiarSeccion(){
    indexSeccion++;
    mostrarSeccion();
}

function obtenerSeleccion(seccion){
    const seleccion = seccion.querySelector("input[type='radio']:checked");
    return seleccion ? seleccion.value : null;
}

function validarSeleccion(seleccion){
    if (!seleccion) {
        alert("Seleccione una de las opciones");
        return;
    }

    return true;
};

function calificarOpcion(seleccion,data){
    if (seleccion === data) {
        puntaje ++;
    }
}

function mostarCalificación(){
    const total = secciones.length -1 ;
    textoResultado.textContent = `Tiene ${puntaje} de ${total} respuestas acertadas`;
}

// Implementar las funciones, 
btnSiguiente.forEach(btn => {
    btn.addEventListener("click", () => {
        const seccion = secciones[indexSeccion];
        const seleccion = obtenerSeleccion(seccion);
        if (validarSeleccion(seleccion)) {
            calificarOpcion(seleccion,seccion.dataset.correcta);
            cambiarSeccion(indexSeccion);
        };

        console.log(puntaje);
        
    })
})

//Implementar boton Calificar
btnCalificar.addEventListener("click",() => {

        const seccion = secciones[indexSeccion];
        const seleccion = obtenerSeleccion(seccion);
        if (validarSeleccion(seleccion)) {
            calificarOpcion(seleccion,seccion.dataset.correcta);
            cambiarSeccion(indexSeccion);
            mostarCalificación();
        };

        console.log(puntaje);
        console.log(secciones)
})

btnVolver.addEventListener("click",() => {
    puntaje = 0;
    indexSeccion = 0;

    //Se limpian todos los check al darle "VOLVER"
    secciones.forEach(seccion => {
        let valores;
        valores = seccion.querySelector("input[type='radio']:checked");
        if (valores) valores.checked=false;
    })

    mostrarSeccion();
})

btnReiniciar.addEventListener("click",() => {
    puntaje = 0;
    indexSeccion = 0;
    
    //Se limpian todos los check al darle "REINICIAR"
    secciones.forEach(seccion => {
        let valores;
        valores = seccion.querySelector("input[type='radio']:checked");
        if (valores) valores.checked=false;
    })

    mostrarSeccion();
})