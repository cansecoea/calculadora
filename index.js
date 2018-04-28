'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/:parametro1?/:parametro2?/:parametro3?', function(req, res) {

var parametro1 = "SIN PARAMETRO"
var parametro2 = "SIN PARAMETRO"
var parametro3 = "SIN PARAMETRO"

if(req.params.parametro1) {
    parametro1 = req.params.parametro1
}
if(req.params.parametro2) {
    parametro2 = req.params.parametro2
}
if(req.params.parametro3) {
    parametro3 = req.params.parametro3
}

//Parseamos los strings a float
var operando1 = parseFloat(parametro1)
var operando2 = parseFloat(parametro3)

var operador = parametro2
var resultado = "Resultado: "


if(req.params.parametro1 && req.params.parametro2 && req.params.parametro3)
    switch(operador) {
        case '+':
            resultado += parseFloat(operando1 + operando2)
            break
        case '-':
            resultado += parseFloat(operando1 - operando2)
            break
        case 'x':
            resultado += parseFloat(operando1 * operando2)
            break
        case '/':
            resultado += parseFloat(operando1 / operando2)
            break;
    }

res.status(200).send({
        ejemplo: "Esto es un ejemplo de respuesta",
        arreglo: [{ 'operando1': operando1, 'operador': operador, 'operando2': operando2 }, {'resultado': resultado}],
        resultado: "El " + resultado
    })
});

app.listen(7070, function() {
    console.log('Esto es un ejemplo de una API...')
});