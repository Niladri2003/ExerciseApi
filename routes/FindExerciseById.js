var express = require('express');
var router = express.Router();

const { ExerciseDb } = require('../Api_Response Data/ExerciseDb');

function findExerciseById(id) {
    const exercise = ExerciseDb.find(exercise => exercise.id === id);
    return exercise;
}

/* GET home page. */
router.get('/:id', async function(req, res, next) {
    try {
        const ID = req.params.id;
        console.log("ID =>", ID);

        const result = findExerciseById(ID);

        if (result) {
            res.status(200).json({
                result
            });
        } else {
            res.status(404).json({
                error: "Exercise not found"
            });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

module.exports = router;
