const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes/index.routes');
const app = express();
const port = 3000;

// Static
app.use(express.static(path.join(__dirname, 'public/css')));
// HTTP Looger
app.use(morgan('combined'));
// HTTP template engine
app.engine('hbs',handlebars.engine({
  extname: '.hbs'
})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

// Route
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})