/*
* @Author: Jiang Guoxi
* @Date:   2016-09-08 10:44:41
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-09-08 10:49:51
*/

var instance = null;
var Person = class Person {
  static getInstance (options) {
    if (instance) return instance;
    instance = new Person(options);
    return instance;
  }
  constructor (options) {
    if (instance) return instance;
    const { name = '', age = 0 } = options;
    this.name = name;
    this.age = age;
  }
  getInfo () {
    return "My name is " + this.name + ", and I am " + this.age + " years old";
  }
};

var p1 = Person.getInstance({ name: "Jason", age: 22 });
var p2 = Person.getInstance({ name: "Jason", age: 22 });
var p3 = new Person({name: 'Jason'});

