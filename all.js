// var nodes = document.getElementsByTagName("button");
// for (let i = 0; i < nodes.length; i++) {
//   nodes[i].addEventListener("click", function () {
//     console.log("You clicked element #" + i);
//   });
// }

// const text = document.querySelector(".text");
// const input = document.getElementsByTagName("input");

// function ClosureTest() {
//   let story = "";
//   return () => {
//     story += input[0].value;
//     text.textContent = story;
//   };
// }
// const clickButton = ClosureTest();

// function test() {
//   var a = 10;
// }
// var a = 100;
// let b = 1;
// console.log(window.a);
// console.log(window.b);

// async function a() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("1");
//       resolve("OK");
//       //reject("OK");
//     }, 1000);
//   });
// }
// async function b() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2");
//       resolve("OK");
//       //reject("OK");
//     }, 1000);
//   });
// }
// async function start() {
//   await a().catch((err) => console.log(err, "a err"));
//   await b().catch((err) => console.log(err, "b err"));
//   console.log("end");
// }
// start();

// var el = document.querySelector(".box");
// el.addEventListener("click", function (e) {
//     e.stopPropagation();
//     alert("box");
//   }, true);

//   var elBody = document.querySelector("body");
//   elBody.addEventListener("click", function (e) {
//       e.stopPropagation();
//       alert("body");
//     }, true);

// var x = 5;
// console.log(x);
// (function () {
//   console.log(x);
//   var x = 10;
//   console.log(x);
// })();
// console.log(x);

// const test = function () {
//   alert("alert!!");
// };
// (function () {
//   if (confirm("check") === true) {
//     test();
//   }
// })();

// function Person(name, age) {
//   // console.log(this, "this");
//   this.name = name;
//   this.age = age;
// }

// const nick = new Person("nick", 19);
// console.log(nick, "nick");

// function test() {
//   const t = "123";
//   console.log(this.t, "this");
// }
// test();

// {
//   console.log(a);
//   const a = 1;
// }

// const num = 100;
// const obj = { num: 1 };
// function add() {
//   console.log(this.num, "this num");
// }
// // const bindTest = add.bind(obj);
// // bindTest();
// add.bind(obj)();

// let test = [1, 2, 3, 4, 5];
// let a = [];
// test.forEach((item) => a.push(item * 2));
// console.log(a, "a");

// for (let i = 0; i < test.length; i++) {
//   test[i] = test[i] * 2;
// }
// console.log(test, "test");

// const arr = test.map((item) => item * 2);
// console.log(arr, "arr");


// var a = 1;
// var b = 1;
// var e = 1;

// function test(a) {
//   console.log(a);
//   var b = 2;
//   console.log(b);
//   if (true) {
//     let c = 5;
//     var d = 6;
//     const e = 7;
//   }
//   console.log(c);
//   console.log(d);
//   console.log(e);
// }

// test();

// undefined
// 2
// Uncaught ReferenceError: c is not defined

//add remark
//add newb


