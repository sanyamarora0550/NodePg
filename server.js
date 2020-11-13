const express = require('express'),
    app = express(),
    allRoutes = require('./routes'),
    helmet = require('helmet'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');
require('dotenv').config();


app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); // req.body
app.use('/api/v1', allRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server Started On....!!');
});