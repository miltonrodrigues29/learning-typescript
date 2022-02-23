// function log(message) {
//   console.log(message);
// }
// var message = "Hello World!";
// log(message);
// ---------------------------
// function doSomething() {
//   for (let x = 0; x < 5; x++) {
//     console.log(x);
//   }
//   console.log(`Finally: ${x}`);
// }
// doSomething();
// let count = 5;
// count = "a";
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "a", false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Orange"] = 2] = "Orange";
})(Color || (Color = {}));
var bgColor = Color.Blue;
console.log(bgColor);
