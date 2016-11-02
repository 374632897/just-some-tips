/*
* @Author: Jiang Guoxi
* @Date:   2016-10-19 10:49:36
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-10-19 15:48:49
*/

const $ = ele => document.querySelector(ele);

const $list = $('ul'), $sure = $('.sure'), $cancel = $('.cancel'), $box = $('.confirm-box');
{

  $list.onclick = (e) => {
    if (e.target.tagName.toLowerCase() !== 'li') return;
    console.info(e.target.innerHTML, 'click');
    $box.classList.add('show');
  }
  function hideBox () {
    $box.classList.remove('show');
  }
  $sure.onclick = (e) => {
    console.info('sure click');
    hideBox();
  }
  $cancel.onclick = (e) => {
    console.info('cancel click');
    hideBox();
  }
}

{
  const $$ = ele => document.querySelectorAll(ele);

  const $li = $$('li');
  $li.forEach(item => {
    item.click();
    $sure.click();
  });
  // for (let a of $li) {
  //   a.click();
  //   $sure.click();
  // }
  // function *gLi (doSth) {
  //   let i = 0, len = $li.length;
  //   while (i < len) {
  //     yield $li[i++];
  //   }
  // }
  // const getLi = gLi();
  // while (true) {
  //   const { done, value } = getLi.next();
  //   if (done === true) break;
  //   value.click();
  //   $sure.click();
  // }

}
