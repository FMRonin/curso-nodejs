var nombre = "wolverin" //se puede inisializar muchas veces
let nombrelet = "wolverin" //se puede iniciar solo una vez

if (true) {
    let nombrelet = "magneto" //pertenecese al ambito la variable muere al salir del if
    this.nombrelet = "magneto"
}

console.log(nombre);
console.log(nombrelet);