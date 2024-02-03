var express = require('express');
var router = express.Router();
const {back}=require('../Api_Response Data/Exercise_name')
/* GET home page. */
const {ExerciseDb}=require('../Api_Response Data/ExerciseDb');
function filterExercisesByTarget(target) {
    const filteredExercises = ExerciseDb.filter(exercise => exercise.target === target);
    return filteredExercises;
}


router.get('/:target', function(req, res, next) {
    try {
        const target = req.params.target;
        console.log("ID =>", target);

        const result = filterExercisesByTarget(target);

        if (result.length>0) {
            res.status(200).json({
                result
            });
        } else {
            res.status(404).json({
                error: "No data found for the specified Body Part"
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
