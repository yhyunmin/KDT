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
