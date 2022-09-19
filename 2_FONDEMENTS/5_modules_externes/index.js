const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args);

const nom = args['nom']
const prof = args['prof']

console.log(nom, prof)

//Interpolation des variables
console.log(`Ton nom c'est ${nom} et sa profession est ${prof}.`)