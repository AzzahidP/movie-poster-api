const express = require('express');
const cors = require('cors');
const {logger, expressLogger} = require('./middleware/logger');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;
const Router = require('./routes/movies.routes');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors());
app.use(expressLogger);
app.use(Router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})