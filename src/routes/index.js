const newRoute = require('./news');
const siteRoute = require('./site');
function route(app) {
    app.use('/new', newRoute);
    app.use('/', siteRoute);
}

module.exports = route;
