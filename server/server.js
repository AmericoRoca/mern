const express = require('express');

const app = express()

app.get('/productos', (req,res) => res.send({message: 'Prueba'}));


app.listen(5005, () => console.log('SERVIDOR LEVANTADO')) 