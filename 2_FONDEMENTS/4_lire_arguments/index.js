// nom
console.log(process.argv) //Affiche seulement le nom

const args = process.argv.slice(2)
console.log(args)

const nom = args[0].split('=')[1]
console.log(nom)

const age = args[1].split('=')[1]
console.log(age)
console.log("Son nom est ${nom} et son age est ${age} années!")