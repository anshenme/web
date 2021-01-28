const express = require('express');  //主体
const body = require('body-parser'); //接收普通POST数据
const multer = require('multer');    //接收文件POST数据

let server = express();
server.listen(8080);

//中间件
server.use(body.urlencoded({extended:false}));

let multerObj=multer({dest: './upload/'});
server.use(multerObj.any());

//处理请求
server.use('/api',(req, res)=>{
  //console.log(req.method, req.url);
  //跨域
  if(req.headers['origin']=='null' || req.headers['origin'].startsWith('http://localhost')){
    res.setHeader('Access-Control-Allow-Origin','*');
  }

  res.send("ok");
});


server.use(express.static('./www/'));
