

var http = require('http');
var express = require('express');
var app = express();
var path = require('path');

var errorHandler = require('errorhandler');

//向服务端请求服务
var request = require('request');

app.set('port',process.env.PORT||3000);


//托管build目录静态文件到虚拟目录static
app.use('/static',express.static(path.join(__dirname,'build')));


//表明提供的是json格式服务
app.use(function(req,res,next){
    res.set({'Content-Type':'text/json','Encodeing':'utf8'});  
    next();
});

//提供权限中间件
// app.use(function(req,res,next){




// });

//设定服务路由 基地址为请求到index.html页面
app.get('/',function(req,res){
    res.sendFile('../../../index.html');
});

registerAPI(app);


if('development'==app.get('dev'))
{
    app.use(errorHandler());
}




var server = http.createServer(app);
server.listen(app.get('port'),function(){

    console.info('Server running on '+app.get('port'));

});



function requestService(url,action)
{
    request.get(url,function(error, response, body){
          if (!error && response.statusCode == 200) {
                return body;
            
          }else{
            console.log('error: '+ response.statusCode)
          }


    })
}


function registerAPI(server)
{
    server.get('/api/',function(req,res){


        res.send('api');
        res.end();


    });

}














