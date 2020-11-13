const express = require('express'),
    app = express(),
    allRoutes = require('./routes'),
    helmet = require('helmet'),
    bodyParser = require('body-parser');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); // req.body
app.use('/api/v1', allRoutes);

app.listen(3000, () => {
    console.log('Server Started....!!');
});