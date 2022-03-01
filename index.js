const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { config } = require('./config/config');
const { errorHandler, boomErrorHandler, logErrors } = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(config.port, () => console.log(`server listening on port ${config.port}`));
