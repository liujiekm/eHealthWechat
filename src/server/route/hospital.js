/*
Hospital
医院服务
*/



var express = require('express');
var router=express.Router();



//获取医院科室
router.get('/Hospital/AllDep/:hID',function(req,res){

    res.end(req.params.hID);
    
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



module.exports = router;