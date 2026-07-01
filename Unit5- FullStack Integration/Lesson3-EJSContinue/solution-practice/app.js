const express = require("express");
const path = require("path");
const routes = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Solution app running at http://localhost:${PORT}`);
});
