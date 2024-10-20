const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { RateLimit } =require('../middleware/rateLimit');
const { errorHandler } = require('../middleware/errorMiddleware');
const starwarscontroller = require('../controller/StarwarsController');


// Opret en ny Express-applikation
const app = express();
const port = 3000;

// Middleware til at parse JSON-data fra POST-anmodninger
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(RateLimit)

// Middleware til at logge alle indgående anmodninger
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});


app.get('/starwars',starwarscontroller.getStarwars);
app.get('/starwars-form', starwarscontroller.getStarwarsFrom);
app.post('/starwars', starwarscontroller.addStarwars);


//Error handling
app.use(errorHandler);

// Start serveren og lyt på den definerede port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
