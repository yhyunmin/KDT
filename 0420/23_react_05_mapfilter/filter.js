//// map()
// const list = ['a', 'b', 'c', 'd', 'e'];
//
// // 일반 for문으로 배열의 각 원소를 출력
// for (let i = 0; i < list.length; i++) {
//   console.log(list[i]);
// }
//
// // map()
// const items = list.map((txt, id, arr) => {
//   console.log('txt : ', txt); // 원소값
//   console.log('id : ', id); // 인덱스 위치
//   console.log('arr: ', arr); // 현재 순회하고 있는 배열 전체
//
//   return `${id} 위치에 ${txt} 원소가 있음`;
// });
// console.log('items >>> ', items);

// filter()
//  js 배열 내장 함수
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아서
// true면 요소 유지,false면 버림 : 새로운 배열을 반환
const animals = ["dog", "cat", "rabbit"];
const newAnimals = animals.filter((animal) => {
  return animal.length > 3;
});
console.log(newAnimals); // ?
const newAnimals2 = animals.filter((animal) => {
  return animal.includes("a");
});
console.log(newAnimals2);

// 퀴즈
const nums = [1, 2, 3, 4, 5];
const words = ["dog", "cat", "rabbit", "apple", "wow"];

// 1. map()를 이용해서 dobbleNums 배열에 [2, 4, 6, 8, 10]이 반환되도록 코드 작성
const dobbleNums = nums.map((number) => {
  return number * 2;
});
console.log(dobbleNums);

// 2. filter() 이용해서 글자에 t 포함 필터링하는 newWords 배열 작성
const newWords = words.filter((word) => word.includes("t"));
console.log(newWords);
