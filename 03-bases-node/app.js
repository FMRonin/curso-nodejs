const {crearArchivoTabla, listarTabla} = require('./multiplicar/multiplicar')
const {argv} = require('./config/yargs')
var colors = require('colors');

/* Commandos:
 *  - Listar: muestra en consola la tabla de multiplicar
 *  - Crear: crea archivo con la tabla de multiplicar
 * Variables:
 *  - base: Es la base sobre la que se genera la tabla de multiplicación
 *  - limite: Es el limite de la valores que se generan de la tabla de multiplicar
 */

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite)
            .then(resp => console.log('tabla generada exitosamente'))
            .catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivoTabla(argv.base,argv.limite)
            .then(archivo => console.log(`Se genero archivo con nombre: ${
                colors.green(`tabla-${argv.base}-primeros-${argv.limite}-numeros.txt`)}`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('comando no valido');
        break;
}