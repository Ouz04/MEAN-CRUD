const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Schtroumpf } = require('../models/schtroumpf');

// => localhost:3000/schtroumpf/
router.get('/', (req, res) => {
    Schtroumpf.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Schtroumpf :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Schtroumpf.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Schtroumpf :' + JSON.parse(JSON.stringify(doc))); }
    });
});

router.post('/', (req, res) => {
    var emp=new Schtroumpf({
        age: req.body.age,
        famille: req.body.famille,
        race: req.body.race,
        nourriture: req.body.nourriture,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Schtroumpf Save :' + JSON.parse(JSON.stringify(doc))); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var emp=new Schtroumpf({
            age: req.body.age,
            famille: req.body.famille,
            race: req.body.race,
            nourriture: req.body.nourriture,
        });
    Schtroumpf.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Schtroumpf Update :' + JSON.parse(JSON.stringify(doc))); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Schtroumpf.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Schtroumpf Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});



module.exports = router;
