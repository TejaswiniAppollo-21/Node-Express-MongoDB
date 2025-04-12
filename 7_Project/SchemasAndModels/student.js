const mongoose = require('mongoose');
const joi = require('joi');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 20 },
    isEnrolled: { type: Boolean, default: false },
    phone: { type: String, required: true, minLength: 10, maxLength: 25 }
});

const Student = mongoose.model('Student', studentSchema);

function validateData(student) {
    const schema = joi.object({
        name: joi.string().required().min(3).max(20),
        isEnrolled: joi.boolean(),
        phone: joi.string().required().min(10).max(25),
    }); 
    return schema.validate(student);
}

exports.Student = Student;
exports.validate = validateData;