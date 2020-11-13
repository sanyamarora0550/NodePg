const express = require('express'),
    app = express(),
    service = require('./user_service');

app.use(express.json()); // req.body

app.post('/create', async (req, res) => {
    try {
        service.insertUser(req.body, (data) => {
            res.send(data);
        });
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /create', err);
    }
});

app.get('/get-all-users', async (req, res) => {
    try {
        service.getAllUsers(req.body, (data) => {
            res.send(data);
        });
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /get-all-users', err);
    }
});

app.get('/get-user/:user_id', async (req, res) => {
    try {
        req.body.user_id = req.params.user_id;
        service.getUserById(req.body, (data) => {
            res.send(data);
        });
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /get-user/:id', err);
    }
});

app.listen(3000, () => {
    console.log('Server Started....!!');
});