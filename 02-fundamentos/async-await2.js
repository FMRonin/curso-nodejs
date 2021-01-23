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


let getEmpleado = async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`no existe el empleado con id ${id}`)
    } else {
        return empleadoDB
    }
}

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if(!salarioDB){
        throw new Error(`No se encontro salario asignado al empleado ${empleado.nombre}`)
   }else{
       return {
           nombre: empleado.nombre,
           salario: salarioDB.salario
       }
   }
}

let getSalarioById = async (id) => await getSalario(await getEmpleado(id))

getSalarioById(4).then(response => console.log(response)).catch(err => console.log(err))
