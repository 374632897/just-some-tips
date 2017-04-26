const obj = {
  name: 'Jason',
  sayName (v1, v2, v3) {
    console.log(v1, v2, v3)
    console.log(this.name)
  }
}

Function.prototype.myBind = function (context = null, ...args) {
  return function () {
    return this.apply(context, args.concat(arguments));
  }
}

obj.sayName();

const obj2 = {
  name: 'Daisy'
};
const sayName = obj.sayName.bind(obj2);
sayName('v3');


const str = '北京';
console.log(escape(str))
console.log(encodeURI(str));
console.log(encodeURIComponent(str))
