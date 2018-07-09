var mongoose = require('mongoose');
var express = require('express');
var swig = require('swig');
var app = express();
// var indexPage = require('web/index.html');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('view cache', false);
app.set('views', './views');



app.get('/', function(req, res) {
    res.render('index', { title: '标题' });
});

mongoose.connect('mongodb://localhost:27017/test',function(err){
    if(!err){

        console.log('test数据库连接成功');

        var server = app.listen(2500, function () {
            var host = server.address().address,
                port = server.address().port;

            console.log('Example app listening at http://%s:%s', host, port);
        });

    }
});


