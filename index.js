//imports
const app = require("express")();
const consign = require("consign");
const db = require("./config/db");
const port = 3000;
const SSE = require("express-sse");

app.sse = new SSE("Conectado");
app.db = db;

consign()
  .then("./config/middlewares.js")
  .then("./repository")
  .then("./api")
  .then("./config/routes.js")
  .into(app);

app.listen(port, () => {
  console.log(`🚀 Server is running on ${port}`);
});
