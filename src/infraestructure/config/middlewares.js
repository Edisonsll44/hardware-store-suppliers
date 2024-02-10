const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const configureMiddleware = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(morgan('combined'));
  };
  
  module.exports = configureMiddleware;