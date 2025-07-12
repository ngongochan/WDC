var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true
}));

var count = 1;
app.use(function(req,res, next) {
  console.log(Received ${count} requests);
  count++;
  next();
});

app.post('/tcaccept', function(req, res) {
  req.session.accepted = true;
  res.send('It works');
});

app.get('/users/accepted', function(req, res) {
  if (req.session.accepted) {
    res.send('It works');
  } else {
    res.status(403).send('Forbidden');
  }
});

app.get('/cookie', function(req, res) {
  if (req.cookies.task3_1) {
    let currentValue = parseInt(req.cookies.task3_1, 10);
    res.cookie('task3_1', currentValue + 1);
    res.send();
  } else {
    res.cookie('task3_1', 1);
    res.send();
  }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;