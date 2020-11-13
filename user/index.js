const express = require('express'),
    service = require('./service'),
    router = express.Router(),
    { signAccessToken } = require('../auth/jwt-helper'),
    { verifyToken } = require('../auth/jwt-helper');

router.post('/create', async (req, res) => {
    try {
        service.insertUser(req.body, async (data) => {
            if (data.success) {
                let token = await signAccessToken(req.body.user_name);
                res.send({ token });
            }
            else {
                res.send(data);
            }
        });
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /create', err);
    }
});

router.get('/get-all-users', verifyToken, async (req, res) => {
    try {
        service.getAllUsers(req.body, (data) => {
            res.send(data);
        });
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /get-all-users', err);
    }
});

router.get('/get-user/:user_id', verifyToken, async (req, res) => {
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

router.put('/update-password/:user_id', verifyToken, async (req, res) => {
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

router.delete('/delete-user/:user_id', verifyToken, async (req, res) => {
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
        service.login(req.body, async (data) => {
            if (data.success) {
                let token = await signAccessToken(req.body.user_name);
                res.send({ token });
            }
            else {
                res.send(data);
            }
        });
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /login', err);
    }
});

router.post('/create-task/:user_id', verifyToken, async (req, res) => {
    try {
        req.body.user_id = req.params.user_id;
        service.createTask(req.body, (data) => {
            res.send(data);
        })
    } catch (err) {
        res.send({ succes: false });
        console.error('Error in /create-task/:user_id', err);
    }
});

module.exports = router;