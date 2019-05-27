require('dotenv').config();
const routes = require('./routes');
const {io} = require('./realtime/io');
const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const bodyParser = require('body-parser');
const db = require('./models/orm');
const sync = require('./models/dbSync');

const app = express();
const http = createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.options('*', cors());
app.use('/', routes);

io(http);
db.init();

// sync();


http.listen(4004, function() {
    console.log('listening on port 4004');
});


