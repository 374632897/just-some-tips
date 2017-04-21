function Animal (name) {
  if (this instanceof Animal) {
    this.name = name;
  } else {
    return new Animal(name);
  }
}
function Dog () {
  Animal.call(this, 'dog');
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;// 这样的话Animal的实例的构造器也会变成Dog→_→
var dog = new Dog();
console.log(dog.constructor)
console.log(dog instanceof Dog)
console.log(dog instanceof Animal)
