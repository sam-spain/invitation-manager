const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: './server/config/config.env'});

const app = express();

const PORT = process.env.PORT || 5000;

const devEnv = process.env.NODE_ENV;
app.listen(
    PORT,
    console.log(`Server running in ${devEnv} mode on port ${PORT}`),
);
