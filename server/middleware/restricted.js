const firebase= require("../initializers/firebase");


module.exports = restrictedMiddleware;

function restrictedMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        firebase.auth().verifyIdToken(token)
            .then(res => {
                next();
            })
            .catch(err => {
                console.error(err);
                res.status(401).json({
                    message: 'Invalid Authorization'
                })
            })
        } else {
            res.status(404).json({
                message: 'No token for authorization provided.'
            })
        }
}