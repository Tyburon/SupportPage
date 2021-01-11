const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const Error = require('../../errors/AppError');

require('../sequelize');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(() => {
  if (err instanceof Error) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
