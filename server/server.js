const Express = require("express");
const Dotenv = require("dotenv");

Dotenv.config({ path: "./server/config/config.env" });

const app = Express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
