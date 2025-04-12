const mongoose = require('mongoose');
const joi = require('joi');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 20 }
});

const Category = mongoose.model('Category', categorySchema);

function validateData(category) {
    const schema = joi.object({
        name: joi.string().required().min(3).max(20)
    }); 
    return schema.validate(category);
}

exports.categorySchema = categorySchema;
exports.Category = Category;
exports.validate = validateData;