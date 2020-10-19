const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Olá Bernardo Lacerda!');
})

app.listen(3000, function(){
    console.log('Na porta 3000');
});