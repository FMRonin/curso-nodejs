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

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`no existe el empleado con id ${id}`)
        } else {
            //callback(null,empleadoDB)
            resolve(empleadoDB)
        }
    })
}

// rps:{
//     nombre: 'fernando',
//     salario: 1000
// }

// err: no se encontro salario para el empleado Fabian

let getSalario = (empleado) => {
    return new Promise((resolve,reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            reject(`no existe hay salario registrado para el empleado ${empleado.nombre}`)
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            })
        }
    })
}

// getEmpleado(1).then(empleado => {
//     console.log('Empleado DB', empleado);
//     getSalario(empleado).then(salario => {
//         console.log('Salario',salario);
//     },err => console.log(err))
// }, err => console.log(err))

getEmpleado(4).then(empleado => {
    return getSalario(empleado)    
}).then(resp => {
    console.log(resp)
}).catch(err => {
    console.log(err)
})