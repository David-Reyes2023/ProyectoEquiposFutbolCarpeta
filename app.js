const express = require('express');

const equiposRoutes = require('./routes/equipos-routes');

const app = express();

app.use('/api/equipos' ,equiposRoutes);

app.listen(3000);