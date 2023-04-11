const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();

const app = express();

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// static폴더 연결
// app.use(express.static(path.join(__dirname, 'static')));

// 엔드포인트 설정
app.use('/', require('./routes/index'));
app.use('/tasks', require('./routes/tasks'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`http://localhost:${PORT} ON `));
