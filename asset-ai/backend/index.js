const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
var employeeController = require('./controllers/employeeController.js');

const port = process.env.PORT || 8080;

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log('Server started at port'+port));

mongoose.connect('mongodb+srv://reva:root@assetai.tsczz.mongodb.net/assetai?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/employees', employeeController);



