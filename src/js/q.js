/*
* @Author: Jiang Guoxi
* @Date:   2016-09-13 17:33:16
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-09-13 17:34:52
*/
const $btn = document.querySelector('.btn');
function check () {
  if ($btn.classList.contains('disabled')) return;
  $btn.click();
}

setTimeout(check, 500);
