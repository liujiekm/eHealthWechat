
var Tool = {};


Tool.DataFormatter = function(fmt){
    var currentDate = new Date();
    var o = {         
        "M+" :currentDate.getMonth()+1, //月份         
        "d+" :currentDate.getDate(), //日         
        "h+" :currentDate.getHours()%12 == 0 ? 12 :currentDate.getHours()%12, //小时         
        "H+" :currentDate.getHours(), //小时         
        "m+" :currentDate.getMinutes(), //分         
        "s+" :currentDate.getSeconds(), //秒         
        "q+" : Math.floor((currentDate.getMonth()+3)/3), //季度         
        "S" :currentDate.getMilliseconds() //毫秒         
        };         
        var week = {         
        "0" : "/u65e5",         
        "1" : "/u4e00",         
        "2" : "/u4e8c",         
        "3" : "/u4e09",         
        "4" : "/u56db",         
        "5" : "/u4e94",         
        "6" : "/u516d"        
        };         
        if(/(y+)/.test(fmt)){         
            fmt=fmt.replace(RegExp.$1, (currentDate.getFullYear()+"").substr(4 - RegExp.$1.length));         
        }         
        if(/(E+)/.test(fmt)){         
            fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[currentDate.getDay()+""]);         
        }         
        for(var k in o){         
            if(new RegExp("("+ k +")").test(fmt)){         
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
            }         
        }         
        return fmt;         

}



module.exports = Tool;