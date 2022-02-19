require('dotenv').config()
const axios = require('axios');

const getAllMovies = (req, res) => {
    try {
        res.status(403).json({
            result: "FORBIDDEN",
            message: "This page is forbidden"
        })
    }
    catch(err) {
        res.status(500).json({
            result: "FAILED",
            message: err.message || "Internal server error"
        })
    }
}

const getOneMovie = async (req, res) => {
    const title = req.params.title

    axios.get(`http://omdbapi.com/?apikey=${process.env.API_KEY}&t=${title}`)
        .then(result => {
            res.status(200).json({
                result: "SUCCESS",
                message: result.data.Poster
            })
        })
        .catch(err => {
            res.status(500).json({
              result: "FAILED",
              message: err.message || "Internal Server Error"
            });
          });
}

module.exports = {getAllMovies, getOneMovie}