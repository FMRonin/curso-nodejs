function sumar(a, b) {
    return a + b
}

let sumarFlecha = (a, b) => a + b

function saludar() {
    return 'Hola mundo'
}

let saludarFlecha = () => 'Hola mundo'

// console.log(sumar(3, 5))
// console.log(sumarFlecha(3, 5))

// console.log(saludar())
// console.log(saludarFlecha())

//En funciones de flecha el this hace referencia al objeto fuera de la función de flecha
//generalmente es el objeto "global" para nodejs o "window" para navegadores
//Si se requiere que el this haga referencia al objeto usar una función normal

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}
console.log(deadpool.getNombre());