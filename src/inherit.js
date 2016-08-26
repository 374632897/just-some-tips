/*
* @Author: Jiang Guoxi
* @Date:   2016-08-26 15:50:55
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-08-26 16:03:40
*/

var Person = function (name) {
  this.name = name;
};

Person.prototype.sayName = function () {
  console.log(this.name);
};



var Male = function (name) {
  Person.call(this, name);
  this.gender = 'male';
};

Male.prototype = Object.create(Person.prototype, {
  constructor: {
    value: Male,
    enumerable: true,
    writable: true,
    configurable:true
  }
});

var person = new Person('Jason');
var Jason = new Male('Jason');
