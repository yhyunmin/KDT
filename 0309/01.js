/* 
함수 선언문 vs 함수 표현식

함수 선언문 : 어디서든 호출 가능

sayHello();

function sayHello() {
  console.log('hello);
}

let sayHello2 = function(){
  console.log('hello);
  sayHello2(); 

  위치에 차이가 있다$ 
}
*/

helloWorld1();
function helloWorld1() {
  console.log("hello world");
}

helloWorld1();

function helloWorld2() {
  return "helloWorld2";
}
helloWorld2;

function add(num1, num2) {
  return num1 + num2;
  console.log("안뇽");
}
add(1, 2); // ?

// return 밑에다 명령문 작성시 작동 X
// return 이 나오면 함수 실행 종료

function add2(num1, num2) {
  console.log((num1, num2));
}

let result = add(5, 5);
let result2 = add2(5, 5);

console.log(result);
console.log(result2); // undefined
// return을 안해서 result2의 함수 값이 undefined

//함수 표현식

let helloWorld3 = function () {
  console.log("hello World 3!");
};
helloWorld3();

// 화살표 함수

let helloWorld4 = () => {
  console.log("hello World 4!");
  return 1;
};

helloWorld4(); // ?

//질문: 함수  실행 할때마다 ++1 되는게있는데 helloWorld()안하고 hellWorld 데이터값만 사용하는방법.이 궁금함

let 올해 = 2023;
let 나 = 19;

function 내년(num1, num2) {
  ++num1;
  ++num2;

  return `${num1},${num2}`;
}
내년(올해, 나); // ?

let 올해는몇년 = 내년; // ?

let count = 0;

function countHello() {
  console.log("hello");
  return ++count;
}

console.log(count); //  ?1
console.log(countHello()); // ? 1
console.log(countHello); // ?

// function 함수(num1, num2) {
//   let sum = num1 + num2;
//   return ++sum;
// }
// let now = 함수;

함수(1, 2); // ?

function sayHello1(text) {
  return text;
}

function sayHello2(text, name) {
  return `${text} ${name}`;
}

console.log(sayHello2("1", "2")); // ?

const sayHello11 = text => text;

console.log(sayHello11("hi")); // ?

const sayHello22 = (text, name) => `${text},${name}`;

console.log(sayHello22("hi", "name!"));

const multiple = (num1, num2) => {
  return num1 * num2;
};

console.log(multiple(1123, 2132));
console.log(multiple(213213, 213123));

//

//
//

//

// html에서의 자바스크립트

// 태그 안에 onClick(버튼 클릭)으로 자바스크립트를 추가 할 수있다 ( 인라인 )

//onClick , onmouseout
