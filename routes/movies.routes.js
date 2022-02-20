const router = require('express').Router();
const authenticate = require('../middleware/auth');
const { getMovies, getFavorites, addFavorites } = require('../controllers/movies.controller');

router.get('/movies', authenticate, getMovies);
router.get('/movies/favorite', authenticate, getFavorites);
router.post('/movies/favorite', authenticate, addFavorites);

const {login} = require('../controllers/user.controller')

router.post('/login', login);


module.exports = router;