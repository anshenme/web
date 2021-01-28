const express = require('express');  //主体
const body = require('body-parser'); //接收普通POST数据
const multer = require('multer');    //接收文件POST数据
const mysql = require('mysql');      //数据库

let db=mysql.createPool({
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
  database:'20180208'
});

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

  let arr=[];
  req.files.forEach(file => {
    arr.push(`('${file.originalname}', '${file.filename}', ${Math.floor(Date.now()/1000)})`);
    //console.log(file);
  });

  let sql=`INSERT INTO image_table (originalname, filename, time) VALUES${arr.join(',')}`;

  //console.log(sql);
  db.query(sql,(err)=>{
    if (err) {
      res.send('数据存储失败');
    }else{
      res.send("ok");
    }
  });
});

server.use('/api2',(req, res)=>{
  //console.log(req.method, req.url);
  //跨域
  if(req.headers['origin']=='null' || req.headers['origin'].startsWith('http://localhost')){
    res.setHeader('Access-Control-Allow-Origin','*');
  }

  res.send("ok");
});


server.use(express.static('./www/'));
