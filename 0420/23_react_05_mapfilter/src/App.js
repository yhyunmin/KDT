// filter()
//  js 배열 내장 함수
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아서
// true면 요소 유지,false면 버림 : 새로운 배열을 반환
function App() {
  const animals = ["dog", "cat", "rabbit"];
  const newAnimals = animals.filter((animal) => {
    return animal.length > 3;
  });
  console.log(newAnimals); // ?
  const newAnimals2 = animals.filter((animal) => {
    return animal.includes("a");
  });
  console.log(newAnimals2);

  const nums = [1, 2, 3, 4, 5];
  const tripleNums = nums.map((n) => n * 3);
  console.log(tripleNums);

  return <div className="App"></div>;
}

export default App;
