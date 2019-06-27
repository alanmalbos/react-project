const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

//mongoose.connect('mongodb+srv://dbUser:chinelo.0311@cluster0-lmuhb.mongodb.net/test?retryWrites=true&w=majority',{
//   useNewUrlParser: true,
//});

mongoose.connect('mongodb://localhost/instaMalbos', {useNewUrlParser: true});
//C:\Program Files\MongoDB\Server\4.0\data\

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

app.listen(3333);

