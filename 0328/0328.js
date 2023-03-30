// async / await
// 비동기 처리 패턴중 가장 최신 문법
// promise 기반 코드를 더 가독성 있게 하기 위해 등장.
// 구조
// - 함수 앞에 async 키워드 붙이기
// - 비동기 처리 메서드 앞에 await 키워드 붙이기 ( 해당 작업을 기다려 줄 것 )
// async function 함수명() {
//   await 비동기처리메서드명();
// }
// async 랑 await 는 세트 ! 같이 써야함.

// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fruits = ["🍉", "🍓", "🍊"];
      resolve(fruits);
      reject(new Error("알 수 없는 에러 "));
    }, 1000);
  });
}

// #1 promise. then() 사용시
fetchFruits()
  .then((fruits) => {
    console.log(fruits);
  })
  .catch((error) => {
    console.log(error);
  });

// #2 async/await 사용시
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (error) {
    console.log(error);
  }
}

printItems();

// async/await 예외처리는 try catch 를 사용한다
try {
  // 코드 실행 ing
  // 에러 발생시 catch로 이동
} catch (error) {
  // 에러 관리
}
// - try 블록 코드가 실행
// - try 블록에서 에러가 없다면 .catch 블록은 건너뜀
// - try 블록에서 에러가 있다면, try 블록 실행이 중단 -> catch 블록 코드 실행
