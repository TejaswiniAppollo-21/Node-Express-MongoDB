const express = require('express');
const mongoose = require('mongoose');

const categories = require('./Routes/categories');
const students = require('./Routes/students');
const courses = require('./Routes/courses');

const app = express();

mongoose.connect('mongodb://localhost/learningPlatform')
.then(() => console.log('Database connection is successful.'))
.catch((error) => console.log('Database conncetion is failed.', error));

app.use(express.json());
app.use('/api/categories', categories);
app.use('/api/students', students);
app.use('/api/courses', courses);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express App is running in the port ${port}.`));