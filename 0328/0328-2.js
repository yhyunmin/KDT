function goMart() {
  console.log("마트에 가서 어떤 음료 살지를 고민해보자");
}

function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝");
      product = "제로콜라";
      price = 2000;

      if (price <= 2000) {
        resolve();
      } else {
        // price >2000
        reject();
      }
    }, 3000);
  });
}

let price;
let product;

function pay() {
  console.log(`상품명:${product},가격 :${price}}`);
}

async function exec() {
  try {
    goMart(); // 1번 실행
    await pickDrink(); // 2번 실행
    pay(); // 2번 실행후 pay 실행}
  } catch (error) {
    console.log(error);
  }
  // 장점) 코드 실행 순서가 명확히 보인다.
}

exec();

function color(c) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(c); // 실행이되면 , then 으로 연결됨.
      document.body.style.backgroundColor = c;
      // reject("error 뜸");
    }, 1000);
  });
}

// await를 쓰려면 메소드가 프로미스를 반환해야함.

async function changeColor() {
  try {
    const test = await color("red");
    console.log(test);
    await color("orange");
    await color("yellow");
    await color("green");
    color("blue");
  } catch (error) {
    console.log(error);
  }
}

changeColor();
