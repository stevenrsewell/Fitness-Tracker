let mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schema = new mongoose.Schema({
    date: Date,
    exercises: [
      {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
      }
    ]
  
  })

var Workout = mongoose.model("Workout", Workout);
module.exports = Workout;