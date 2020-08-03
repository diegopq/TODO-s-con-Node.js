const argv = require("./config/yargs").argv;
const colors = require("colors");
const tareas = require("./todos/todos");

//obtenemos el comando por medio de los argumentos introducidos en consola
let comando = argv._[0];

switch (comando) {
    case "crear":
        console.log("Crear tarea por hacer".yellow);
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        console.log("Listar tareas por hacer".yellow);
        tareas.getListado();

        break;
    case "actualizar":
        console.log("Actualizar tarea por hacer: ".yellow, argv.descripcion.yellow);
        tareas.actualizar(argv.descripcion, argv.completado);
        break;
    case "borrar":
        tareas.borrar(argv.descripcion);
        break;
    default:
        console.log("Comando incorrecto".red);
        break;
}