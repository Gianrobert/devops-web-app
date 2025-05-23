const express = require('express');
const winston = require('winston');
const app = express();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' })
    ]
});

app.use((req, res, next) => {
    logger.info(`Request received: ${req.method} ${req.url}`);
    next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('¡Hola desde la aplicación web!');
});

app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hola, bienvenido a la API' });
});

module.exports = app;
