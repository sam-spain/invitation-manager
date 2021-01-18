const Express = require('express');
const Dotenv = require('dotenv');
const Invitees = require('./routes/invitees.js');
const Logger = require('morgan');

Dotenv.config({path: './server/config/config.env'});

const app = Express();

if (process.env.NODE_ENV === 'development') {
  app.use(Logger('dev'));
}

app.use('/api/v1/invitees', Invitees);

module.exports = app;
