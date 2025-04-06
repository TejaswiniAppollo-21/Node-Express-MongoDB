function middleware2(req, res, next) {
    console.log('I am the second middleware.');
    next();
}

module.exports = { middleware2 }