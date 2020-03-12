var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

//--------------------------------------------------
//test
//simple response
router.post('/one', function(req, res) {
    res.send('Test went through.')
})

// posting new data
router.post('/two', function (req, res) {
    let testData = 'Test data for endpoint two';

    TestModel.create({testdata: testData}).then(dataFromDatabase => {
        res.send('Test two went through.')
    })
});

//create with req.body
router.post('/three', function (req, res) {
    var testData = req.body.testdata;

    TestModel.create({testdata: testData})
    res.send('test three went through');
    console.log('Test three went through')
});

router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel.create({testdata: testData})
    .then(res.send('test four went through'))
});
//--------------------------------------------------

router.get('/', function (req, res) {
    res.send('Hello there! .........General Kenobi!')
});

//passing an object
router.get('/testObj', function(req, res) {
    res.send({user: 'Nathan', email: 'email@email.email'});
});

//passing an array
router.get('/testArr', function(req, res) {
    res.send(['item 1', 'item 2']);
});

//passing an array of objects
router.get('/testArrOfObj', function(req, res) {
    res.send([
        {user: 'Nathan', email: 'email@email.email'},
        {user: 'Nathan', email: 'email@email.email'},
        {user: 'Nathan', email: 'email@email.email'},
        {user: 'Nathan', email: 'email@email.email'}
    ]);
});

module.exports = router;