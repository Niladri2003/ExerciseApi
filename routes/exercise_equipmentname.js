var express = require('express');
var router = express.Router();
const { back } = require('../Api_Response Data/Exercise_name');
const { ExerciseDb } = require('../Api_Response Data/ExerciseDb');

function filterExercisesByEquipment(equipment) {
    const filteredExercises = ExerciseDb.filter(exercise => exercise.equipment === equipment);
    return filteredExercises;
}

router.get('/:equipment', function(req, res, next) {
    try {
        const equipment = req.params.equipment;
        console.log("equipment =>", equipment);

        const result = filterExercisesByEquipment(equipment);
        console.log(result);

        if (result.length > 0) {
            res.status(200).json({
                result
            });
        } else {
            res.status(404).json({
                error: "No data found for the specified Equipment"
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
