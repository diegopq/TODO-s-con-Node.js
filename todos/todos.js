const fs = require("fs");
const colors = require("colors");

//listado de tareas
let listadoTareasPorHacer = [];

//guarda las tareas en un archivo json
const guardarDB = () => {
    //convierte en archivo json
    let data = JSON.stringify(listadoTareasPorHacer);
    //escribe el archivo
    fs.writeFile("db/data.json", data, (e) => {
        if (e) {
            throw new Error("No se pudo guardar la tarea", e);
        }
    });
};

const cargarDB = () => {
    //al hacer el require se serializa automaticamente el json en objeto de js
    try {
        listadoTareasPorHacer = require("../db/data.json");
    } catch (error) {
        listadoTareasPorHacer = [];
    }
    // console.log(listadoTareasPorHacer);
};

//obtiene el listado de las tareas por hacer de la bd
const getListado = () => {
    cargarDB();
    if (listadoTareasPorHacer.length === 0) {
        console.log("No hay ninguna tarea por hacer".yellow);
    } else {
        listadoTareasPorHacer.forEach((tarea) => {
            console.log("========= Por Hacer ==========".green);
            console.log(tarea.descripcion.blue);
            console.log("Estado: ", tarea.completado);
            console.log("==============================".green);
        });
    }
};

//actualiza el estado de la tarea
const actualizar = (descripcion, completado = true) => {
    cargarDB();

    //buscar la tarea que coincida con la descripción
    if (listadoTareasPorHacer.length === 0) {
        console.log("No hay ninguna tarea pendiente".yellow);
    } else {
        let index = listadoTareasPorHacer.findIndex(
            (tarea) => tarea.descripcion === descripcion
        );
        //si el indice es -1 significa que no encontro alguna coincidencia
        if (index >= 0) {
            listadoTareasPorHacer[index].completado = completado;
            guardarDB();
            console.log("Tarea actualizada".green);
        } else {
            console.log("No se encontro la tarea por hacer".yellow);
        }
    }
};

//borra la tarea indicada
const borrar = (descripcion) => {
    cargarDB();

    if (listadoTareasPorHacer.length === 0) {
        console.log("No hay ninguna tarea pendiente".yellow);
    } else {
        let index = listadoTareasPorHacer.findIndex(
            (tarea) => tarea.descripcion === descripcion
        );
        if (index >= 0) {
            //si la tarea se encontro el indice es mayor a -1
            let nuevoListado = listadoTareasPorHacer.filter((tarea) => {
                return tarea.descripcion != descripcion;
            });

            if (listadoTareasPorHacer.length === nuevoListado.length) {
                console.log("La tarea no se borro".yellow);
            } else {
                listadoTareasPorHacer = nuevoListado;
                guardarDB();
                console.log("La tarea se borro".green);
            }
        } else {
            console.log("La tarea indicada no se encontró".yellow);
        }
    }
};

//crea una tarea
const crear = (descripcion) => {
    cargarDB();
    //creacion del objeto de tarea
    let tarea = {
        descripcion,
        completado: false,
    };

    //se agrega el objeto a la lista de tareas por hacer
    listadoTareasPorHacer.push(tarea);

    guardarDB();

    return tarea;
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
};