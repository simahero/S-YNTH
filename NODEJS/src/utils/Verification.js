const jwt = require('jwt-simple');

module.exports = function (req, res, next) {
    const token = req.headers['x-access-token'];
    if(!token) return res.status(401).send('Access denied!');

    try {
        var decoded = jwt.decode(token, process.env.JWT_SECRET);
        req.user = decoded;
        res.header("Access-Control-Allow-Origin", "*");
        next();
    } catch (error){
        res.status(400).send('Invalid token!');
    }
}