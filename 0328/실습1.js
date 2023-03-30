function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function back() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}
function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("callback hell");
      resolve("callback hell");
    }, 1000);
  });
}

async function exec() {
  const name = await call("kim");
  console.log(`${name}반가워`);
  const cb = await back("back");
  console.log(`${cb}를 실행했구나`);
  const hell2 = await hell();
  console.log(`여기는${hell}`);
}
exec();
