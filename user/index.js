const express = require('express'),
    service = require('./service'),
    router = express.Router();

router.post('/create', async (req, res) => {
    try {
        service.insertUser(req.body, (data) => {
            res.send(data);
        });
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /create', err);
    }
});

router.get('/get-all-users', async (req, res) => {
    try {
        service.getAllUsers(req.body, (data) => {
            res.send(data);
        });
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /get-all-users', err);
    }
});

router.get('/get-user/:user_id', async (req, res) => {
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

router.put('/update-password/:user_id', async (req, res) => {
    try {
        req.body.user_id = req.params.user_id;
        service.updatePassword(req.body, (data) => {
            res.send(data);
        });
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /update-password/:user_id', err);
    }
});

router.delete('/delete-user/:user_id', async (req, res) => {
    try {
        req.body.user_id = req.params.user_id;
        service.deleteUser(req.body, (data) => {
            res.send(data);
        });
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /delete-user/:user_id', err);
    }
});

router.post('/login', async (req, res) => {
    try {
        service.login(req.body, (data) => {
            res.send(data);
        });
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /login', err);
    }
});

module.exports = router;