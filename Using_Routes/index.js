const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const basePath = path.join(__dirname, 'templates')

const users = require('./users')

//Ler o body da pagina
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//arquivos estáticos
app.use(express.static('public'))

app.use('/users', users)

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)
    res.sendFile(`${basePath}/userForm.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //Leitura da tabela
    console.log(`Em busca do user ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function (req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})