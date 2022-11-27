const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes/index.routes');
const methodOverride = require('method-override');
const db = require('./config/db/index');

const app = express();
const port = 3000;

var bodyParser = require('body-parser');

// Static
app.use(express.static(path.join(__dirname, 'public/css')));
// HTTP Looger
app.use(morgan('combined'));
// HTTP template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers : {
    sum :(a,b) => a + b,
  }
})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(methodOverride('_method'))


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Connet DB
db.connect();

// Route
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})