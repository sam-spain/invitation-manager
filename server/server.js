const Express = require('express');
const Dotenv = require('dotenv');
const Invitees = require('./routes/invitees.js');
Dotenv.config({path: './server/config/config.env'});

const app = Express();
app.use('/api/v1/invitees', Invitees);
const PORT = process.env.PORT || 5000;
const devEnv = process.env.NODE_ENV;
app.listen(
    PORT,
    console.log(`Server running in ${devEnv} mode on port ${PORT}`),
);
