var test = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 4000);
  });
};

var get = async function () {
  return await test();
}
get().then(item => console.log(item))
