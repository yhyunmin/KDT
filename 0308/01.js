// js 의 html 참조 방식

// 내장방식 : 링크 방식
// 내장 방식 ;  <script> 위치는 어디서나 사용이 가능.
//간단함 // 특정페이지에서만 작동하는 기능 < 내장방식

// 링크방식 ; <script src=""> 로 불러 올 수 있음
// 재사용성 , 코드가 길어졌을 때 관리가 편함.

// string 문자형은 따옴표를 사용

//데이터의 종류

/* 
자료형
-기본(원시)
- string
- number
- boolean
- null
- undefined
*/

// 1. string :
let myName = "길동";
let email = " gildong@naver.com";
let city = "서울";

console.log(myName);
console.log(email);
console.log(city);
// 문자와 변수를 동시에 출력

console.log("내이름은", myName, "이고 이메일은", email, "입니다.");
console.log("내이름은" + myName + "이고 이메일은" + email + "입니다");
console.log(
  `
  내 이름은 
  ${myName} 
  이고 이메일은 
  ${email} 
  입니다. 
  `
);

let gildong = console.log(
  `
  내 이름은 
  ${myName} 
  이고 이메일은 
  ${email} 
  입니다. 
  `
);

console.log(gildong);

// 2, number
let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);
// NaN : Not a Number : 숫자가 아닐때 뜸.
console.log("apple" - 3);

// 3. boolean
let checked = true;
let unchecked = false;
console.log(checked);
console.log(unchecked);

// 4. undefined
let undef;

// 5.null
let empty = null;

//
// 배열 , 객체
//

// 6. 배열
let fruits = ["오렌지", "핑크레몬", "골드애플", "딸기"];

let fruits2 = new Array("orange", "pineapple", "grape", "apple");
console.log(fruits[0], fruits[1]);

let data = [1, "smurf", false, null, undefined];

console.log(data[4]);
console.log(data[3]);
console.log(data[0]);

// array: 2차원 배열

let korean = [
  ["가", "나", "다"],
  ["마", "바", "사"],
  ["사", "아", "바"],
];

console.log(korean[0][0]); // ?
console.log(korean[1][1]); // ?

let letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters[3][0],
  letters[1][3],
  letters[0][1],
  letters[0][3],
  letters[2][2]
); // ?

//3차원 배열
let numS = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(numS[1][0]); // ?
console.log(numS[1][0][2]); // ?

// 7. object

let cat = {
  name: "나비",
  age: 11,
  isCute: true,
  mew() {
    return "냐옹";
  },
};

//점 표기법 object.key이름
console.log(cat.name); //?
console.log(cat);
console.log(cat.mew());
//대괄호 표기법 [ ""]
console.log(cat["name"]);

const who = {
  name: "이현민",
  live: "인천",
};
console.log(who);
console.log(who.name);
console.log(who.live);

//typeof

const whichData = 1;
const thisIsAString = "1";
console.log(`${typeof 1} isn't ${typeof "1"} data type.`); //?

//형 변환

//프롬프트는 문자열값으로 저장이 된다.
let mathScore = "100"; //?
let englishScore = "90";
let avg = (mathScore + englishScore) / 2;
console.log(avg);

// 자동 형변환의 문제점 :

//문자로 변환 String();
//숫자로 변환 Number();

let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));

let n1 = true;
let n2 = false;
let n3 = "123.9";

console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(parseInt(n3));

let 수학점수 = "77";
let 영어점수 = "88";
let avgScore = (Number(수학점수) + Number(영어점수)) / 2;

console.log(avgScore);

//변수

//var 안씀
//let 재할당 가능 재선언
//const 재선언 재할당 안댐

// % 나머지 연산자
// ** 거듭제곱 연산자
// num = num +5 // num += 5
// 증감 연산자
// num++;
// num--;

var name = "홍길동";
console.log(name);

// let 은 재선언 불가능 / 재할당만 가능

let a = 1;
let a = 2; // 재선언 안됨.
a = 2; // 재할당은 됨.

let aa;
aa = 3;

// const : 재선언 불가 / 재할당 불가
// 선언과 동시에 초기화 해야함

// const b; // 초기화해야함.

// 식별자(변수,함수)이름 규칙
// 1. $ _ 만 가능
let $ = 5;
let _ = 6;
// 2. 숫자가 맨 처음이면 안됨
// 3. 예약어 금지 (let const ver)

// 논리 연산자 ||(OR) &&(AND) !(NOT)
// && 모든값이 true 면 true / 아니면 false
// || 하나값이 true 면 true / 아니면 false
// ! 값의 반대


// 문자열끼리의 연산
// 더하기 : 나열
// 나머지 : 실제연산이됨