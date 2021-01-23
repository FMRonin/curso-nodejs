const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const opts = {
    base:{
        demand:true,
        alias:'b'},
    limite:{
        alias:'l',
        default:'10'}
}

const argv= yargs(hideBin(process.argv))
    .command('listar','Imprime en consola la tabla de multiplicar',opts)
    .command('crear', 'Genera archivo con la tabla de multilcar',opts)
    .help()
    .argv

module.exports = {
    argv
}