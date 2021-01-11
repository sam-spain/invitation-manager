const Express = require('express');
const Dotenv = require('dotenv');
const Invitees = require('./routes/invitees.js');
const Logger = require('morgan');
const Webpack = require('webpack');
const WebpackConfig = require('../webpack.config');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const Path = require('path');

Dotenv.config({path: './server/config/config.env'});

const app = Express();
const compiler = Webpack(WebpackConfig);

app.use(WebpackDevMiddleware(compiler));

if ( process.env.NODE_ENV === 'development' ) {
  app.use(Logger('dev'));
}

app.use('/api/v1/invitees', Invitees);

app.get('*', (req, res) => {
  res.sendFile(Path.resolve(__dirname, 'public/index.html'));
});

module.exports = app;
