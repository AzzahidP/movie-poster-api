const pino = require('pino');
const expressPino = require('express-pino-logger');

const logger = pino({
    prettyPrint: true
});
const expressLogger = expressPino({logger});

module.exports = {logger, expressLogger};