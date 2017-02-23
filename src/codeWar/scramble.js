const assert = require('assert');
function scramble(str1, str2) {
  str1 = str1.split('').sort().join('')
  return str2.split('').every(item => new RegExp(item + `\{${str2.match(item).length},\}`).test(str1))
}

assert.equal(scramble('rkqodlw','world'),true);
assert.equal(scramble('cedewaraaossoqqyt','codewars'),true);
assert.equal(scramble('katas','steak'),false);
assert.equal(scramble('scriptjava','javascript'),true);
assert.equal(scramble('scriptingjava','javascript'),true);
assert.equal(scramble('scriptsjava','javascripts'),true);
assert.equal(scramble('jscripts','javascript'),false);
assert.equal(scramble('aabbcamaomsccdd','commas'),true);
