const newRoute = require('./news');
function route(app) {
    app.use('/new', newRoute);

    app.get('/', (req, res) => {
        res.render('home'); // Không cần layout
    });

    app.get('/search', (req, res) => {
        res.render('search');
    });
    app.post('/search', (req, res) => {
        console.log(req.body);
        res.send();
    });
}

module.exports = route;
