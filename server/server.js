const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express()


// Parse application/json
app.use(bodyParser.json());

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

app.delete('/api/delete/:coaster_id', (req,res) => {

    const {coaster_id} = req.params

    Coaster.findOneAndRemove({ _id: coaster_id })
    .then(removedCoaster => {
        if (removedCoaster) {
            console.log('Objeto eliminado:', removedCoaster);
            res.send(removedCoaster);
        } else {
            console.log('No se encontró ningún objeto con el ID especificado');
        }
    });
});


app.post('/api/addCoaster', (req, res) => {
    const { title, description, length, inversions, imageUrl } = req.body;
  
  
    const newCoaster = new Coaster({
      title,
      description,
      length,
      inversions,
      imageUrl
    });
  
    newCoaster.save()
      .then(savedCoaster => {
        console.log('Nueva montaña rusa guardada:', savedCoaster);
        res.status(200).json(savedCoaster);
      })
      .catch(error => {
        console.log('Error al guardar la montaña rusa:', error);
        res.status(500).json({ error: 'Ocurrió un error al guardar la montaña rusa' });
      });
});
  

app.listen(5005, () => console.log('SERVIDOR LEVANTADO')) 

