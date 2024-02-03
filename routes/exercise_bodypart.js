var express = require('express');
var router = express.Router();
const {back}=require('../Api_Response Data/Exercise_name')
/* GET home page. */
const {ExerciseDb}=require('../Api_Response Data/ExerciseDb');
function filterExercisesByBodyPart(bodyPart) {
    const filteredExercises = ExerciseDb.filter(exercise => exercise.bodyPart === bodyPart);
    return filteredExercises;
}


router.get('/:bodyPartName', function(req, res, next) {
    try {
        const bodyPartName = req.params.bodyPartName;
        console.log("BodyPartName =>", bodyPartName);

        const result = filterExercisesByBodyPart(bodyPartName);

        if (result.length>0) {
            res.status(200).json({
                result
            });
        } else {
            res.status(404).json({
                error: "Exercise not found based on given body part"
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
