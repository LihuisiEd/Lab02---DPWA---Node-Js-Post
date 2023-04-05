const express = require('express')

const app = express()

const bodyParser = require('body-parser');

const port = 8080

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.use('/', express.static(__dirname + "/public"));

app.get('/respuesta', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'respuesta.html'))
})

app.post('/contacto', (req, res) => {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let email = req.body.email;
    let telefono = req.body.telefono;
    let fecha = req.body.fecha;

    res.send('<h1>Resultado:</h1> <p>Nombre: ' + nombre + '</p>' +
    '<p>Apellido: ' + apellido + '</p>' +
    '<p>Correo electrónico: ' + email + '</p>' +
    '<p>Telefono: ' + telefono + '</p>' + 
    '<p>Fecha de nacimiento: ' + fecha + '</p>');
});


app.listen(port,() => {
    console.log('Aplicacion en linea')
})

const path = require('path')


