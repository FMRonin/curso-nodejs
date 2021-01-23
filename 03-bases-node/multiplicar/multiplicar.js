const fs = require('fs');
var colors = require('colors');

let getTabla = async (base, limite) => {

    if(!Number(base) || !Number(limite)) throw `Parametro invalido`
    if(limite <= 1) throw 'El limite debe ser superior a 1'

    let tabla = ''

    for(let i = 1; i <= limite ; i++){
        tabla += `${base} * ${i} = ${base * i}\n`
    }

    return tabla
}

let crearArchivoTabla = async (base,limite) => {
    let data = await getTabla(base,limite)
     fs.writeFile(`tablas/tabla-${base}-primeros-${limite}-numeros.txt`, data, (err) => {
        if (err) throw err
        return `tabla-${base}-primeros-${limite}-numeros.txt`
      });
}

let listarTabla = async (base,limite) => {
    console.log('=========================='.green);
    console.log(`tabla de multiplicar ${base}`.green);
    console.log('=========================='.green);
    let tabla = await getTabla(base,limite)
    console.log(tabla)
}

module.exports = {
    crearArchivoTabla,
    listarTabla
}
