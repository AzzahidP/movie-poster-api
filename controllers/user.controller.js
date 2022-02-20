// This part is for demo use only

require('dotenv').config();
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const MOCK_USER = {
        user_id: "tommy21",
        name: "Thomas"
    };
    jwt.sign({user: MOCK_USER}, process.env.SECRET_KEY, {expiresIn: '1h'},(err, token) => {
        res.status(200).json({
            token,
        });
    });
}

module.exports = {login}