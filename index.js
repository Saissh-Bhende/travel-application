const express = require('express');
const app = express();
const router = require('./routes')
const logger = require('./utils/logger');

//built-in middleware
// Parse incoming request with JSON payloads and is based on body-parser package
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 
// Parse incoming request with the urlencoded payloads and is also based on body parser package, after implementing this, we can access payload from the request object using req.body property


//Utils logger.js file
app.use((req, res, next) => 
{
    req.logger = Object.freeze(logger);
    next();
})


app.use('/api', router);

//Error middleware
app.use((err, req, res, next) => 
{
    res
    .status(500)
    .json({ message: 'Internal server error' });
})

//Start listening on that application to port 3000
//Object 2 (port)
const port = 3000;
app.listen(port, () => {
    console.log(`Travel application listening on port ${port}`);
});