const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD, 
    database:process.env.DATABASE, 
});

connection.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connected to the MySQL database');
});

app.get('/', (req, res) => {
    res.send('This is the Home Page');
    })

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
