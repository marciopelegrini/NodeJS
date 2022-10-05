const inquirer = require('inquirer')

inquirer.prompt([{
        name: 'p1',
        message: 'Quel est la premiere note ? ',
    },
    {
        name: 'p2',
        message: 'Quel est la deuxième note ? ',
    },
]).then((answers) => {
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2

    console.log(`La moyenne est ${media}`)
}).catch((err) => console.log(err))