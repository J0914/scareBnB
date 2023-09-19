const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();
// used to log info about req/res
app.use(morgan('dev'));
// middleware for parsing cookies
app.use(cookieParser());
// middlware for parsing json bodies of content-type 'application/json'
app.use(express.json());
// Security Middleware
if (!isProduction) {
  // enable cors only in development (react is being served from a different server in dev)
  app.use(cors());
}
// helmet helps set a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({ 
    policy: "cross-origin" 
  })
);
// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  })
);
// connect app to routes dir
app.use(routes);









module.exports = app;