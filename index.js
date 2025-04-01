var express = require('express');
var hbs = require('hbs');
var app = express();

const exphbs = require('express-handlebars');
const path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//app.engine('hbs', exphbs.engine({ extname: 'hbs' })); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req,res) {
    res.sendFile(__dirname + '\\' + 'index_login.html');
})

app.get('/student-login', function(req,res) {
    res.render('student_home');
})

app.get('/register-form-student', function(req,res) {
    res.render('register');
})

app.get('/login-form-technician', function(req,res) {
    res.render('technician_login');
})

app.get('/technician-home', function(req,res) {
    res.render('technician_home');
})

var server = app.listen(3000, function(){
    console.log("Node server running at port 3000...")
});