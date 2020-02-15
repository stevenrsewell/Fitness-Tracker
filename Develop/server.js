const express = require('express');
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.use(express.static('public'))

// app.get('/api/workouts', function (req, res) {
//   res.send('yes')
// })

// app.post('/api/workouts', function (req, res) {

// })

// app.put('/api/workouts', function (req, res) {

// })

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
