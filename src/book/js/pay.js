// (function () {
  function order500 (orderType, pay, stock) {
    if (orderType === 0 && pay === true) {
      console.log('500元订单下单成功， 获得100现金券')
    } else {
      order200(orderType, pay, stock);
    }
  }
  function order200 (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
      console.log('200元订单下单成功， 获得50现金券')
    } else {
      orderNormal(orderType, pay, stock);
    }
  }
  function orderNormal (orderType, pay, stock) {
    if (stock > 0) {
      console.log('还可以订购')
    } else {
      console.log('库存不足→＿←');
    }
  }
// })();