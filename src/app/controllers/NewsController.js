class NewsController {
    // GET /new
    index(req, res) {
        res.render('new');
    }
    show(req, res) {
        res.send('news detail');
    }
}

module.exports = new NewsController();
