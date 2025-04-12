const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testDatabase')
.then(() => console.log('Connected successfully'))
.catch((error) => console.log('Failed to connect', error));

// creating schema with in-built and custom validator
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 5, maxLength: 15 },
    category: { type: String, required: true, enum: ['DSA', 'Web', 'Mobile', 'Data Science'] },
    tags: { type: Array, validate: {
        validator: function(tags) {
            return tags.length > 1
        }
    } },
    instructor: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now() },
    isPublished: { type: Boolean, required: true },
    ratings: { type: Number, required: function() { return this.isPublished }}
});

// creating model
const Course = mongoose.model('Course', courseSchema);

// creating a document
async function createCourse() {
    const course = new Course({
        name: 'MongoDB',
        category: 'Web',
        tags: ['database', 'mongoDB', 'NoSQL'],
        instructor: 'Mrinal',
        isPublished: true,
        ratings: 4.5
    });
    
    try {
        // await course.validate(); // This will validate but does not create any document in the DB 
        const result = await course.save();
        console.log(result);
    } catch(error) {
        for(field in error.errors) {
            console.log(error.errors[field])
        }
    }
}

createCourse()

// querying a document 
async function getCourse() {
    const course = await Course.find({ instructor: 'Patrik' }).select({ name: 1, publishedDate: 1 });
    console.log('Document queried', course);
}

getCourse()

// querying a document using comparison query operator
async function getCourseBasedOnRatings1() {
    const course = await Course.find({ ratings: {$gte : 4.5 } });
    console.log('Courses of ratings 4.5 and above', course);
}

getCourseBasedOnRatings1()

async function getCourseBasedOnRatings2() {
    const course = await Course.find({ ratings: {$in : [3, 4.5] } });
    console.log('Courses of ratings 3 and 4.5', course);
}

getCourseBasedOnRatings2()

// querying a document using logical query operator
async function getCoursesUsingLogicalOperator() {
    const course = await Course.find({ ratings: {$in : [3, 4.5] } }).and([{ instructor: 'Praneetha' }, { ratings: 3 }]);
    console.log(course);
}

getCoursesUsingLogicalOperator()

// updating a document
async function updateCourse(id) {
    const course = await Course.findById(id);
    course.name = 'C++';
    course.instructor = 'Steve';

    const updatedCourse = await course.save();
    console.log(updatedCourse);
}

updateCourse('67fa0aa5a0acf96e2b12bcbf')

// deleting a document
async function deleteCourse(id) {
    let course = await Course.findByIdAndDelete(id);
    console.log(course);
}

deleteCourse('67fa0aa5a0acf96e2b12bcbf') 