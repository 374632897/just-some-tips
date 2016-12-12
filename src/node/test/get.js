const getWrapper = function (resolve, rejext) {
  return {
    success (cb) {
      cb()
    },
    error (cb) {

    }
  }
};
const get = function (isSuccess) {
  const successData = 'Good Job';
  const errorData = 'Oops';
  const wrapper = getWrapper();
  setTimeout(() => {
    if (isSuccess) {
      wrapper.success(successData);
    } else {
      wrapper.error(errorData);
    }
  });
  return wrapper;
}

// get(true).success(item => console.log(item));
console.log(Buffer.isEncoding('base64'));
