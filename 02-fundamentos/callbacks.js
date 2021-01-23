// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000)

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'fernando',
        id
    }

    if (id === 20) {
        callback(`el usuario con ${id}, no existe en base de datos`)
    } else {
        callback(null, usuario)
    }

}
getUsuarioById(10, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log('usuario de base de datos', usuario);
})