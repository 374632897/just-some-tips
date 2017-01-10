const { tip, doLoop } = require('../../utils/func');

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

tip(useIf); // 2.880ms
tip(useOperator); // 0.744ms
