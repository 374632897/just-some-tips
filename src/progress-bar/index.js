/*
* @Author: Jiang Guoxi
* @Date:   2016-09-09 18:07:34
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-09-09 21:42:28
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
    this.initStatus();
    this.initEle();
    this.getEle();
    this.setWidth(30);
    this.initDrag();
    // this.isDragging = false;
  }
  initStatus ()  {
    this.isDragging = false;
    this.preWidth = 0;
    this.mouseDown = false;
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
    let width;
    if (!this.ballLeft) {
      this.ballLeft = this.getLeftOfBall();
    }
    if (this.isClick) {
      width = _width + 5;;
    } else {
      width = this.ballLeft + _width;
    }
    width = this.getWidthPercent(width);
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
  initDrag () {
    this.on(this.$ball, 'mousedown', this.mousedown.bind(this));
    this.on(document, 'mousemove', this.mousemove.bind(this));
    this.on(document, 'mouseup', this.mouseup.bind(this));
    this.on(this.$bar, 'click', this.click.bind(this));
  }
  click (e) {
    this.isClick = true;
    this.setWidth(e.clientX);
    this.isClick = false;
  }
  mousemove (e) {
    if (this.isDragging) {
      this.setWidth(e.clientX - this.clientX);
      this.mouseDown = false;
    }
  }
  mousedown (e) {
    this.mouseDown = true;
    this.isDragging = true;
    this.clientX = e.clientX;
    this.ballLeft = this.getLeftOfBall();
  }
  getLeftOfBall () {
    return this.$fg.offsetWidth + this.$ball.offsetWidth / 2;
    // const parent = this.$ball.parentElement;
    // return (this.$ball.offsetLeft - parent.offsetLeft) + this.$ball.offsetWidth / 2;
  }
  mouseup (e) {
    this.isDragging = false;
  }
}
document.body.appendChild(new Progress().el);
