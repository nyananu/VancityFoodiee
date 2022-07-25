var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes');
var recipesRouter = require('./routes/recipes');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV === 'production') {
//setting up static folder
app.use(express.static(path.join(__dirname, "food-app", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "food-app", "build", "index.html"));
});
} else {
    app.use(express.static(path.join(__dirname, 'public')));

}



//app.use('/api', indexRouter);
app.use('/api/recipes', recipesRouter);

module.exports = app;
