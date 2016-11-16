/*
Hospital
医院服务
*/
var express = require('express');
var router=express.Router();
var _ = require('lodash');
var Global = require('../../Global');
var request = require('request');
var tool = require('../../tool/index');



//获取医院科室
router.get('/AllDep/:hID',function(req,res){

    requestService(Global.baseUrl+'Hospital/AllDep/'+req.params.hID,function(body){

        res.json(body.body);

    });
    
    
    
});


var option = {
    url: '',
    headers: {
    'appid': 'WebApiTestPage',
    'timestamp':'',
    'expiredstamp':'300',
    'token':'c18e6d5ff96f1d5b414ef0f5f41be'
  }
}

function requestService(url,cb)
{
    option.url=url;
    var date = new Date();      
    var timestamp = tool.DataFormatter("yyyyMMddhhmmss");
    option.headers.timestamp = timestamp;

    request.get(option,function(response, body){
          cb(body);
    })
    .on('error', function(err) {
        console.log(err)
    })
}

    

module.exports = router;