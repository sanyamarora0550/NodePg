const JWT = require('jsonwebtoken');
const mySecret = "some super secret";
async function signAccessToken(user_name) {
    return new Promise((resolve, reject) => {
        const payload = {};
        const secret = mySecret;
        const option = {
            expiresIn: "1h",
            issuer: "Sanyam Arora",
            audience: user_name
        };
        JWT.sign(payload, secret, option, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    })
}

async function verifyToken(req, res, next) {
    if (!req.headers.token) {
        res.sendStatus(401);
        return next(new Error("Unauthorised"));
    }
    const token = req.headers.token;
    JWT.verify(token, mySecret, (err, payload) => {
        if (err) {
            res.send(401);
            return next(new Error("Unauthorised"));
        }
        req.payload = payload;
        next();
    })
}

module.exports = {
    signAccessToken,
    verifyToken
}