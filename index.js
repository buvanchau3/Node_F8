const express = require('express');
const router = express.Router();
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const db = require('./src/config/db');

//connect to db 
db.connect();

const app = express();
const PORT = 3000;
const route = require('./src/routes');


app.use(express.static(path.join(__dirname, 'src', 'public')));
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'resources', 'views')); // Cập nhật đường dẫn

app.use(express.urlencoded({ extended: true })); ;
 app.use(express.json());

 
route(app);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

