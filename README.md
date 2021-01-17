# web
web前端学习代码，讲师blue

#### 介绍

前端学习笔记/代码

#### ES6语法

alert() 弹出 console() 控制台

##### 1、变量/赋值

| 变量  |                                            |
|-------|--------------------------------------------|
| var   | 可以重复定义，不能限制修改，没有块级作用域 |
| let   | 不能重复定义、变量，块级作用域             |
| const | 不能重复定义、常量，块级作用域             |

```html
<script>
  window.onload=function(){
    let aBtn = document.getElementsByTagName('input');

    for (let i = 0; i < aBtn.length++; i++) {
      aBtn[i].onclick = function(){
        alert(i);
      };
    }
  };
</script>
```

结构赋值： 左右两边必须一样，必须定义和赋值同时完成。

```html
let [a,b,c] = [12,8,3];
let {a,b,c} = {a:12, b:88, c:95};
```

粒度：

```html
let [a,b,c]                 = [12,{a:{n1:5, n2:8}, b:12, c:88}, 55];
let [n1,{a,b,c},n2]         = [12,{a:{n1:5, n2:8}, b:12, c:88}, 55];
let [m1,{a:{n1,n2},b,c},m2] = [12,{a:{n1:5, n2:8}, b:12, c:88}, 55];

console.log(m1,n1,n2,b,c,m2);
```

##### 2、函数

箭头函数：

function(参数,参数){ 函数体 }

(参数,参数)=>{函数体}

```html
let show = function(a){
  return a*3
};

let show = a=>a*3;

alert(show(13));
```

如果有且仅有1个参数，()可以省略  
如果函数体只有1句话，而且是return，{}和return也可以省略。

默认参数  
(a=xx, b=xx, c=xx)

函数展开

```html
function show(a, b, ...args){
  console.log(a,b,args);
}
show(1,2,3,4,5,6,7,8,9);
```

"三个点"用途： 接收剩余参数；展开一个数组

##### 3、数组/json

| 数组    |                                   |
|---------|-----------------------------------|
| map     | 映射，一一对应，进多少->出多少    |
| filter  | 过滤、筛选，一堆->不一定多少      |
| foreach | 遍历、循环，不作任何操作          |
| reduce  | 汇总，减少，和map相反。一堆->一个 |
| from    | ？                                |

| JSON     |                          |
|----------|--------------------------|
| 简写     | 名字和值一样的，可以省略 |
| function | 可以不写                 |

映射：

```html
<script>
  let arr=[12,61,43,77,60,90];
  let arr2 = arr.map(function(item){
    if (item>=60) {
    return true;
    }else {
    return false;
    }
  })
  alert(arr2);
</script>

//简写1
<script>
  let arr=[12,61,43,77,60,90];
  let arr2 = arr.map(item=>{
    return item>=60;
  });
  alert(arr2);
</script>

//简写2
<script>
  let arr=[12,61,43,77,60,90];
  let arr2 = arr.map(item=>item>=60);
  alert(arr2);
</script>
```

过滤： 数组中的偶数求和

```html
<script>
  let arr=[12,61,43,77,60,90];
  let arr2 = arr.filter(item=>item%2 == 0);
  let sum = 0;
  arr2.forEach(item => {
    sum+=item;
  });

  alert(sum);
</script>
```

汇总，求平均值：

```html
<script>
  let arr = [12,5,88,37,21,91,17,24];
  let ave = arr.reduce((tmp,item,index)=>{
    if (index<arr.length-1) {
      return tmp+item;
    }else { //最后一次迭代
      return (tmp+item)/arr.length;
    }
  });
  console.log(ave);
</script>
```

Array.from([array-like])=>[x,x,x]

```html
<style media="screen">
  div {width: 200px; height: 200px; background: #CCC; float: left; margin: 10px;}
</style>

<script>
  window.onload=function(){
    let aDiv=document.getElementsByTagName('div');
    Array.from(aDiv).forEach(div=>{
      div.style.background='yellow';
    });
  };
</script>
```

JSON

```html
<script>
  /*原始写法
  let json = {
    a:12,
    b:5,
    show: function(){
      alert(this.a+this.b);
    }
  };
  */

  let json = {
    a:12,
    b:5,
    show(){
      alert(this.a+this.b);
    }
  };
  //调用show
  json.show();
</script>
```

##### 4、字符串

·、字符串模板  
植入变量，允许任意折行  
字符串联结，大量的渲染前端html模板页面很方便。

```html
<script>
  let json = {name: 'anzhe', age: 18};
  //alert('我叫' + json.name + '我今年' + json.age + '岁了！');
  alert(`我叫${json.name}
    //反单引号括起来的内容就是字符串模板
我今年${json.age}岁了！`);
</script>
```

| startsWith | endsWith |  
| ---------- | -------- |  
| 是否以xx开头| 是否以xx结尾 |

```html
<script>
  let tels = ['13891359','1300','1582','1386'];
  let a = tels.map(item=>{
    if (item.startsWith('138')) {
      alert('中国移动');
    } else {
      alert('中国联通');
    }
  })
</script>
```

##### 5、面向对象

bind：给函数定死一个this  
箭头函数：根据所在的环境，我的环境是谁this就是谁。恒定的  
普通函数：根据调用我的人，谁调用我this就是谁。老变化

```html
<script>

function show(){
  alert(`this是：${this}`);
}
document.onclick = show.bind('anzhe');

</script>
```

传统的JS写法：

```html
<script>
//传统的JS对象是用函数实现的
function Person(name, age){
  this.name = name;
  this.age = age;
}

//下面是person的两个方法
Person.prototype.showName = function(){
  alert('我叫' + this.name);
};
Person.prototype.showAge = function(){
  alert('我今年' + this.age + '岁了！');
};

//传统JS的继承
function Worker(name, age, job){
  Person.call(this,name,age);
  this.job = job;
}
Worker.prototype = new Person();
Worker.prototype.constructor = Worker;
Worker.prototype.showJob = function(){
  alert('我是做' + this.job);
};

let w = new Worker('blue', '17', '医生');
w.showName();
w.showAge();
w.showJob();
</script>
```

ES6的JS写法：

```html
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  showName(){
    alert('我叫' + this.name);
  }

  showAge(){
    alert('我今年' + this.age + '岁了！');
  }
}

class Worker extends Person {
  constructor(name, age, job) {
    //super 超类、父类
    super(name, age);
    this.job = job;
  }
  showJob(){
    alert('我是做' + this.job + '的！');
  }
}

let w = new Worker('blue', '17', '跑龙套');
w.showName();
w.showAge();
w.showJob();
```

```js
/*
旧写法
let p = new Person('blue', 17);
document.onclick = function(){
  p.showName();
};
*/
let p = new Person('blue', 17);
document.onclick = p.showName.bind(p);

```

##### 6、promise

解决异步操作：异步同步化、串行起来大量的异步操作。  
同步操作：串行 简单、方便  
异步操作：并发、性能高、体验好不需要等待。

####jQuery 语法 jQuery  
语法是通过选取 HTML 元素，并对选取的元素执行某些操作。  
基础语法： $(selector).action()  
美元符号定义 jQuery  
选择符（selector）"查询"和"查找" HTML 元素  
jQuery 的 action() 执行对元素的操作  
实例:  
$(this).hide() - 隐藏当前元素  
$("p").hide() - 隐藏所有 <p> 元素  
$("p.test").hide() - 隐藏所有 class="test" 的 <p> 元素  
$("#test").hide() - 隐藏 id="test" 的元素

1、异步传统写法(一层套一层很恶心)：

```html
$.ajax({
  url:'/banner_data',
  success(banners){
    $.ajax({
      url:'/uesr_data',
      success(users){
        $.ajax({
          url:'/item_data',
          success(items){
            $.ajax({
              url:'/new_data',
              success(news){

              },
              error(){
                alert('获取失败'):
              }
            });
          },
          error(){
            alert('获取失败'):
          }
        });
      },
      error(){
        alert('获取失败'):
      }
    });
  },
  error(){
    alert('获取失败'):
  }
});
```

2、同步写法：

```html
let banners = $.ajax({url:'/banners_data'});
let items = $.ajax({url:'/item_data'});
let user = $.ajax({url:'/uses_data'});
let news = $.ajax({url:'/news_data'});
```

3、使用promise用同步的方式去写异步

```html
<script src="jquery.js" charset="utf-8"></script>
<script>
let p = new Promise((resolve, reject)=>{
    //resolve   解决，成功
    //reject    拒绝，失败
  $.ajax({
      url: '1.txt',
      dataType: 'json',
      success(json){
        resolve(json);
      },
      error(err){
        reject(err);
      }
    });
  });

let p2 = new Promise((resolve, reject)=>{
    $.ajax({
        url: '2.txt',
        dataType: 'json',
        success(json){
          resolve(json);
        },
        error(err){
          reject(err);
        }
      });
    });

let p3 = new Promise((resolve, reject)=>{
      $.ajax({
          url: '3.txt',
          dataType: 'json',
          success(json){
            resolve(json);
          },
          error(err){
            reject(err);
          }
        });
      });

Promise.all([p,p2,p3]).then(arr=>{
  let [j1, j2, j3] = arr;
  alert('成功');
  console.log(j1, j2, j3);
}, err=>{
  alert('失败');
});
</script>
```

简化写法：

```html
<script src="jquery.js" charset="utf-8"></script>
<script>
Promise.all([
  $.ajax({url: '1.txt',dataType: 'json'}),
  $.ajax({url: '2.txt',dataType: 'json'}),
  $.ajax({url: '3.txt',dataType: 'json'}),
]).then(arr=>{
    let [a,b,c] = arr;
    console.log(a,b,c);
  },err=>{
    alert('失败');
    });
</script>
```

#### 回调

回调 <-> 轮询 不是定义的人调用，交给谁谁调用 什么时间调用不知道，也不关心

Promise用于解除异步操作有用，但是也有局限性，不适合处理带有逻辑的异步操作。

Promise.all(); 与，所有的都成功。  
Promise.race(); 或，只要有一个完成。

##### 7、generator

升级版promise，生成器函数。能暂停，把一个函数拆分成若干小块儿，分多次执行。

```html
<script>
  function *show() {
    alert('aaa');

    let a = yield;

    alert('bbb' + a);
  }

  let gen = show();

  gen.next();

  setTimeout(function () {
    gen.next(12);
  }, 5000);
</script>
```

yield 暂停:  
1.参数： function(a,b,c) 可以传一个参数  
2.返回： return 返回值

generator+promise配合使用的问题：
1.需要外来的runner.js框架辅助执行，不同意、不标准、性能低、维护性差。  
2.generator函数不能写成=>函数  
3.过渡，已被async/await替代  


##### 8、async/await

async function xxx(){
  ...同步操作
  ...同步操作
  ...同步操作
  let res结果 = await xxx异步操作，可以是generator、promise、另一个async函数;
  ...同步操作
  let res结果 = await xxx异步操作，可以是generator、promise、另一个async函数;
  ...同步操作
}

```html
<script>
  function sleep(sec) {
    return new Promise((resolve,reject)=>{
      setTimeout(function () {
        resolve();
      },sec*1000);
    })
  }

  async function show() {
    alert('a');
      await sleep(1);
    alert('b');
      await sleep(2);
    alert('c');
  }

  show();
</script>
```

匿名函数：
```html
<script>
  function sleep(sec) {
    return new Promise((resolve,reject)=>{
      setTimeout(function () {
        resolve();
      },sec*1000);
    })
  }
  //匿名函数直接执行也可以
  (async ()=>{
    alert('a');
      await sleep(1);
    alert('b');
      await sleep(2);
    alert('c');
  })();
</script>
```

增加逻辑判断的异步操作：
```html
<script>
  function sleep(sec) {
    return new Promise((resolve,reject)=>{
      setTimeout(function () {
        resolve();
      },sec*1000);
    })
  }
  //匿名函数直接执行也可以
  (async ()=>{
    let data1 = await $.ajax({url: '1.txt', dataType: 'json'});

    if (data1.a + data1.b < 10) {
      let data2 = await $.ajax({url: '2.txt', dataType: 'json'});
        alert(data2[0]);
        await sleep(1);
    } else {
      let data3 = await $.ajax({url: '3.txt', dataType: 'json'});
        alert(data3.name);
        await sleep(2);
    }
  })();
</script>
```

await错误处理：
使用try/catch
```html
<script src="jquery.js" charset="utf-8"></script>
<script>
async function show() {
  try {
    let data1 = await $.ajax({url: '1.txt', dataType: 'json'});
    let data2 = await $.ajax({url: '22.txt', dataType: 'json'});
    let data3 = await $.ajax({url: '3.txt', dataType: 'json'});
    console.log(data1, data2, data3);
  } catch (e) {
    alert('出错了');
    //抛出异常
    throw new Error('完犊子了……');
  }
}
show();
</script>
```

##### 9、模块化

##### 10、打包、编译

babel是一种polyfill添补工具  
可以把ES5->ES6编译  
一个语言变成另一种语言。  
打包工具还有browserify、webpack，打压缩包后，可以减少HTTP请求。  

cnpm包管理器：  

init 初始化工程文件  
-g 全局安装，整个系统可以用  
-D 开发环境依赖(--save-dev)
-S 生产环境依赖(--save)

##### babel安装过程（mac&win）：  
1、安装node 版本9.4
https://nodejs.org/dist/  
2、安装cnpm淘宝镜像源
$ npm install -g cnpm --registry=https://registry.npm.taobao.org  
3、切换源地址   
淘宝镜像地址：npm config set registry https://registry.npm.taobao.org  
 npm官网地址：npm config set registry https://registry.npmjs.org  
4、新建babel文件夹，babel安装流程:

第一步：初始化项目，生成package.json文件
cnpm init  

第二步：安装@babel/core @babel/cli
cnpm install --save-dev @babel/core @babel/cli  

第三步：在package.json添加以下内容
```
{
  "devDependencies": {
+   "@babel/cli": "^7.0.0",
+   "@babel/core": "^7.0.0"
  }
}
```

```
{
  "name": "my-project",
  "version": "1.0.0",
+   "scripts": {
+     "build": "babel src -d lib"
+   },
  "devDependencies": {
    "@babel/cli": "^7.0.0"
  }
}
```

第四步：新建.babelrc文件添加以下内容
```
{
  "presets": ["@babel/preset-env"]
}
```

第五步：这里删除了test，否则会失败，不知道为什么  
```
"test": "echo \"Error: no test specified\" && exit 1"
```

第六步：安装@babel/preset-env  
cnpm install @babel/preset-env --save-dev  

完成babel安装：之后，就可以愉快的build了
npm run build


### 数据交互

数据提交安全性：系统安全性和代码安全性（别犯懒、蠢）

域：域名、端口和协议组成  

http协议（RFC）：  
1、http 1.0一次性连接、1.1保持连接，提升性能、2.0草案  
2、https（security）安全的，需要申请身份证书  

原生JS，学会自己写库和插件

三次握手：  

HTTP消息：
客户端请求服务器 repust  
服务器响应返回客户端 response  
headers 头<=32k GET  
body 体（内容）<=1G POST


OSI七层交换“参考”模型，实际使用五层模型  
物理层 物理学家、通信工程——材料、电压  
链路层 内网寻址 ARP、ICMP  
网络层 外网寻址 IP  
传输层 通信稳定性 TCP传输控制协议，丢失重传保证到达、错误重发保证质量、保证顺序  
表现层 x 统一各个网络结构  
会话层 x 记录状态  
应用层 应用细节 HTTP、FTP、SMTP、POP3  

UDP用户数据报协议，与TCP相反，适合对质量没有绝对要求，对延迟有很高要求，例如：ip电话和视频直播。  

1、表单  
最基本，也是最简单的方式。 http数据请求其实都是表单，对服务器来说区分不出来到底是form表单还是ajax还是jsonp   

属性：  
action 提交到哪里  
methop 提交方式
name 必须加，可以重复
submit 提交按钮    

数据提交方式：  
GET 数据放在url里，容量有限，表单看得见，有缓存；利于分享、收藏  
POST 数组放在http-body里，容量很大，看不见，不缓存；做不到
安全性两种完全一样，另外还有HEADER、DELETE、自定义的方式

数据校验：

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>学海无涯苦作舟</title>
    <script src="jquery.js" charset="utf-8"></script>
    <script>
      const $ = document.querySelectorAll.bind(document);
      window.onload = function () {
        let oForm = $('#form1')[0];
        let oUser = document.getElementsByName('user')[0];

        oForm.onsubmit = function () {
          if (oUser.value == '') {
            alert('不能为空');
            return false;
          }
        };
      };
    </script>
  </head>
  <body>
    <form action="http://localhost/a.php" method="post" id="form1">
      用户名 <input type="text" name="user" value=""><br>
      密码 <input type="password" name="pass" value=""><br>
      <input type="submit" name="提交">
    </form>
  </body>
</html>
```

2、ajax        异步，不用刷新，可以跨域（需要方法）  

异步——并行：一堆可以一块进行  
同步——串行：一个个来，前一个操作没完事，后面等着  

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="jquery.js" charset="utf-8"></script>
    <script>
      $(function () {
        $('#btn1').click(function () {
          $.ajax({
            url: 'a.php',
            data: {a:23231, b:343534},
            type: 'get',
            dataType: 'text',
            success(str){
              alert(str);
            },
            error(){
              alert('失败了');
            }
          });
        });
      });
    </script>
  </head>
  <body>
      <input type="button" value="按钮" id="btn1">
  </body>
</html>
```

from表单：

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>学海无涯苦作舟</title>
  </head>
  <body>
    <form action="http://localhost:8888/a.php" method="get">
      <input type="text" name="a" value="">
      <input type="text" name="b" value="">
      <input type="submit" name="" value="提交">
    </form>
  </body>
</html>
```

a.php接口文件

GET
```
<?php
echo $_GET['a'] + $_GET['b'];
 ?>
```

POST
```
<?php

echo $_POST['a'] + $_POST['b'];

 ?>
```


通信状态：
0初始化，刚创建  
1已连接  
2已发送  
3已接收-头  
4已接收-body

http状态码（status）:  
1xx 消息  
2xx 成功  
3xx 重定向  
—|— 301 永久重定向-浏览器永远不会再次请求老地址，太危险  
—|— 302 临时重定向-浏览器下次还会请求老地址，常用  
—|— 304 已经缓存，没有变化成功  
4xx 客户端请求错误  
5xx 服务端错误  
6xx 自定义  

什么是转发？——在服务器内部把请求转交给另一个模块处理，对客户端是不可见的，地址不变
什么是重定向？——给浏览器下命令，让浏览器去请求另一个地址，地址变


#### ajax内部怎么写的？

GET:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
    window.onload = function () {
      let a = document.getElementById('btn1');
      a.onclick=function () {
        //因为不兼容IE6，这里需要考虑兼容性
        if (window.XMLHttpRequest) {
          var xhr = new XMLHttpRequest();   //这是Ajax的核心对象，有的人叫xhr
        } else {
          var xhr = new ActiveXObject('Microsoft.XMLHttp');   //这是不兼容的情况下使用IE的一个插件
        };

        //先连接(trun异步，false同步)
        xhr.open('GET','a.php?a=12&b=5',true);
        //再向服务器发送（放着的是http-body）
        xhr.send();
        //最后接收(当通信状态变化的时候接受)
        xhr.onreadystatechange=function () {
          //通信状态码-完事——4
          if (xhr.readyState == 4) {
            //http状态码-成功——200、304
            if(xhr.status>=200 && xhr.status<300 || xhr.status ==304){
              //responseText文本，还有一种responseXML
              alert('成功' + xhr.responseText);
            }else {
              alert('失败');
          };
        };
      };
    };
  };
    </script>
  </head>
  <body>
    <body>
        <input type="button" value="按钮" id="btn1">
    </body>
  </body>
</html>
```

POST:

```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
    window.onload = function () {
      let a = document.getElementById('btn1');
      a.onclick=function () {
        //因为不兼容IE6，这里需要考虑兼容性
        if (window.XMLHttpRequest) {
          var xhr = new XMLHttpRequest();   //这是Ajax的核心对象，有的人叫xhr
        } else {
          var xhr = new ActiveXObject('Microsoft.XMLHttp');   //这是不兼容的情况下使用IE的一个插件
        };

        //先连接(trun异步，false同步)
        xhr.open('POST','b.php',true);
        //再向服务器发送（放着的是http-body）
        //请求头
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        //请求体，POST存放数组
        xhr.send('a=12&b=5');
        //最后接收(当通信状态变化的时候接受)
        xhr.onreadystatechange=function () {
          //通信状态码-完事——4
          if (xhr.readyState == 4) {
            //http状态码-成功——200、304
            if(xhr.status>=200 && xhr.status<300 || xhr.status ==304){
              //responseText文本，还有一种responseXML
              alert('成功' + xhr.responseText);
            }else {
              alert('失败');
          };
        };
      };
    };
  };
    </script>
  </head>
  <body>
    <body>
        <input type="button" value="按钮" id="btn1">
    </body>
  </body>
</html>
```

ajax封装:  

```js
function ajax(options) {

    options = options||{};
    options.type=options.type||'GET';
    options.data=options.data||{};
    options.dataType=options.dataType||'text';

    let xhr = new XMLHttpRequest();

    //数据组装
    let arr = [];
    //循环数据，name就是数据的名字，data[name]就是这个数据名的值
    for(let name in options.data){
      arr.push(`${name}=${options.data[name]}`);
    }
    let strData = arr.join('&');

    //判断提交方式
    if (options.type=='POST') {
      xhr.open('POST', options.url, true);
      xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
      xhr.send(strData);
    } else {
      xhr.open('GET', options.url+'?'+strData, true);
      xhr.send();
    }

    //最后接收(当通信状态变化的时候接受)
    xhr.onreadystatechange=function () {
      //通信状态码-完事——4
      if (xhr.readyState == 4) {
        //http状态码-成功——200、304
        if(xhr.status>=200 && xhr.status<300 || xhr.status ==304){

          let data = xhr.responseText;

          switch (options.dataType) {
            case 'JSON':
              data = JSON.parse(data);
              break;

            case 'xml':
              data = xhr.responseXML;
              break;
          }


          options.success && options.success(xhr.responseText);
        }else{
          options.error && options.error();
      }
    }
  };
}
```

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="js/ajax.js" charset="utf-8"></script>
    <script>
    window.onload = function () {
      let oBtn = document.getElementById('btn1');
      oBtn.onclick=function () {
        ajax({
          url: 'a.php',
          //type:'POST',
          data: {a:33, b:77},
          dataType: 'JSON',
          success(data){
            alert(data);
            console.log(data);
          },
          else() {
            alert('错了');
          }
        });
    };
  };
    </script>
  </head>
  <body>
    <body>
        <input type="button" value="按钮" id="btn1">
    </body>
  </body>
</html>
```

|POST表单的三种content-type类型||
|--------------|-------------------------------|
|text/plain                          |纯文本，很少用|
|application/x-www-form-urlencoded   |url编码  简单数据，名字=值&名字=值&名字=值&……的方式|
|multipart/form-data                 |定界符分割各个数据 上传文件|


jsonp       跨域，安全性太差，已经被淘汰，百度搜索
ajax           性能低、单向、跨域麻烦  
websocket   性能高、双向（双工）、直接跨域



## NODE 中间层
1、web后台（适合小规模项目）  
语法上和JavaScript差不多  
自带很多系统模块
安全性，性能不错，与前台交互数据

##### 系统模块功能：  
0、断言测试（绝对不会出现的事）
Assertion testing  assert 最常用做参数检查

1、缓冲区
Buffer 		处理二进制数据
File system 	文件系统 fs

2、写插件
C++ addons	用C语言写插件
C/C++ addons with N-API
C++ embedder API

3、多进程
Child processes
Cluster
Process

Command-line options

4、调试控制台：
Console

5、签名：md5、sha
Crypto

6、错误类型
Errors

7、HTTP相关
HTTP
HTTP/2
HTTPS

Debugger

8、系统相关
OS

9、处理路径相关
Path

10、Events事件队列（解耦）  
```
const event = require('events').eventemitter ;  
let ev = new event();
监听  
ev.on('msg', function(a,b,c){
    console.log('收到了msg事件：',a,b,c);
});
派发
ev.emit('msg',12,5,8);
```

等同于下面函数调用方法
```
function msg(a,b,c){
    console.log('收到了msg事件：',a,b,c);
msg(12,5,8);
```

async

11、查询字符串、URL
URL 解析GET方法整个url
url.parse("/aaa/bbb?a=12&b=5")
Query strings 解析POST方法数据，分割数据
querystring.parse("a=12&b=5")

12、网络：
TCP 稳定 Net
UDP 速度快 UDP/datagram

13、域名解析：
DNS
Domain

14、流操作——连续数据都是流，视频、网络、文件、语音
Stream
String decoder
Timers

15、加密、安全
TLS/SSL

16、压缩
Zlib—gz


终端
TTY


2、思路转换

| JSON     |   客户端前台（浏览器）  |  服务端后台（服务器） ||
|----------|------------------------|----------------------|-----|
| Request  |   发出的数据（输出）    |  接收的数据（输入）  ||
| Response |   接收的数据（输入）    |  发出的数据（输出）  | write和end|

IO：输入input；输出output
阻塞IO:C语言，前一个IO没完事，程序等着；同步  
非阻塞IO:JAVA、NODE语言，前一个IO没完事，程序接着跑；异步  

浅复制：复制一层  
深复制：复制所有东西

```js
const http = require('http');
let server = http.createServer((req,res)=>{
  //有一个当有浏览器请求时执行的回调函数
  //request 请求 接收的数据（输入）
  //response 相应 发送的数据（输出）

  res.write('abc');
  res.end();
  });
  //监听
  server.listen(8080);
```


#### 完成原生NodeJS服务器
1、服务器基本结构：解析数据（get，post）、响应静态资源（fs）

安全性：99%的漏洞都是懒造成的
一切来自前台的数据都不可信
前后台都得进行数据校验

创建服务器http
创建根目录fs

数据的交互：  

get数据：
在rep.url里面  

post数据：  
在body里面、比较大

```js
const http = require('http');
const url = require('url');
const querystring = require('querystring');

let server = http.createServer((req,res)=>{
  //GET
  let {pathname,query}=url.parse(req.url,true);
  //console.log();

  //POST
  let str='';
  //有一个段到达了
  req.on('data',data=>{
    str+=data;
  });
  //结束了
  req.on('end',()=>{
    let post=querystring.parse(str);
    console.log(pathname,query,post);
  });

  res.end();
  });
  //监听
  server.listen(8080);
```

### 接口
1、讨论确定接口文档（名字、接收参数、返回参数、方式get\post……）

例如：
/reg?user=xxx&pass=xxx
=>{err:0,msg:'说明'}

/login?user=xxx&pass=xxx
=>{err:0,msg:'说明'}

2、写出来

    先准备服务脚本（server3.js）
    ```js
    const http = require('http');
    const url = require('url');
    const querystring = require('querystring');
    const fs = require('fs');

    let users={};

    let server = http.createServer((req,res)=>{
      //GET
      let {pathname,query}=url.parse(req.url,true);
      //console.log();

      //POST
      let str='';   //不能把二进制数据转为字符串，这里其实不好
      //有一个段到达了
      req.on('data',data=>{
        str+=data;
      });
      //结束了
      req.on('end',()=>{
        let post=querystring.parse(str);

        let{user,pass}=query;

      //开始写东西,先做一个判断，根据请求路径确定用户要做什么
      switch(pathname){
        case '/reg':         //注册

          //从query里拿出数据进行校验
          if (!user) {
            res.write('{"err":1,"msg":"user不能为空"}');
          }else if(!pass) {
            res.write('{"err":1,"msg":"pass不能为空"}');
          }else if(!/^\w{8,32}$/.test(user)) {
            res.write('{"err":1,"msg":"用户名不符合标准"}');
          }else if(/^['|"]$/.test(pass)) {
            res.write('{"err":1,"msg":"密码不符合标准"}');
          }else if(users[user]) {
            res.write('{"err":1,"msg":"用户名重复"}');
          }else{
            users[user]=pass;
            res.write('{"err":0,"msg":"注册成功"}');
          }
          res.end();
          break;

        case '/login':       //登录
          if (!user) {
            res.write('{"err":1,"msg":"user不能为空"}');
          }else if(!pass) {
            res.write('{"err":1,"msg":"pass不能为空"}');
          }else if(!/^\w{8,32}$/.test(user)) {
            res.write('{"err":1,"msg":"用户名不符合标准"}');
          }else if(/^['|"]$/.test(pass)) {
            res.write('{"err":1,"msg":"密码不符合标准"}');
          }else if(!users[user]) {
            res.write('{"err":1,"msg":"用户名不存在"}');
          }else if(users[user]!=pass) {
            res.write('{"err":1,"msg":"密码错误"}');
          }else{
            res.write('{"err":0,"msg":"登录成功"}');
          }
          res.end();
            break;

        default:             //其他，上传文件
          fs.readFile(`www${pathname}`,(err,data)=>{
            if (err) {
              res.writeHeader(404);
              res.write('Not Found');
            } else {
              res.write(data);
            }
            res.end();
          });
        }
      });
    });
      //监听
      server.listen(8080);
    ```
    准备前台页面：   

    ```html
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
    <head>
    <meta charset="utf-8">
    <title></title>
    <script src="jquery.js" charset="utf-8"></script>
    <script>
    $(function () {

      //注册
      $('#btn1').click(function () {
        $.ajax({
          //根据接口定义
          url: '/reg',
          data: {user:$('#user').val(),pass:$('#pass').val()},
          dataType: 'json',
          success(data){
          if (data.err) {
            alert('错了'+data.msg);
          } else {
            alert('成功');
          }
        },
          error(){
            alert('错了');
          }
        })
      });

      //登录
      $('#btn2').click(function () {
        $.ajax({
          //根据接口定义
          url: '/login',
          data: {user:$('#user').val(),pass:$('#pass').val()},
          dataType: 'json',
          success(data){
          if (data.err) {
            alert('错了'+data.msg);
          } else {
            alert('成功');
          }
        },
          error(){
            alert('错了');
          }
        })
      });

    });
    </script>
  </head>

  <body>
      用户：<input type="text" id="user" /><br>
      密码：<input type="password" id="pass" /><br>
      <input type="button" value="注册" id="btn1">
      <input type="button" value="登录" id="btn2">
  </body>
</html>
    ```

1、上传、返回FILE数据  
必须保持数据一直是二进制的状态  
对Buffer数据可以进行操作：  
查找 indexOf()  
截取 slice(s,e)   [s,...,e-1]
     slice(s)
切分 split

uuid\guid\cuid 解决文件上传的重名问题  

二进制处理模块common.js
```js
Buffer.prototype.split=Buffer.prototype.split||function(b){
  let arr=[];

  //起始位置
  let cur=0;
  let n=0;

  while((n=this.indexOf(b,cur))!=-1){
    arr.push(this.slice(cur,n));
    cur=n+b.length;
  }

  arr.push(this.slice(cur));

  return arr;
};
```

服务
```js
const http = require('http');
const common = require('./libs/common.js');   //引入自己写的切分二进制功能模块
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let server=http.createServer((req,res)=>{

  //保持文件为二进制进行连接，所以这里是一个数组
  let arr=[];

  req.on('data',data=>{
    arr.push(data);
  });
  req.on('end',()=>{
    let data=Buffer.concat(arr);

    //解析二进制文件上传数据

    //准备一个容器存放第四步切割后的json
    let post={};
    let files={};

    if (req.headers['content-type']) {
      let str=req.headers['content-type'].split('; ')[1];
      if(str){
        let boundary='--'+str.split('=')[1];

        //1.用分隔符切分整个数据
        let arr=data.split(boundary);
        //2.丢弃头尾两个数据
        arr.shift();
        arr.pop();
        //3.丢弃每个数据头尾的 \r\n
        arr=arr.map(buffer=>buffer.slice(2,buffer.length-2));
        //4.每个数据在第一个连续的“\r\n\r\n”处切成两半
        arr.forEach(buffer=>{
          let n=buffer.indexOf('\r\n\r\n');

          let disposition=buffer.slice(0,n);
          let content=buffer.slice(n+4);

          disposition=disposition.toString();

          //5.判断描述的里面有没有“\r\n”
          if (disposition.indexOf('\r\n')==-1) {
            //普通数据[数据描述，数据值]
            //Content-Disposition: form-data; name="user"
            content=content.toString();

            let name=disposition.split('; ')[1].split('=')[1];
            name=name.substring(1,name.length-1);

            post[name]=content;
          } else {
            //文件数据[数据描述1\r\n数据描述2，<文件内容>]
            //Content-Disposition: form-data; name="f1"; filename="a.txt"\r\nContent-Type: text/plain
            let [line1, line2]=disposition.split('\r\n');
            let [,name,filename]=line1.split('; ');
            let type=line2.split(': ')[1];

            name=name.split('=')[1];
            name=name.substring(1,name.length-1);

            filename=filename.split('=')[1];
            filename=filename.substring(1,filename.length-1);

            //console.log(name,filename,type);
            //console.log(content);

            let path=`upload/${uuidv4().replace(/\-/g,'')}`;

            fs.writeFile(path,content,err=>{
              if(err){
                console.log('文件写入失败',err);
              }else {
                files[name]={filename,path,type};
                console.log(files);
              }
            });
          }
        });

        console.log(post);
      }
    }

    res.end();
  });
});

server.listen(8080);

```

前台表单
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form action="http://localhost:8080/upload" method="post" enctype="multipart/form-data">
      <input type="text" name="user">
      <input type="password" name="pass">
      <input type="file" name="f1">
      <input type="submit" name="" value="提交">
    </form>
  </body>
</html>
```

#### 流操作  
瑕疵：  
现在：会等到所有数据都到达了才开始处理  
所以我们就需要用到流操作，做到数据收一部分就解析一部分，极大节约内存  
1、读取流 fs.createReadStream、req

```js
const http = require('http');
const fs = require('fs');

//req就是读取流；res就是写入流
let server=http.createServer((req, res)=>{

  //创建读取流
  let rs=fs.createReadStream(`www${req.url}`);

  //rs读取流和服务器的输入res建立连接管道
  rs=pipe(res);

  rs.on('error',err=>{
    res.writeHeader(404);
    res.write('Not Found');

    res.end();
  });
});
server.listen(8080);
```

2、写入流 fs.createWriteStream、res
3、读写流 比如：压缩、加密都是 fs.createReadStream、req

```js

```



2、数据库  
安装模块  
$ cnpm i mysql -D  

连接  
let db=mysql.createConnection({host,port,user,password,database});   

连接池  
createPool maxConnection:10

查询  
db.query('sql语句',(err,data)=>{});  

文件型：sqlite，简单，小  
关系型：mysql、oracle，常见常用  
文档型：MongoDB，直接存储异构数据，方便，json  
NoSQL：没有复杂的关系，对性能有极高的要求，radis、memcached、hypertable、bigtable  
数据仓库：数据挖掘海量数据  

项目实践：  
1、数据库结构（数据字典）  
2、接口格式（接口文档）
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="jquery.js" charset="utf-8"></script>
    <script>
      $(function () {
        //注册
        $('#btn_reg').click(function (){
          $.ajax({
            url: '/reg',
            data: {user:$('#user').val(), pass:$('#pass').val()},
            dataType: 'json',
            success(json){
              if (json.err) {
                alert('注册失败'+json.msg);
              } else {
                alert('注册成功');
              }
            },
            error(err){
              alert('失败');
            }
          });
        });
        //登陆
        $('#btn_login').click(function () {
          $.ajax({
            url: '/login',
            data: {user:$('#user').val(), pass:$('#pass').val()},
            dataType: 'json',
            success(json){
             if (json.err) {
               alert('登录失败'+json.msg);
              } else {
                alert('登录成功');
              }
            },
            error(err){
              alert('失败');
           }
         });
      });
    });

    </script>
  </head>
  <body>
      用户：<input type="text" id="user" /><br>
      密码：<input type="text" id="pass" /><br>
      <input type="button" value="注册" id="btn_reg">
      <input type="button" value="登陆" id="btn_login">
  </body>
</html>
```

```js
//引入模块
const http = require('http');
const mysql = require('mysql');
const fs = require('fs');
const url = require('url');
const zlib = require('zlib');

//连接数据库
let db=mysql.createPool({
  host:'localhost',
  port:'8889',
  user:'root',
  password:'root',
  database:'sxbirds'
});

//创建服务，当有浏览器请求时执行的回调函数
//request 请求 接收的数据（输入）
//response 相应 发送的数据（输出）
let server=http.createServer((req, res)=>{
  //使用pathname获取url中get的数据，query中就是get数据
  let {pathname, query}=url.parse(req.url, true);
  let {user, pass}=query;

  //提供两种数据在这里判断一
  switch (pathname) {

    //接口数据
    //注册
    case '/reg':
    //前台数据校验，防止SQL注入
    if (!user) {
      res.write('{"err":1, "msg": "username can\'t be null"}');
      res.end();
    } else if (!pass) {
      res.write('{"err":1, "msg": "password can\'t be null"}');
      res.end();
    } else if (!/^\w{4,16}$/.test(user)) {
      res.write('{"err":1, "msg": "username is invaild"}');
      res.end();
    } else if (/['|"]/.test(pass)) {
      res.write('{"err":1, "msg": "password is invaild"}');
      res.end();
    } else {
      db.query(`SELECT * FROM user_table WHERE username='${user}'`,(err,data)=>{
        if (err) {
          res.write('{"err":1,"msg":"database error"}');
          res.end();
        } else if(data.length>0) {
          res.write('{"err":1,"msg":"this username exsits"}');
          res.end();
        } else{
          db.query(`INSERT INTO user_table (ID, username, password) VALUES(0,'${user}','${pass}')`, (err, data)=>{
            if (err) {
              res.write('{"err":1,"msg":"database error"}');
              res.end();
            } else {
              res.write('{"err":0,"msg":"success"}');
              res.end();
            }
          });
        }
      });
    }
      break;

    //登录
    case '/login':
      //前台数据校验，防止SQL注入
      if (!user) {
        res.write('{"err":1, "msg": "username can\'t be null"}');
        res.end();
      } else if (!pass) {
        res.write('{"err":1, "msg": "password can\'t be null"}');
        res.end();
      } else if (!/^\w{4,16}$/.test(user)) {
        res.write('{"err":1, "msg": "username is invaild"}');
        res.end();
      } else if (/['|"]/.test(pass)) {
        res.write('{"err":1, "msg": "password is invaild"}');
        res.end();
      } else {
        db.query(`SELECT * FROM user_table WHERE username='${user}'`,(err,data)=>{
          if (err) {
            res.write('{"err":1, "msg":"database error"}');
            res.end();
          } else if(data.length==0){
            res.write('{"err":1, "msg":"no this user"}');
            res.end();
          } else if(data[0].password!=pass){
            res.write('{"err":1, "msg":"username or password is incorrect"}');
            res.end();
          } else {
            res.write('{"err":0, "msg":"success"}');
            res.end();
          }
        });
      }
      break;

    default:
    //还可以加缓存 TODO
    //静态文件数据
    let rs=fs.createReadStream(`www${pathname}`);
    //压缩
    let gz=zlib.createGzip();

    //先给一个头，不能直接用
    res.setHeader('content-encoding', 'gzip');
    rs.pipe(gz).pipe(res);

    rs.on('error', err=>{
      res.writeHead(404);
      res.write('Not Found');
      res.end();
    });
  }
});

  //监听8080
  server.listen(8080);
```

3、WebSocket——socket.io  
没闹通

4、缓存

思路  
第一次S->C:"Last-Modified: Sat, 02 Dec 2017 04:03:14 GMT"  
第二次C->S:"iF-Modified-Since: Sat, 02 Dec 2017 04:03:14 GMT"  
第二次S->C:200||304  

5、多进程服务器

|       |                 区别               |
|-------|-------------------------------------|
| 进程  |   拥有独立的执行空间、存储；进程间通信麻烦|
| 线程  |   同一进程内的所有线程共享一套空间、代码  |  
| 多进程  | 慢；进程间严格隔离安全；进程间通信麻烦；写代码简单；PHP、NODE|
| 多线程  | 快；线程要死一块死不安全；进程间通信容易；写代码复杂；JACA、C|

NODE默认单进程、单线程
多进程，安全，充分利用CPU性能
有一个主进程，负责派生子进程（cluster）；子进程负责干活（proce）。
主进程挂了就都挂了。  

普通程序不能创建进程，只有系统进程才能创建进程；进程是分裂出来的；分裂出来的两个进程执行的是同一套代码；父子进程之间可以共享“句柄”

```js
const http = require('http');
const cluster = require('cluster');
const os = require('os');
const process = require('process');

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  console.log('主进程');
} else {
  console.log(process.pid);

  //子进程负责干活
  let server=http.createServer((req, res)=>{
    res.write('aaa');
    res.end();
  });

  server.listen(8080);

  console.log('服务器开好了，在8080上');
}
```

程序员内功：  
1、算法
2、设计模式
3、框架



localStorage本地存储替代cookie  
cookie小：小4k  
localStorage：大5M  



#### Ajax 2.0
1、formData——控制提交数据、文件上传  
set(key, value) 会覆盖  
append(key, value) 不会覆盖  
get(key)=>value  
delete(key)  
服务器那边根普通<form>一样  

用户：  
GET    /user/:id        获取用户信息  
POST   /user            注册  
POST   /user/login      登录  
POST   /user/ch_pass    重制密码  

2、ajax2.0跨域——cors跨域  
本不存在跨域这回事儿，是浏览器对我们的限制  
Access-Control-Allow-Origin ： 域名||*

```js
  if(req.headers['origin']=='null' || req.headers['origin'].startsWith('http://localhost')){
    res.setHeader('Access-Control-Allow-Origin','*');
  }
```

拖拽上传事件：  
ondragenter  拖着东西进入  
ondragleave  拖着东西离开  
ondragover   悬停  
ondeop       松手  

拖拽->读取文件内容，麻烦  
拖拽->上传，简单  

ev.dataTransfer.files -> FormData  

拖拽->读取文件内容，麻烦  
FileReaDer  


阻止默认事件：  
oForm.onsubmit=function(){  
  return false;  
};

绑定情况  
oForm.addEventListener('submit', function(ev){
  ev.preventDefault();  
},false);

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
      .box {width: 400px; height: 150px; border: 1px solid black; background: #CCC; position: absolute; margin-left: -200px;
        margin-top: -75px; left: 50%; top: 50%; text-align: center; line-height: 150px;}
    </style>
    <script>
      window.onload=()=>{
        let oBox=document.querySelector('.box');

        oBox.ondragenter=function () {
          oBox.innerHTML='松手上传';
        };
        oBox.ondragleave=function () {
          oBox.innerHTML='请拖到这里';
        };
        oBox.ondragover=function () {
          console.log("aaa");
          //如果ondragover不阻止默认事件，ondrop就不会发生
          return false;
        };

        //ev事件对象，是事件里面传递数据的一个方法
        oBox.ondrop=function (ev) {

          //alert('松手');
          //console.log(ev.dataTransfer.files);

          let data=new FormData();


          Array.from(ev.dataTransfer.files).forEach(file => {
            data.append('f1', file);
          });

          let oAjax=new XMLHttpRequest();

          //POST
          oAjax.open('POST', `http://localhost:8080/api`, true);
          oAjax.send(data);

          oAjax.onreadystatechange=function () {
            if(oAjax.readyState==4){
              if (oAjax.status>=200 && oAjax.status<300 || oAjax.status==304) {
                alert('成功');
              } else {
                alert('失败');
              }
            }
          };

          return false;
        };
      };
    </script>
  </head>
  <body>
    <div class="box">
      拖到这里
    </div>
  </body>
</html>
```
```js
const express = require('express');
const body = require('body-parser'); //接收普通POST数据
const multer = require('multer');    //接收文件POST数据

let server = express();
server.listen(8080);

//中间件
server.use(body.urlencoded({extended:false}));

let multerObj=multer({dest: './public/upload/'});
server.use(multerObj.any());

//处理请求
server.post('/api',(req, res)=>{
  //跨域
  if(req.headers['origin']=='null' || req.headers['origin'].startsWith('http://localhost')){
    res.setHeader('Access-Control-Allow-Origin','*');
  }


  res.send("ok");

  console.log(req.body);
  console.log(req.files);
});


server.use(express.static('./public/www/'));

```

上传进度监控--process对象  
```js
  oAjax.upload.onprogress=function (ev) {
    let oM = document.getElementById('m1');

    oM.value = 100*ev.loaded/ev.total;
  };
```
注意事项：  
1、upload必须放在send前面  
2、以前上传——POST  
 加了upload——服务器必须能处理OPTIONS、POST  
 NodeJS服务可以用use

 代码在GitHub仓库



### HTML5  
1、geolocation 定位  
    PC端：通过IP地址    精度非常差   IP库   
    移动：GPS硬件设备       精度高  
2、video、audio  
3、localStorage     用途：记录用户名、保存草稿……  
    cookie:         小4k，浏览器和服务器共享  
    localStorage    大5M，浏览器独享，永久存储  
    sessionStorage  会话期间存储
4、*WebWorker   多进程，工作中没用过  
5、WebSQL、IndexedDB 安全隐患  
    *W3C删掉了  
6、文件操作、文件拖拽  
7、canvas 画位图    作用：图表库echarts.js、游戏、滤镜
    路径问题、像素操作、d3  
    SVG/VML 矢量图  
8、manifest文件     前台控制缓存  
9、CSS3新样式
10、移动端布局、事件touch、相关库  iscroll、hammer
11、canvas高级应用   游戏、WebGL  
