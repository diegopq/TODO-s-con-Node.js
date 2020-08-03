# TODO-s-con-Node.js
aplicación de linea de comandos para TODO's con Node.js

## Crear tarea por hacer
`node app crear --descripcion "Nombre de la tarea"`
`node app crear -d "Nombre de la tarea"`

## Listar tareas guardadas
`node app listar`

## Actualizar el estado de una tarea
Por defecto la bandera --completado (-c) esta en true por lo que se puede omitir si se desea marcar una tarea como completada
`node app actualizar --descripcion "Nombre de la tarea" --completado true`
`node app actualizar -d "Nombre de la tarea" -c true`

## Eliminar tarea
`node app borrar --descripcion "Nombre de la tarea"`
`node app borrar -d "Nombre de la tarea"`
