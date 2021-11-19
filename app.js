const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const route = require("./routes/potfolio");

app.use("/", route);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is running on port ${port}`);
});
