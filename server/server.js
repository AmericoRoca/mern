const express = require('express');
const mongoose = require('mongoose');

const app = express()

//DB connection
mongoose.connect('mongodb://localhost/Garaje')
    .then(() => console.log('CONECTADO A BBDD'))

//Model
const Coaster = require('./models/coaster.model');

//CORS
const cors = require('cors')
app.use(cors())


//Routing
app.get('/api/coaster', (req,res) => {

    Coaster
        .find()
        .then(allCoasters => res.send(allCoasters));
});

app.get('/api/details/:coaster_id', (req,res) => {

    const {coaster_id} = req.params

    Coaster
        .findById(coaster_id)
        .then(coaster => res.send(coaster))
});


app.listen(5005, () => console.log('SERVIDOR LEVANTADO')) 

