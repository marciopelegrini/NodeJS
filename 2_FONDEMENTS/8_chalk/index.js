const chalk = require('chalk')

const nota = 5

if (nota >= 7) {
    console.log(chalk.green.bold('Félicitations, vous êtes aprouvé.'))
} else {
    console.log(chalk.bgRed('Vous devez refaire l\'examen.'))
}


