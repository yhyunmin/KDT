// const ask = Number(prompt("ask"));
// const 배열2 = Array(ask);

// const 배열123 = [];

// // for i <ask;
// // empty

const 배열3 = Array(100)
  .fill("") // ?
  // empty -> 0
  .map(
    (v, i) =>
      // i // 0 -> i + 1;(?)
      (v = i + 1)
  ); // ?
배열3[33]; // ?
배열3[99]; // ?

// console.log(배열2[2]);
// typeof 배열2; // object // ?

// const 배열10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const 배열4 = 배열10.map((v, i) => {
//   배열10.push(i);
// });

// 배열10.length; // ?
