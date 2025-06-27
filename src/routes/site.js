const express = require('express');
const route = express.Router();
const siteController = require('../app/controllers/SiteController');


route.get('/', siteController.home);
route.get('/search', siteController.search);

module.exports = route;
