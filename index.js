require('dotenv').config();
const express = require('express');
const http = require('http');
const fs = require('fs');
const mongoose = require('./configs/mongoose');
const defaultLog = require('./middlewares/defaultLog');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(defaultLog.defaultLog);
app.use('/', require('./routes'));

// HTTP setup
const httpPort = process.env.HTTP_PORT || 8000;
const httpServer = http.createServer(app);

httpServer.listen(httpPort, () => {
  console.log(`HTTP Server started on port ${httpPort}`);
});

