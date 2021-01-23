let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}


//let nombre = deadpool.nombre
// let apellido = deadpool.apellido
// let poder = deadpool.poder

//Declarar variables con deconstruicción
let { nombre: primerNombre, apellido, poder } = deadpool

console.log(deadpool.getNombre);
console.log(primerNombre, apellido, poder);