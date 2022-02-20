require('dotenv').config()
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const authHeader = req.header('Authorization')
    if (typeof authHeader !== 'undefined'){
        const authToken = authHeader.split(' ')[1]

        jwt.verify(authToken, `${process.env.SECRET_KEY}`, (err, data) =>{
            if (err) {
                res.status(403).json({message: err.message})
            }
            next()
        })
    }
    else {
        res.status(403).json({
            result: 'FORBIDDEN',
            message: 'Please signup or login'
        })
    }
}


module.exports = authenticate;