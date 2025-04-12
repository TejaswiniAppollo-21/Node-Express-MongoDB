const mongoose = require('mongoose');
const joi = require('joi');

const { categorySchema } = require('../SchemasAndModels/category');

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 20 },
    category: { type: categorySchema, required: true }, // Embedding a document inside another document
    instructor: { type: String, required: true, minLength: 5, maxLength: 30 },
    ratings: { type: Number, required: true }
});

const Course = mongoose.model('Course', courseSchema);

function validateData(category) {
    const schema = joi.object({
        name: joi.string().required().min(3).max(20),
        categoryId: joi.string().required(),
        instructor: joi.string().required().min(5).max(30),
        ratings: joi.number().required().min(0)
    }); 
    return schema.validate(category);
}

exports.Course = Course;
exports.validate = validateData;