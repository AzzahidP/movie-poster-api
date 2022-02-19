const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
const Router = require('./routes/movies.routes');

app.use(cors())
app.use(Router)

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`)
})