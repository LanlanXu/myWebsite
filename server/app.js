var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

function resolve(dir){
    return path.join(__dirname, dir)
}

app.use(express.static(resolve('../webapp/public')));
app.use(express.static(resolve('../webapp/static')));
app.use(express.static(resolve('../webapp/fonts')));

// app.use('*', function(req, res, next){
//     next();
// });


var UsersModel = require(resolve('model/user'));

app.post('/api/login', jsonParser, function(req, res){
    UsersModel.find({phone: new RegExp(req.body.phone)}, function(err, docs){
        if(!err) {
            if(!docs.length) {
                result.success = false;
                result.msg = '该手机号还未注册';
                res.json(result);
            } else {
                result.data = docs;
                result.msg = '登录成功';
                res.json(result);
            }
            
        }
    });
});

app.post('/api/register', jsonParser, function(req, res){
    UsersModel.find({phone: new RegExp(req.body.phone)}, function(err, docs){
        if(!err) {
            if(!docs.length) {
                var user = new UsersModel({
                    phone: req.body.phone,
                    password: req.body.password
                });
                user.save(function(err, doc){
                    result.msg = '注册成功，请登录';
                    res.json(result);
                });
            } else {
                result.success = false;
                result.msg = '该手机号已注册，请直接登录';
                res.json(result);
            }
            
        }
    });
});




mongoose.connect('mongodb://localhost:27017/test', function(err){
    if(err){
        console.log(err,'数据库连接失败');
    } else {
        console.log('数据库连接成功');
        app.listen(3000);
    }
});