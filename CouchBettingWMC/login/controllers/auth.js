const { error } = require("jquery");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require("mysql");
const { hasOnlyExpressionInitializer } = require("typescript");
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
})

exports.register = (req, res) => {
    console.log(req.body);
    const { name, email, password, passwordConfirm} = req.body;
    db.query('SELECT email FROM users WHERE email = ?', [email], async(error, results) => {
        if(error){
            console.log(error);
        }
        if(results.length > 0){
            return res.render('register', {
                message: 'The email is already taken'
            });
        } else if(password !== passwordConfirm){
            return res.render('register', {
                message: 'Password do not match'
            });
        } 
        let hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword}, (error, results) => {
            if(error){
                console.log(error);
            }else{
                console.log(results);
                return res.send("User successfully registered!");
            }
        })
    });
}

exports.login = (req, res) => {
    console.log(req.body);
    const { name, password} = req.body;
    db.query('SELECT name FROM users WHERE name = ?', [name], async(error, results) => {
        if(error){
            console.log(error);
        } else if(results.length < 1){
            return res.render('register', {
                message: 'User does not exist'
            });
        } 
    });
    db.query('SELECT password FROM users WHERE password = ?', [password], async(error, results) => {
        if(error){
            console.log(error);
        } else if(res !== password){
            return res.render('register', {
                message: 'Password does not match'
            });
        }
        return res.send("Successfully logged in!");
    });
}