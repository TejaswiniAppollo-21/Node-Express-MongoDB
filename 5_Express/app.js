const express = require('express');

const morgan = require('morgan');

const middlewarefunction1 = require('./middlewares/middle1');
const middlewarefunction2 = require('./middlewares/middle2');

const app = express();

// built-in middleware
app.use(express.json());

// custom middlewares
app.use(middlewarefunction1.middleware1);
app.use(middlewarefunction2.middleware2);

// third-party middleware
app.use(morgan()) // This middleware logs the information about the http request

let courses = [
    {
        id: 1,
        name: 'JavaScript'
    },
    {
        id: 2,
        name: 'Python'
    },
    {
        id: 3,
        name: 'Node'
    }
];

// get method
app.get('/', (req, res) => {
    res.send('Welcome to Express JS learning.');
});

app.get('/skills', (req, res) => {
    res.send('Skills section.');
});

app.get('/contact', (req, res) => {
    res.send('Contact section.');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

// route parameters
app.get('/courses/:id', (req, res) => {
    let courseSelected = courses.find((course) => course.id === parseInt(req.params.id));
    
    if(!courseSelected) {
        res.status(404).send('Course not found.');
        return;
    }
    res.send('Course selected is of ID : ' + courseSelected.name);
}); 

// post method
app.post('/course', (req, res) => {
    const course = {
        id : courses.length + 1,
        name : req.body.name
    };
    courses.push(course);
    res.send(course);
});

// put method
app.put('/courses/:id', (req, res) => {
    let courseSelected = courses.find((course) => course.id === parseInt(req.params.id));

    if(!courseSelected) {
        res.status(404).send('Course not found.');
        return;
    };

    courseSelected.name = 'C++';
    res.send(courseSelected);
});

// delete method
app.delete('/courses/:id', (req, res) => {
    courses = courses.filter((course) => course.id != req.params.id);
    res.send('Course deleted successfully.');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App is running in the port ${port}.`));



