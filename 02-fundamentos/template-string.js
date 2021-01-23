let seudonimo = 'Deadpool'
let nombre = 'Wade Winston'

let nombreConcatenado = seudonimo + ' ' + nombre //concatenación anterior
let nombreTemplate = `${seudonimo} ${nombre}` //concatenación con template
console.log(nombreConcatenado);
console.log(nombreTemplate);
console.log(nombreConcatenado === nombreTemplate);

function getNombre() {
    return `${seudonimo} ${nombre}`
}

console.log(`El nombre de: ${getNombre()}`)