var express = require('express');
var router = express.Router();

const {ExerciseDb}=require('../Api_Response Data/ExerciseDb')/* GET home page. */
router.get('/', function(req, res, next) {
    try {
        if(ExerciseDb){
            res.status(200).json({
                ExerciseDb
            })
        }else {
            res.status(404).json({
                error:"No Exercise Found"
            })
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

module.exports = router;
