const express = require('express');
const loginRouter = require('./routes/Login.router');
const UserRouter = require('./routes/User.router');
const categoryRouter = require('./routes/Category.router');
const PostRouter = require('./routes/Post.router');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use(loginRouter);
app.use(UserRouter);
app.use(categoryRouter);
app.use(PostRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
