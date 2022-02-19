const router = require('express').Router();

router.get('/movies', getAllMovies);
router.get('/movies/:title', getMovie);
router.get('/movies/favorite', getFavorites);
router.post('/movies/favorite', addFavorites);

module.exports = router;