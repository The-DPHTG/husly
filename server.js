const express = require("express")
const path = require('path')
var bodyParser = require('body-parser')

const app = express();

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render(path.join(__dirname, './public/views/index.ejs'));
});

app.get("/search", (req, res) => {
  res.render(path.join(__dirname, './public/views/search.ejs'), {
    location: req.query.location
  });
});

app.listen(8080, () => {
  console.log('Listening on port ' + 8080);
});