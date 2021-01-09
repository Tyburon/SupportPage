const express = require('express');
const routes = require('./routes');

require('../sequelize');

const app = express();

app.use(express.json());
app.use(routes);

app.use(() => {
  if (err instanceof AppError) {
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
