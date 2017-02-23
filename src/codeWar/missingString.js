
function findMissingLetter(array) {
  let i = 0, len = array.length;
  while (i < len) {
    const code = array[i].charCodeAt() + 1;
    if (code !== array[++i].charCodeAt()) return String.fromCharCode(code);
  }
  return '';
}

console.log(findMissingLetter(['a','b','c','d','f'])) // e
