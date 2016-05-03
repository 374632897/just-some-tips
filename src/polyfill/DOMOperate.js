/*
* @Author: JGX
* @Date:   2016-02-27 10:38:27
* @Last Modified by:   JGX
* @Last Modified time: 2016-02-27 11:01:53
*/

'use strict';
var TYPE_NOTDOM_ERROR = 'The object is not a DOM object';
Object.prototype.addClass = function (cls) {
  if (!this.tagName) {
    throw new Error(TYPE_NOTDOM_ERROR);
    return;
  }
  this.className += ' ' + cls;
}
Object.prototype.removeClass = function (cls) {
  if (!this.tagName) {
    throw new Error(TYPE_NOTDOM_ERROR);
    return;
  };
  var clsName = this.className, re = new RegExp('(?:\\b)?' + cls + '(?:\\b)?');
  this.className = clsName.replace(re, '').trim();
}