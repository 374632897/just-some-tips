const { tip } = require('../../utils/func');
const MAX = 10000;
function doLoop (fn = function () {}, max = MAX) {
  for (let i = 0; i < max; i++) {
    fn();
  }
}
function useIf () {
  doLoop(() => {
    if (10 > 100) {
      return true;
    } else {
      return false;
    }
  });
}
function useOperator () {
  doLoop(() => 10 > 100 ? true : false);
}
tip(useIf);
tip(useOperator);
