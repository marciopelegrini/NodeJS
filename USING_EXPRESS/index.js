const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const basePath = path.join(__dirname, 'templates')

//Middlewares
/*const checkAuth = function (req, res, next) {
    req.authStatus = true
    if (req.authStatus) {
        console.log('Está logado, pode continuar')
        next()
    } else {
        console.log('Não está logado')
        next()
    }
}
app.use(checkAuth)
*/

//Ler o body da pagina
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.get('/users/add', (req, res) =>{
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name =req.body.name
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

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})