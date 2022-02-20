require('dotenv').config()
const axios = require('axios');
const {Favorite_Movies, User} = require('../models')


const getMovies = async (req, res) => {
    if (!req.query.title){
        res.status(403).json({
            result: "FORBIDDEN",
            message: "This page is forbidden"
        });
        return;
    }

    const title = req.query.title
    DUMMY_SESSION_ID = Math.random().toString(21).slice(2)

    axios.get(`http://omdbapi.com/?apikey=${process.env.API_KEY}&t=${title}`)
        .then(result => {
            res.cookie('session_id', DUMMY_SESSION_ID)
            res.status(200).json({
                title: title,
                poster: result.data.Poster
            })
        })
        .catch(err => {
            res.status(500).json({
              result: "FAILED",
              message: err.message || "Internal Server Error"
            });
          });
}

const getFavorites =(req, res) => {

    User.findOne({where: {user_id: req.body.user_id}})
        .then((user) => {
            if (user === null){
                return res.status(400).json({
                    result: "FAILED",
                    message: "Please provide valid User ID"
                });
            }
        })

            Favorite_Movies.findAll({
                where: {
                    user_id: req.body.user_id
                }
            })
            .then(async (movies) => {
                const promises = movies.map(async (item) => {
                    const result = await axios.get(`http://omdbapi.com/?apikey=${process.env.API_KEY}&t=${item.title}`)
                    return {
                        title: item.title,
                        poster: result.data.Poster
                    }
                })
                const favorites = await Promise.all(promises)
                DUMMY_SESSION_ID = Math.random().toString(21).slice(2)
                res.cookie('session_id', DUMMY_SESSION_ID)
                res.status(200).json({
                    result: "SUCCESS",
                    message: favorites
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
            message: "Please provide Movie Title and User ID"
        });
        return;
    }    

    User.findOne({where: {user_id: req.body.user_id}})
        .then((user) => {
            if (user === null){
                return res.status(400).json({
                    result: "FAILED",
                    message: "Please provide valid User ID"
                });
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
        })
        .catch((err) => {
            res.status(500).json({
                result: "FAILED",
                message: err.message || "Internal server error"
            })
        })

}

module.exports = {getMovies, getFavorites, addFavorites}