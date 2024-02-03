var express = require('express');
var router = express.Router();

const exercise=require('../Api_Response Data/Exercise')
const bodypartlist=require('../Api_Response Data/bodypartlist');
const {equipmentList}=require('../Api_Response Data/EquipmentList');
const {TargetList}=require('../Api_Response Data/TargetList');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json({
        exercise
        }

    )
});
router.get('/bodyPartList', function(req, res, next) {
    res.status(200).json({
            bodypartlist
        }

    )
});
router.get('/targetList', function(req, res, next) {
    res.status(200).json({
            TargetList
        }

    )
});
router.get('/equipmentList', function(req, res, next) {
    res.status(200).json({
            equipmentList
        }

    )
});

module.exports = router;
