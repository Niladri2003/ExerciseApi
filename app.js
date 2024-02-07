var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const Exercises=require('./routes/exercises');
const ExerciseName=require('./routes/exercises_name');
const ExerciseById=require('./routes/FindExerciseById');
const ExerciseByTarget=require('./routes/exercise_target');
const  ExerciseByEquimpent=require('./routes/exercise_equipmentname');
const ExerciseByBodyPart=require('./routes/exercise_bodypart');
const AllExercise=require('./routes/TotalExercise');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: '*' }));
app.use('/', indexRouter);
app.use('/exercises',Exercises);
app.use('/exercises/name',ExerciseName);
app.use('/exercises/exercise',ExerciseById);
app.use('/exercises/target',ExerciseByTarget);
app.use('/exercises/equipment',ExerciseByEquimpent);
app.use('/exercises/bodyPart',ExerciseByBodyPart);
app.use('/allexercise',AllExercise);
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
