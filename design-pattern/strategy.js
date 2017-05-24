// const strategyMap = {
//   S: 4,
//   A: 3,
//   B: 2
// };

// const strategies = Object.keys(strategyMap).forEach(item => {

// });

const strategies = {
  S (base) {
    return base * 4;
  },
  A (base) {
    return base * 3;
  },
  B (base) {
    return base * 2;
  }
}

const calcBonus = function (level, base) {
  return strategies[level](base)
}
console.log(calcBonus('A', 20000))
console.log(calcBonus('S', 15000))
