const App = require('./app.js');
const PORT = process.env.PORT || 5000;
const devEnv = process.env.NODE_ENV;
const Dotenv = require('dotenv');
Dotenv.config({path: './server/config/config.env'});

App.listen(
    PORT,
    console.log(`Server running in ${devEnv} mode on port ${PORT}`),
);
