//Usando Objeto Express
const express = require('express')

//App de Express
const app = express()

//Puerto en que vamos a ver la app localhost:3000
const port = 3000


//Path inicial, respondera a la Url localhost: 3000
app.get('/',(req, res) => {
    res.send('Hola Mundo :)!')
})

//Respondiendo texto - localhost:3000/launchx
app.get('/launchx',(req, res) => {
    res.send('Bienvenidos a LaunchX :)!')
})

//Respondiendo con un objeto - localhost:3000/explorersInNode
app.get('/explorersInNode',(req, res) => {
    const explorer = {name: 'Jona', msg: 'Holiwis'}
    res.send(explorer)
})

//Recibir parametros Query Params /explorers/:explorerName
app.get('/explorers/:explorerName',(req, res) => {
    res.send(req.params)
})

// Con esto inicializamos la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})