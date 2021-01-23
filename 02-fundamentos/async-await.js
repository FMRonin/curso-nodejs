/** 
 * Async - Await 
 * */

 let getAsyncErr = async () => {
     throw new Error('Error controlado')
 }

 let getNombre = () => {
    return new Promise((resolve,reject) =>{
        setTimeout( () => {
            resolve('Fernando')
        }, 3000)
    }) 
 }
 
 getNombre().then(nombre => console.log(nombre))

 let getSaludo = async () => {
     let nombre = await getNombre()
     return `Hola ${nombre}`; 
 }

 getSaludo().then(saludo => console.log(saludo))

 getAsyncErr().then(response => console.log(response)).catch(e => console.log(e))
