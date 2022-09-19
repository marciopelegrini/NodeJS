const minimist = require("minimist");

//moduke externe
const args = minimist(process.argv.slice(2));

//module interne
const somme = require('./somme').somme

const a = parseInt(args['a'])
const b = parseInt(args['b'])

somme(a, b)