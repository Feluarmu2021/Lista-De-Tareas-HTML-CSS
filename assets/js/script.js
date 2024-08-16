let tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" },
    { tarea: "Lavar el auto"}
];

//Invocar la función

tabla(tareas);

//Función para listar las tareas
function tabla(tareas){
    let cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';
    for(let i = 0; i < tareas.length; i++){
        cuerpoTabla.innerHTML += `
            <tr> 
                <td>${tareas[i].tarea} </td>
                <td><button class="btn btn-danger" onclick="eliminarTarea()">Finalizar</button></td>
            </tr>
        `
    }
}

//Función para eliminar la tarea
function eliminarTarea(indice){
    let confirmar = confirm('Desea eliminar la tarea');
    if (confirmar === true){
        tareas.splice(indice,1);
        alert ('Tarea eliminada');
        tabla(tareas);
    }
}

//Función para agregar tareas
function agregarTarea(){
    let nuevaTarea = document.getElementById('nuevaTarea').value;
    console.log(nuevaTarea);
    tareas.push({tarea: nuevaTarea});
    tabla(tareas);
    document.getElementById('nuevaTarea').value = '';
    mostrarFormulario();
}



//Función para mostrar / ocultar el formulario
function mostrarFormulario(){
    
    let formulario = document.getElementById('formulario');
    (formulario.style.display=="none") ? formulario.style.display="block" : formulario.style.display="none" 
}
    
    








