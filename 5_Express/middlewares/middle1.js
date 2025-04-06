function middleware1(req, res, next) {
    console.log('I am the first middleware.');
    next();
}

module.exports = { middleware1 }