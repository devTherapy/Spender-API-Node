const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const express = require('express');
const loggger = require('morgan');
const cookieParser = require('cookie-parser');


//setup app
const app = express();
/*Middlewares */
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
//log errors to the console
app.use(loggger('dev'));
module.exports = app;
