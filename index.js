const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const User = require('./model/user');

const app = express();

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
    User.find({}).exec(function(err, docs){
        res.render('index.ejs', { User: docs })
    })
})

app.post('/', function(req, res){
    User.find({ name: new RegExp(req.body.txtSearch, 'gi') }).exec(function(err, docs){
        res.render('index.ejs', { User: docs })
    })
})

app.get('/add', function(req,res){
    res.render('add.ejs', {})
})

app.post('/add', function(req,res){
    var user = new User({
        name: req.body.txtName,
        email: req.body.txtEmail,
        password: req.body.txtPassword,
        avatar: req.body.txtAvatar
    })
    user.save(function(err){
        if(err){
            console.log(err)
        }else {
            res.redirect('/');
        }
    })
})

app.get('/delete/:id', function(req, res){
    User.findByIdAndDelete(req.params.id, function(err){
        if(err) {
            console.log(err)
        }else {
            res.redirect('/')
        }
    })
})

app.get('/edit/:id', function(req, res){
    User.findById(req.params.id, function(err, docs){
        if (err){
            console.log(err)
        } else {
            res.render('edit.ejs', { User: docs })
        }
    })
})

app.post('/edit/:id', function(req, res){
    User.findByIdAndUpdate(req.params.id, {
        name: req.body.txtName,
        email: req.body.txtEmail,
        password: req.body.txtPassword,
        avatar: req.body.txtAvatar
    }, function(err, docs){
        res.redirect('/')
    })
})

app.listen(3000, function(){
    console.log('Na porta 3000');
});