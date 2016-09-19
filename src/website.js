/*
* @Author: Jiang Guoxi
* @Date:   2016-09-12 14:07:18
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-09-12 14:09:19
*/

function dianzan () {
  zanAll();
  goToNextPage();
  setTimeout(() => {
    dianzan();
  }, 500);
}
function goToNextPage () {
  document.querySelector('.znxt').click();
}
function zanAll () {
  document.querySelectorAll('i.zan').forEach(item => item.click());
}
