/*
Crear una función agregarTarea en el objeto
ListaTareas que tome la tarea ingresada como
parámetro y la agregue al arreglo tareas

*/


const ListaTareas = {
    tareas: []
}

function agregarTarea(){
    //encontrar el valor del id nombre
    const taskName = document.getElementById("nombre").value;
    //hacer un push a tareas
    ListaTareas.tareas.push(taskName)
    //llamar a la funcion mostrar lista, se renderiza la vista cada vez que se ejecuta la funcion
    mostrarLista()
}



/**
 Crear una función mostrarLista en el objeto
ListaTareas que recorra el arreglo tareas y
muestre cada tarea como un elemento de lista
( <li> ) en el elemento con el id "lista-tareas".

 */

function mostrarLista(){
    const listaTareas = document.getElementById("lista-tareas");
    //limpiar la lista de tareas
    listaTareas.innerHTML = "";
    for(let i=0; i< ListaTareas.tareas.length;i++){
        //agregar un li
        const li = document.createElement("li");
        //agrregar texto
        const text = document.createTextNode(ListaTareas.tareas[i]);
        //agregar texto a li
        li.appendChild(text);
        //agregar li to ul
        listaTareas.appendChild(li);

    }
}