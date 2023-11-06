const express = require('express');
const loginRouter = require('./routes/Login.router');
const UserRouter = require('./routes/User.router');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(loginRouter);
app.use(UserRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
