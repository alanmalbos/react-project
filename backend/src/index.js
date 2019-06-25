const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://dbUser:chinelo.0311@cluster0-lmuhb.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);

