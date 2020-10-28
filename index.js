const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
    res.render('index.ejs', {})
})

app.get('/users', function(req, res){
    res.render('users.ejs', { 
        users: [
            {name: 'User1', email: 'user1@test.com'},
            {name: 'User2', email: 'user2@test.com'}
        ] 
    })
})

app.listen(3000, function(){
    console.log('Na porta 3000');
});