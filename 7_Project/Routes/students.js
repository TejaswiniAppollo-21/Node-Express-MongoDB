const express = require('express');

const { Student, validate } = require('../SchemasAndModels/student');

const router = express.Router();

router.get('/', async (req, res) => {
    let students = await Student.find();
    res.send(students);
});

router.get('/:id', async (req, res) => {
    const student = await Student.findById(req.params.id);
    if(student) {
        res.send(student);
    }else {
        res.status(404).send('The student with the given ID is not found.');
    }
})

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const student = new Student({
        name: req.body.name,
        isEnrolled: req.body.isEnrolled,
        phone: req.body.phone
    });
    await student.save();

    res.send(student);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const student = await Student.findByIdAndUpdate(req.params.id, { 
        name: req.body.name, 
        isEnrolled: req.body.isEnrolled,
        phone: req.body.phone 
    }, { new: true });

    if(!student) return res.status(404).send('The student with the given ID is not found.');

    res.send(student);     
});

router.delete('/:id', async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);

    if(!student) return res.status(404).send('The student with the given ID is not found.');
        
    res.send('The student is deleted successfully.');
});

module.exports = router;