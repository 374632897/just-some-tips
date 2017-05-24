const getSingle = function (Ctor) {
  var singleton;
  return function (...args) {
    if (singleton) {
      if (singleton.updateInstance) singleton.updateInstance(args)
    } else {
      singleton =  new Ctor(args)
    }
    return singleton;
  }
}

const _Person = class {
  constructor (name) {
    this.name = name;
  }
  sayName () {
    console.log(this.name)
  }
  updateName (name) {
    this.name = name
  }
  updateInstance (name) {
    this.updateName(name)
  }
}
const Person = getSingle(_Person);

const person1 = new Person('Jason');
console.log(person1.sayName())
const person2 = new Person('Daisy')
console.log(person2.sayName())

console.log(person1 === person2)
