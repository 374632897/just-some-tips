/*
* @Author: Jiang Guoxi
* @Date:   2016-09-09 18:07:34
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-09-09 18:49:58
*/
const template = `
  <div class = 'bar'>
    <span class="fg"></span>
    <span class="ball"></span>
  </div>
`;
const $ = ele => document.querySelector(ele);
const WIDTH = 800;
class Progress {
  constructor () {
    this.init();
  }
  init () {
    // this.el = this.initEle();
    this.initEle();
    this.getEle();
    this.setWidth(30);
    this.handleEvent();
    this.isDragging = false;
  }
  initEle () {
    const el = this.el = document.createElement('div');
    el.className = 'progress-bar';
    el.innerHTML = template;
    el.style.width = WIDTH;
    return el;
  }
  find (sel) {
    return this.el.querySelector(sel);
  }
  getEle () {
    this.$fg = this.find('.fg');
    this.$ball = this.find('.ball');
    this.$bar = this.find('.bar');
  }
  setWidth (_width = 0) {
    const width = this.getWidthPercent(_width);
    // console.info(_width);
    // const width = _width / WIDTH * 100;
    // if (width > 100 || width < 0) return;
    this.$fg.style.width = width + '%';

    this.$ball.style.left = width + '%';
  }
  getWidthPercent (_width = 0) {
    const width = _width / WIDTH * 100;
    if (width > 100 || width < 0) return false;
    return width;
  }
  handleEvent () {
    this.drag();
  }
  on (ele, type, fn) {
    ele.addEventListener(type, fn, false);
  }
  drag () {
    this.on(this.$ball, 'mousedown', this.mousedown.bind(this));
    this.on(document, 'mousemove', this.mousemove.bind(this));
    this.on(document, 'mouseup', this.mouseup.bind(this));
    this.on(this.$bar, 'click', this.click.bind(this));
  }
  click (e) {
    this.setWidth(e.clientX)
  }
  mousemove (e) {
    if (this.isDragging) {
      console.info(e.clientX);
      this.setWidth(e.clientX - this.clientX);
    }
  }
  mousedown (e) {
    this.clientX = e.clientX;
    this.isDragging = true;
  }
  mouseup (e) {
    this.isDragging = false;
  }
}
document.body.appendChild(new Progress().el);
