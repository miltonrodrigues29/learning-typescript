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

// -----------------------

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, "a", false];
// enum Color {
//   Red,
//   Blue,
//   Orange,
// }
// let bgColor = Color.Blue;
// console.log(bgColor);

// let message;
// message = "abc";
// //now message could be anyhting as it is not initialized anything, it could be string number etc
// let endsWithC = (<string>message).endsWith("c");
// //when you write this, it will be error beacuse it doesnt consider message as a string because it is of type any, as it is not initialied with string at the begining, so there is no function called endsWith in the variable of type "any" , so it throws an error
// console.log(endsWithC);
// let alternativeWay = (<string>message).endsWith("d");
// console.log(alternativeWay);

// ----------------------------

// let doLog = (message) => console.log(message);
// doLog("Hi");

// let doLog = (message) => {
//   console.log(message);
// };

// doLog("Hello");

// ^ arrow functions

//custome types

// let drawPoint = (point) => {
//   console.log(point.x);
//   console.log(point.y);
// };

// drawPoint({
//   x: 1,
//   y: 2,
// });

//inline annotation
interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {
  console.log(point.x);
  console.log(point.y);
};

drawPoint({
  x: 1,
  y: 2,
});
