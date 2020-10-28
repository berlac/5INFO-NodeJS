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
    res.send('Olá Bernardo Lacerda!!');
})

app.listen(3000, function(){
    console.log('Na porta 3000');
});