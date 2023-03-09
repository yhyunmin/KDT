"strict mode";
//
// 1.  조건문
//
if (5 > 3) {
    console.log("얍");
}
let number = Number(prompt("숫자를 입력 하세요"));
console.log(typeof number);
if (number > 10) {
    console.log("이 수 는10보다큽니다");
}
else {
    console.log("이 수는 10 보다 작거나 같습니다");
}
if (number > 10) {
    console.log("이 수는 10보다 큽니다");
}
else if ((number = 10)) {
    console.log("이수는 10이네요");
}
else {
    console.log("입력한 수가 10보다 작습니다");
}
if (number > 100 && number < 0) {
    console.log("입력 값이 잘못 되었습니다");
}
else if (number >= 90) {
    console.log("A");
}
else if (number >= 80) {
    console.log("B");
}
else if (number >= 70) {
    console.log("C");
}
else if (number >= 60) {
    console.log("D");
}
else {
    console.log("F");
}
// 퀴즈
//
//
let age;
age = Number(prompt("몇살"));
if (age > 120 && age < 0) {
    console.log("나이가 잘못 됐서요");
}
else if (age >= 20) {
    console.log("성인");
}
else if (age >= 17) {
    console.log("고등학생");
}
else if (age >= 14) {
    console.log("중학생");
}
else if (age >= 8) {
    console.log("초등학생");
}
else if (age >= 0) {
    console.log("유아");
}
// db
let userID = "user01";
let userPw = "1234qwe";
function loginUser() {
    let inputID = prompt("ID입력");
    let inputPw = prompt("PW입력");
    //아이디가 틀렸습니다
    //아이디를 입력하지 않았습니다
    // 비밀번호가 틀렸습니다
    // 로그인 성공
    if (!inputID) {
        alert("아이디를 입력하지 않았습니다");
        return;
    }
    else if (!(inputID === userID)) {
        alert("아이디가 틀렸습니다");
        return;
    }
    else if (!(inputPw === userPw)) {
        alert("비밀번호가 틀렸습니다");
        return;
    }
    else {
        alert("로그인 성공");
    }
}
// switch
//
//
// 퀴즈 ! switch 문으로 성적 산출 프로그램 변경 !
// 조건 : 0 ~ 100 이외의 수는 들어오지 않는다고 가정
let point;
point = Number(prompt("점수"));
switch (Math.floor(point / 10)) {
    case 10:
        console.log("A");
        break;
    case 9:
        console.log("B");
        break;
    case 8:
        console.log("C");
        break;
    case 7:
        console.log("D");
        break;
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("F");
        break;
    default:
        console.log("점수가 잘못됐습니다");
}
//
// IF 문을 간단하게 표현하는 방법
//
// 조건식 ? 참 : 거짓 ;
// 삼항 연산자
let num = 5;
if (num % 2 === 1) {
    console.log("홀수");
}
else {
    console.log("짝수");
}
// =>
num % 2 === 1 ? console.log("홀수") : console.log("짝수");
// 한줄로 처리 할 수 있다.
// Q U I Z
//
let now = new Date().getHours();
// 0-23까지의 숫자를 반환 // 0 이 자정 12가 정오
// now 라는 변수에는 현재시간 숫자가 저장되어 있다.
console.log("now", now); // ?
console.log("(now<12?'오전':'오후')", now < 12 ? "오전" : "오후"); // ?
let time = now < 12 ? "오전" : "오후";
console.log("time", time);
for (let i = 0; i < 10; i++) {
    console.log('"안녕",i', "안녕", i);
}
console.log("=========");
for (let i = 0; i < 10; i = i + 3) {
    console.log("i", i);
}
// 1부터 5까지 출력
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let n = 11;
let sum = 0;
// 1부터 n 까지의 합
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log("sum", sum);
// 배열과 for 문
const fruits = ["사과", "배", "포도", "망고"];
for (let i = 0; i < fruits.length; i++) {
    console.log("fruits[i]", fruits[i]);
}
//배열내 숫자 합 구하기
let numberArr = [90, 50, 30, 20, 11];
let sumArr = 0;
for (let i = 0; i < numberArr.length; i++) {
    sumArr += numberArr[i]; // ?
}
console.log("sumArr", sumArr);
let sum2 = 0;
for (let i = 0; i <= 20; i++) {
    sum2 = sum2 + 1;
}
console.log("sum2", sum2);
// 실습
// 10000까지의 숫자 중에서
// 13의 배수면서 홀수인 숫자를 찾아 봅시다!
// + prompt를 이용해서 입력받은 수 까지 13의 배수면서 홀수인 숫자를 찾는 프로그램 만들기
// 숫자는 10000 숫자2는 prompt
// 13의 배수 // 그중에서 또 훌수
//
let 숫자 = 10000;
let 숫자2 = Number(prompt("숫자몇 ?"));
for (let i = 1; i <= 숫자; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        //조건이 적은 거먼저 앞으로 나열 ( false 확률이 높은 것 먼저)
        console.log("i", i); // ?
    }
}
for (let i = 1; i < 숫자2; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log("i", i); // ?
    }
}
// 구구단 만들어 보기
for (let i = 2; i < 10; i++) {
    console.log("`${i}단`.", `${i}단`);
    for (let j = 1; j < 10; j++) {
        console.log(`${i}x${j}=${i * j}`);
    }
}
//
// 반복문
//
// break ;  멈추고 반복문을 빠져나옴
// continue : 반복문을 한번만 멈추고(조건에 따라) 다음 반복문을 실행
let n2 = 1;
while (n2 <= 5) {
    console.log("n2", n2);
    n2++;
}
let n3 = 10;
while (n3 >= 5) {
    console.log("n3", n3);
    n3--;
}
let n4 = 10;
while (n4 >= 1) {
    if (n4 % 2 === 0) {
        console.log("n4", n4);
    }
    break;
}
// 무한루프 조심 할것
// 무한루프를 이용한 무언가 만들기
let n5 = 0;
while (confirm("계속 진행")) {
    // confirm에 취소는 false이다.
    n5++;
    alert(`${n5}번째 alert 창`);
}
//continue
let sum3 = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log('i', i);
    sum3 += i;
}
console.log("sum3", sum3);
