const express = require('express');

const { Course, validate } = require('../SchemasAndModels/course');
const { Category } = require('../SchemasAndModels/category');

const router = express.Router();

router.get('/', async (req, res) => {
    let courses = await Course.find();
    res.send(courses);
});

router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);
    if(course) {
        res.send(course);
    }else {
        res.status(404).send('The course with the given ID is not found.');
    }
})

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const category = await Category.findById(req.body.categoryId);
    if(!category) return res.status(400).send('Invalid category.');

    const course = new Course({
        name: req.body.name,
        category: {
            _id: category._id,
            name: category.name
        },
        instructor: req.body.instructor,
        ratings: req.body.ratings
    });

    await course.save();

    res.send(course);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const category = await Category.findById(req.body.id);
    if(!category) return res.status(400).send('Invalid category.');

    const course = await Course.findByIdAndUpdate(req.params.categoryId, { 
        name: req.body.name, 
        category: {
            _id: category._id,
            name: category.name
        },
        instructor: req.body.instructor,
        ratings: req.body.ratings 
    }, { new: true });

    if(!course) return res.status(404).send('The course with the given ID is not found.');

    res.send(course);     
});

router.delete('/:id', async (req, res) => {
    const course = await Course.findByIdAndDelete(req.params.id);

    if(!course) return res.status(404).send('The course with the given ID is not found.');
        
    res.send('The course is deleted successfully.');
});

module.exports = router;