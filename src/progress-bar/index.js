/*
* @Author: Jiang Guoxi
* @Date:   2016-09-09 18:07:34
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-09-09 18:16:11
*/
const template = `
  <div class = 'bar'>
    <span class="fg"></span>
    <span class="ball"></span>
  </div>
`;
const $ = ele => document.querySelector(ele);
class Progress {
  constructor () {
    this.init();
  }
  init () {
    this.el = this.initEle();
  }
  initEle () {
    const el = document.createElement('div');
    el.className = 'progress-bar';
    el.innerHTML = template;
    return el;
  }
}
document.body.appendChild(new Progress().el);
