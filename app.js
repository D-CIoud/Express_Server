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

// Con esto inicializamos la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})