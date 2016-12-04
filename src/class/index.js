let instance;
class Person {
  constructor (options) {
    if (new.target) {
      throw new Error('Please Use Person.getInstance method to get an instance of person');
      // return Person.getInstance(options);
    }
    this.name = options.name;
  }
  static getInstance (options) {
    console.info('getInstance')
    if (instance) return instance;
    console.info('return')
    return new Person(options);
  }
}
Person.getInstance({name: 'J'})
// new Person({name: "J"})
// new Person({name: "J"})
