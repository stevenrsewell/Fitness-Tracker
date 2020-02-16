const db = require("../models");

module.exports = function (app) {

    //GET route for getting workouts
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })

    //GET route for a specific workout
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    })

    //GET route for a specific workout by ID
    app.get("/api/workouts/:id", function (req, res) {
        var id = req.params.id;
        db.Workout.findById(id, function (err, dbWorkout) {
        }).catch(err => {
            res.json(err);
        });
    })

    //POST route to add a new workout
    app.post("/api/workouts/", function (req, res) {
        db.Workout.create({ exercise: req.body }).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })

      //PUT route to update a current workout
      app.put("/api/workouts/:id", function (req, res) {
        var query = { _id: req.params.id };
        db.Workout.findOneAndUpdate(query, {
            $push: { exercises: [req.body] }
        }, function (err, dbWorkout) {
            if (err) {
                res.json(err);
            } else {
                res.json(dbWorkout);
            }
        })
    })

}