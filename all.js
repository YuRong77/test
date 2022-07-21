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
