/* 
0310 / 함수 (메소드)
*/

const str: string = "Happy Day~! ";

// replace (문자열1,문자열2) : 문자열1을 문자열 2로 바꿔줌

// repeat(n) : n번 반복

// trim() : 문자열의 양끝 공백 없애기 *

// split() : 문자열을 기준으로 str을 쪼개서 배열로 저장 **

/* 
배열 관련 메서드
*/

// pop() : // 마지막 제거

// shift(), unshift() : // 제거 / 추가

//  includes

const numbers: number[] = [1, 2, 3, 4, 5, 6];

const words: string[] = [];

// arr.length : 배열의 길이 반환

// indexof() indexOf안에 인덱스를 알려줌
// arr.reverse(); 배열 순서 뒤집어서 반환

// arr.join() : join 안에 문자열 기준으로 병합 함

let hello: string = "hello";
// 거꾸로 olleh 만들기

//filter : 조건에 부합하는 배열 요소만을 반환
//[].filter((매개변수)=>조건);

let arr: number[];

arr = numbers.filter(function (num) {
  return num > 3;
});

/* 

문자열 관련 함수 + 속성(length)


toUpperCase(),toLowerCase();
trim()
indexOf()
slice()
replace(),replaceAll()
repeat()

 */

let str1: string = "Strawberry Moon";
let str2: string = "           Strawberry Moon";
//문자열 인덱싱
console.log("str1[0]", str1[0]);
console.log("str1[0]+str1[12]", str1[0] + str1[12]);

// Sonny 만들기

console.log(str1[0], str1[12], str1[14], str1[14], str1[9]); //?

console.log("str1.length", str1.length);
console.log("str2.length", str2.length);

const msg: string = "happy birthday";
console.log("msg.toUpperCase", msg.toUpperCase);
console.log("msg.toLowerCase", msg.toLowerCase);

console.log("str2.trim()", str2.trim());
console.log("str2.trim().length:", str2.trim().length);

const msg2 = "             hello world!";
console.log("msg.trim().toUpperCase()", msg.trim().toUpperCase());

const fruits2: string | number = "applemango";
console.log("fruits.indexOf('a')", fruits2.indexOf("a"));

console.log(fruits2.indexOf("apple"));

//값이 있으면 0 값이 없으면 -1

console.log("fruits2.charAt(3)", fruits2.charAt(3));

console.log("fruits2.slice(5)", fruits2.slice(5));
console.log("fruits2.slice(3,6)", fruits2.slice(3, 6));
console.log("fruits2.slice(-1)", fruits2.slice(-1)); // 역순

const msg3: string = "wow it is so amazing";

console.log('msg3.replace("wow","hey")', msg3.replace("wow", "hey"));

console.log("msg3.replaceAll('O','A')", msg3.replaceAll("O", "A"));

let date: string = "23.03.10";
console.log("date.split('.')", date.split("."));

console.log('"hi".repeat(5)', "hi".repeat(5));
/* 

배열 메서드
push pop unshift shift -> 원본 배열 변화
indexOf, join, reverse
*/

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: string[] = ["quokka", "rabbit", "puppy", "hamster"];
arr1[5] = 8;
// 맨끝에 값을 넣고 싶을떈 , 끝값 인덱스를 알고있어야함.
console.log("arr1[5]", arr1[5]);

console.log("arr1.pop", arr1.pop());

arr1.push(6);
arr1.push(10);

arr2.unshift("cat");
console.log("arr2", arr2);
arr2.shift();
console.log("arr2", arr2);

// .includes()요소가 있는지 없는지 확인함 ( bool값)

console.log('arr2.includes("quokka")', arr2.includes("quokka")); //?

console.log("arr1.indexOf(5)", arr1.indexOf(5));

console.log("arr1.reverse()", arr1.reverse());
//reverse는 기존의 배열을 변화 시킴
arr1;

/* 
join : "배열"을 "문자열"로 바꿔줌

*/

const str3: string = arr1.join();
typeof arr1; // ?

/* 
배열에서의 for
for , for of for Each 가 있다
forEach : 매개변수로 익명함수가 들어감
*/

let arr4: number[] = [1, 3, 5, 4, 6];
let alphabets: string[] = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr4.length; i++) {
  console.log("arr3[i]", arr4[i]);
}

for (let number of arr4) {
  console.log("number", number);
}

arr4.forEach((data, index, arr) => {
  console.log("data,index,arr", data, index, arr);
  /* 
  첫번째 매개변수 (data) : 배열의 각 값 이름
  두번째 매개변수 (index) : 배열의 각 값의 인덱스
  세번째 매개변수 (array) : 배열몸통
   */
});

arr4.forEach((data, index) => {
  //2개 작성시 값과 인덱스
  console.log("data,index", data, index);
});

arr4.forEach(data => {
  //1개 작성시 값
  console.log("data", data);
});

/* 
filter

*/

arr4.filter(function (num) {
  return num > 3;
}); // ?

arr2;

arr2.filter(function (data) {
  return data.length >= 6;
}); // ?

// map,find
// map: 배열내의 모든원소에 대해서 연산 하여 새로운 배열을 반환

let arr5: number[] = [1, 2, 3].map(function (el: number): number {
  return el * 3;
});

arr5;

const arr6: number[] = [1, 2, 3, 4, 5];
const arr7: number[] = arr6.map((el: number): number => el * 10);
arr7;

const arr8: string[] = arr6.map((el: number): string => {
  return String(el);
});

arr8;

let findResult: number = arr7.find((el: number): number | boolean => {
  return el >= 30; //?
});

arr7;

findResult;

//실습
//1 -100까지의 배열을 for문을 사용해서 만들기
// 그리고 해당 배열의 합을 for 문 forOf문 forEach문을 사용해서 구하기

const 배열: number[] = [];

for (let i = 0; i < 100; i++) {
  배열.push(i + 1);
}
배열.length; // ?
//
//

let 배열합: number = 0;

for (let i = 0; i <= 배열.length; i++) {
  배열합 += i;
}
console.log("배열합", 배열합);
배열합 = 0;
//
//
for (let number of 배열) {
  배열합 += number;
}
console.log("배열합", 배열합);
배열합 = 0;

//
//
배열.forEach(i => (배열합 += i));
console.log("배열합", 배열합);

//
//
//
//
//
//

const 배열2: number[] = Array(100) // empty
  .fill("") // ?
  // empty -> 0
  .map((v, i): number => (v = i + 1)); // ?
배열2.length; // ?
배열2[0]; // ?
배열2[2]; // ?
배열2[99]; // ?

typeof 배열2; // object // ?

const 과일1: string[] = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "사과",
];
const 과일2: string[] = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

const same: string[] = [];
const diff: string[] = [];

for (let i = 0; i < 과일1.length; i++) {
  if (과일2.includes(과일1[i])) {
    same.push(과일2[i]);
  } else {
    diff.push(과일1[i]);
  }
}
console.log("same", same);
console.log("diff", diff);

// filter

//메서드 체이닝을 사용하기
const same2 = 과일1.filter((과일: string) => 과일2.includes(과일));
const diff2 = 과일1.filter((과일: string) => !과일2.includes(과일));

console.log("same2", same2);
console.log("diff2", diff2);

// JS 자바스크립트 표준 내장 객체
// JS 가 기본적으로 가지고 있는 객체
//

/* 
Object
Array
String
Number
Boolean
*/
/* 
Date: 시간,날짜에 대한 정보를 얻기 위해 사용

Math:
*/

let 현재시간: Date = new Date();
console.log("현재시간", 현재시간);
// 년도
console.log("현재시간.getFullYear()", 현재시간.getFullYear());
// 월
console.log("현재시간.getMonth()", 현재시간.getMonth());
// 일
console.log("현재시간.getDate()", 현재시간.getDate());
// 시
console.log("현재시간.getHours()", 현재시간.getHours());
// 분
console.log("현재시간.getMinutes()", 현재시간.getMinutes());
// 초
console.log("현재시간.getSeconds", 현재시간.getSeconds);

//요일
console.log("현재시간.getDay()", 현재시간.getDay());
//0 :일요일 ~ 6:토요알

// Date객체를 이용해서 오늘의 요일을 얻고,
// 오늘이 평일인지 주말인지 작성해보기

let 현재시간2: Date = new Date();

let 요일: string;
요일 = 현재시간2.getDay() === 0 || 현재시간2.getDay() === 6 ? "주말" : "평일";

// function 평일주말(): string {
//   return 현재시간2.getDay() === 0 || 현재시간2.getDay() === 6 ? "주말" : "평일";
// }

// 평일주말(); // ?

console.log("요일2", 요일);

//  switch 문

switch (현재시간2.getDay()) {
  case 0: // 일
  case 6: // 토
    console.log("주말");
    break;
  default:
    console.log("평일");
    break;
}
// Math 객체
// 속성
console.log("Math.PI", Math.PI);
console.log("Math.E", Math.E);
console.log("Math.SQRT2", Math.SQRT2); //루트 2

// 메서드
/* 
Math.min() : 최소값  *()안의 값중에서*
MAth.max() : 최대값  *()안의 값중에서*
Math.random() : 0이상 1미만의 무작위 수
Math.round() : 반올림 *()안의 값을*
Math.floor() : 내림 *()안의 값을*
Math.ceil(): 올림 *()안의 값을*
*/

// Math.random 연습

Math.floor(Math.random() * 10); //

Math.floor(Math.random() * 100) + 1; //
