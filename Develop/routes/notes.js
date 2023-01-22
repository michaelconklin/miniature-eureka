const notes = require('express').Router();
const { json } = require('express');
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
  readFromFile('./db/notes.json')
    .then(JSON)
    .then(jsonText => res.send(jsonText));
});

notes.post('/', (req, res) => {
  const { title, text } = req.body;
  const newData = {
    title,
    text,
  }

  readAndAppend(newData, './db/notes.json');
});

module.exports = notes;
