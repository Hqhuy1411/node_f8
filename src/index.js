const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
// HTTP Looger
app.use(morgan('combined'));
// HTTP template engine
app.engine('hbs',handlebars.engine({
  extname: '.hbs'
})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'))


app.get('/hello', (req, res) => {
  res.render('hello')
})
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})