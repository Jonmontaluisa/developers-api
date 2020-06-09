const express = require('express');
const app = express();
const port = 3000;
const { v4: uuidv4 } = require('uuid');
const utils = require('./utils');
const validation = require('./models/developer.js')

var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

let developers = [];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/developers', (req,res) => {
  return res.send(developers)
});

app.post('/developers', (req,res) => {
  validation.validateDeveloper(req.body)
    .then(validation => {
      let newDeveloper = {id: uuidv4(), ...validation}
      developers.push(newDeveloper);
      res.send(developers);
    })
});

app.put('/developers/:id', (req,res) => {
  developers = utils.updateByUUID(req.params.id, req.body, developers)
  res.send(developers)
});

app.delete('/developers/:id', (req,res) => {
  utils.deleteByUUID(req.params.id, developers);
  res.send(developers)
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
