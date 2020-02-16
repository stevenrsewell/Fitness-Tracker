const express = require('express');
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
