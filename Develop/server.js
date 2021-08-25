const express = require("express");
const fs = require("fs");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

require('./myapp/app.js')(app);