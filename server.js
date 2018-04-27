const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const controller = require('./controllers/burgers_controller.js');

const PORT = process.env.PORT || 8080;

let app = express();

app.engine("handlebars", exphbs({
  defaultLayout: "main",
  helpers: {
    section: function(name, options) { 
      if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      }
  }
}));

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(controller);

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});