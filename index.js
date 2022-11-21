const express = require("express");

// create app
const app = express();

// create route
app.use('*', require('./routers/Error'));
app.use(require('./routers/HelloTest'));

// start server
app.listen(3000);
