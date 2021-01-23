let empleados = [{
    id: 1,
    nombre: 'Fernando'
},{
    id:2,
    nombre:'Melissa'
},{
    id:3,
    nombre:'Juan'
}]

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}]


let getEmpleado = (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`no existe el empleado con id ${id}`)
    } else {
        //callback(null,empleadoDB)
        callback(null,empleadoDB)//Ojo: Se puede llamar multiples veces el callback
    }
}

// rps:{
//     nombre: 'fernando',
//     salario: 1000
// }

// err: no se encontro salario para el empleado Fabian


let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if(!salarioDB){
        callback(`no se encontro salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null,{
            nombre:empleado.nombre,
            salario:salarioDB.salario
        })
    }
}

getEmpleado(4, (err, empleado) =>{
    if (err) {
        return console.log(err);
    } 
    
    getSalario(empleado, (err,salario) =>{
        if (err) {
            return console.log(err);
        }
        console.log(salario);
    })
})

 