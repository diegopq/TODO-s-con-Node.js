const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripción de la tarea por hacer",
};

const completado = {
    alias: "c",
    default: true,
    desc: "Marca como completado o pendiente la tarea",
    type: "boolean",
};

const argv = require("yargs")
    .command("crear", "Nota: Crea una actividad por hacer", {
        //flags
        descripcion,
    })
    .command("actualizar", "Nota: Actualiza la actividad por hacer", {
        //flags
        descripcion,
        completado,
    })
    .command("borrar", "Nota: Borra la actividad indicada", {
        descripcion,
    })
    .help().argv;

//se exporta el objeto argv
module.exports = {
    argv,
};