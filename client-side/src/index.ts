// index.ts
let a: number = 123;

const merge = <T, U>(arg1: T, arg2: U): T & U => {
    let res = {} as T & U; // 这里指定返回值的类型兼备T和U两个类型变量代表的类型的特点
    res = Object.assign(arg1, arg2); // 这里使用Object.assign方法，返回一个合并后的对象；
                                     // 关于该方法，请在例子下面补充中学习
    return res;
  };
  const info1 = {
    name: "lison"
  };
  const info2 = {
    age: 18
  };
  const lisonInfo = merge(info1, info2);

  console.log(lisonInfo);

const h1 = document.createElement("h1");
h1.innerHTML = "Hello, I am Lison";
document.body.appendChild(h1);