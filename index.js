const express = require('express');
const routerApi = require('./routes');
const { config } = require('./config/config');
const { errorHandler, boomErrorHandler, logErrors } = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(config.port);
