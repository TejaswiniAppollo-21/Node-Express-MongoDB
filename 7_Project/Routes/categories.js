const express = require('express');

const { Category, validate } = require('../SchemasAndModels/category');

const router = express.Router();

router.get('/', async (req, res) => {
    let categories = await Category.find();
    res.send(categories);
});

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if(category) {
        res.send(category);
    }else {
        res.status(404).send('The category with the given ID is not found.');
    }
})

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const category = new Category({
        name: req.body.name
    });
    await category.save();

    res.send(category);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const category = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });

    if(!category) return res.status(404).send('The category with the given ID is not found.');

    res.send(category);     
});

router.delete('/:id', async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);

    if(!category) return res.status(404).send('The category with the given ID is not found.');
        
    res.send('The category is deleted successfully.');
});

module.exports = router;