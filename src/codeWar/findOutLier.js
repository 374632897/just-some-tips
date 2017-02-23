function findOutlier(integers){
  const isOdd = integers.slice(0, 3).filter(item => item % 2 === 0).length > 1;
  console.log(isOdd)
  return integers.filter(isOdd ? item => item % 2 !== 0 : item => item % 2 === 0)[0]
  // return integers.filter(item => item % 2 === isEven ? 0 : 1)[0];
}
// console.log(findOutlier([0, 1, 2]))
// console.log(findOutlier([1, 2, 3]))
// console.log(([0, 1, 2].filter(item => item % 2 === 0)))
var testAry = '-171857298,61108302,102936126,-184736632,191235552,102254304,-37599046,68879318,148320754,-139088104,-156561052,182566978,-118182688,170495734,-179552542,114081310,-53941946,185933848,135440292,9783728,-122143198,29958192,-146894444,-136994282,165260226,-196794952,198137480,-123719844,118494490,-81098136,-133207636,-67211611,39544924'.split(',').map(Number)
console.log(findOutlier(testAry))
console.log(-67211611 % 2)
