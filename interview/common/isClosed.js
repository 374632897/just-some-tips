function exp (str) {
  return str.split('{').length === str.split('}').length;
}

console.log(exp('{{}}}'))
console.log(exp('{{{}}}'))
console.log(exp('{}'))
console.log(exp('{{}'))
