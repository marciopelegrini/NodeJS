const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
})

try {
    sequelize.authenticate()
    console.log('Conectado ao banco')
} catch (error) {
    console.log(`Nao foi possivel connectar : ${error}`)
}

module.exports = sequelize