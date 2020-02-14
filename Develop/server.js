const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

app.get('/api/workouts', function (req, res) {
  res.send('yes')
})

app.post('/api/workouts', function (req, res) {

})

app.put('/api/workouts', function (req, res) {

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
