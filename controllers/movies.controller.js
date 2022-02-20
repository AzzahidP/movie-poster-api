require('dotenv').config()
const axios = require('axios');
const {Favorite_Movies} = require('../models')

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

const getFavorites = (req, res) => {

    userId = req.body.user_id

    Favorite_Movies.findAll({
        where: {
            user_id: userId
        }
    })
    .then((movies) => {
        res.status(200).json({
            result: "SUCCESS",
            message: movies
        })
    })
    .catch((err) => {
        res.status(500).json({
            result: "FAILED",
            message: err.message || 'Internal server error'
        })
    });
};

const addFavorites = (req, res) => {

    if (!req.body.title || !req.body.user_id){
        res.status(400).json({
            result: "FAILED",
            message: "Please provide Mvoie Title and User ID"
        });
        return;
    }    

    const newFav = {
        title: req.body.title,
        user_id: req.body.user_id
    }
    Favorite_Movies.create(newFav)
        .then( () => {
            res.status(201).json({
                result: "SUCCESS",
                message: `Added ${req.body.title} as ${req.body.user_id}'s favorite`
            })
        })
        .catch((err) => {
            res.status(500).json({
                result: "FAILED",
                message: err.message || "Internal server error"
            })
        })
}

module.exports = {getAllMovies, getOneMovie, getFavorites, addFavorites}