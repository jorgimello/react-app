const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://react-app-user:react-app-password@cluster0-s86zg.mongodb.net/react-db?retryWrites=true', {
    useNewUrlParser: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3333);