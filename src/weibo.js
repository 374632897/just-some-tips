/*
* @Author: Jiang Guoxi
* @Date:   2017-02-06 22:12:43
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2017-02-06 23:11:19
*/
function getWeiboWrapper () {
  return document.querySelectorAll('.WB_cardwrap.WB_feed_type.S_bg2');
}
function getHeader () {
  return new Headers({
    'Content-Type', 'application/x-www-form-urlencoded',
    'Cookie', '',
    'X-Requested-With', 'XMLHttpRequest'
  });
  // const headers = new Headers();
  // headers.append('Content-Type', 'application/x-www-form-urlencoded')
  // headers.append('Cookie', '')
  // headers.append('X-Requested-With', 'XMLHttpRequest')
  // return headers;
}

var headers = getHeader();

function innerFetch (url, body) {
  fetch(url, { method: 'POST', body, headers, mode: 'no-cors', credentials: 'include' });
}

function delItem (item) {
  const url = '/aj/mblog/del?ajwvr=6';

  const weiboId = item.getAttribute('mid') - 0;
  innerFetch(url, `mid=${weiboId}`);
}
function delWeibo () {
  getWeiboWrapper().forEach(item => delItem(item));
}

function unFollowItem (item) {
  const url = '/aj/f/unfollow?ajwvr=6&__rnd=1486392042329';
  const body = item.getAttribute('action-data');
  innerFetch(url, body);
}
function unFollowAll () {
  document.querySelectorAll('li.member_li.S_bg1').forEach(item => unFollowItem(item));
}

function removeAFance (item) {
  const url = '/aj/f/remove?ajwvr=6&__rnd=1486392853007';
  const user = item.getAttribute('usercard');
  if (!user) return;
  const uid = user.match(/\d+/)[0];
  innerFetch(url, `uid=${uid}`);
}
function removeAllFance () {
  document.querySelectorAll('li.follow_item.S_line2 > dl > dd > .info_name.W_fb.W_f14 > a').forEach(item => removeAFance(item));
}
// removeAllFance();
// unFollowAll();
// delWeibo();
