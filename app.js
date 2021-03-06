const createError = require('http-errors');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

const indexRouter = require('./routes/index')(compiler);
const usersRouter = require('./routes/users');

// view engine setup
// app.set('views', path.join(__dirname, '.dist/views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }),
);

app.use(webpackHotMiddleware(compiler));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
