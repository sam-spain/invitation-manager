const App = require('./app.js');
const PORT = process.env.PORT || 5000;
const devEnv = process.env.NODE_ENV;
const Dotenv = require('dotenv');
const Webpack = require('webpack');
const WebpackConfig = require('../webpack.config');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const Path = require('path');
const connectDb = require('./config/db');

Dotenv.config({path: './server/config/config.env'});

connectDb();

const server = App.listen(
  PORT,
  console.log(`Server running in ${devEnv} mode on port ${PORT}`),
);

const compiler = Webpack(WebpackConfig);

App.use(WebpackDevMiddleware(compiler));

App.get('*', (req, res) => {
  res.sendFile(Path.resolve(__dirname, 'public/index.html'));
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
