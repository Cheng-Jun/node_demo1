var express=require('express');
var path=require('path');
var serveStatic = require('serve-static');
//var bodyParser = require('body-parser');
var port=process.env.PORT || 8080;
var app=express();
app.set('views','./views/pages');
app.set('view engine','jade');
app.use(serveStatic('public'));


//app.use(bodyParser.urlencoded());
//app.use(express.static(path.join(__dirname,'public')));


app.listen(port,'192.168.100.85');
console.log('immooc start on port：'+port);

app.get('/',function(req,res){
    res.render('index',{
        title:"首页",
        movies:[
            {
                title:"11111",
                poster:'http://img6.cache.netease.com/auto/2016/7/12/201607122252145d10c.jpg',
                _id:1
            },
            {
                title:"2222",
                poster:'http://img6.cache.netease.com/auto/2016/7/12/201607122252145d10c.jpg',
                _id:2
            },
            {
                title:"333333",
                poster:'http://img6.cache.netease.com/auto/2016/7/12/201607122252145d10c.jpg',
                _id:3
            },
            {
                title:"44444",
                poster:'http://img6.cache.netease.com/auto/2016/7/12/201607122252145d10c.jpg',
                _id:4
            },
            {
                title:"5555",
                poster:'http://img6.cache.netease.com/auto/2016/7/12/201607122252145d10c.jpg',
                _id:5
            }
        ]
    })
});
app.get('/admin/list',function(req,res){
    res.render('list',{
        title:"列表页",
        movies:[
            {
                title:"1111",
                doctor:"程俊",
                country:"中国",
                year:"2014",
                _id:1,
                meta:{
                    createdAt:"2014"
                }
            },
            {
                title:"2222",
                doctor:"程俊",
                country:"中国",
                year:"2015",
                _id:2,
                meta:{
                    createdAt:"2015"
                }
            },
            {
                title:"3333",
                doctor:"程俊",
                country:"中国",
                year:"2016",
                _id:3,
                meta:{
                    createdAt:"2016"
                }
            }
        ]
    })
});
app.get('/movie/:id',function(req,res){
    res.render('detaile',{
        title:"列表详情页",
        data:{
            title:'111111',
            doctor:'程俊',
            language:'国语',
            country:'中国',
            year:'2014',
            poster:"http://img6.cache.netease.com/auto/2016/7/12/201607122252145d10c.jpg",
            summary:'adasdasdasdsadsada123123213'
        }
    })
});
app.get('/admin/updata/:id',function(req,res){
    res.render('admin',{
        title:"后台录入页",
        data:{
            title:'',
            doctor:'',
            language:'',
            country:'',
            year:'',
            summary:'',
            poster:''
        }
    })
});
