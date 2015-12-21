# just-some-tips
##前端学习中积攒的一些小经验
###2015-12-10
==========
1. 在一个页面的制作中，如果是定宽的就统一定宽，或者使用百分比，假设文档中有5行，其中三行是用的百分比来规定宽度，另外两行是直接定了宽度的    话 ，那么在页面缩放的时候，那三行的宽度会变成可视区的宽度，但是另外两行的宽度不会变化，这样，另外两行就会把页面给撑开，从而导致页面底    部出现滚动条，当把滚动条向右边拖动的时候，就会看到设置百分比宽度的那几行右边会有留白。解决办法：统一宽度的设置方式，全部都定宽，或者全    部都设为百分比。
2. 关于多列布局的一个比较好的方法是：a. 获取列宽度的百分值，然后用1-百分值*列数就会得到剩余的空间，再把这个空间除以列数-1，这样就能得到每
   一列之间的间隙，在设置的时候，使用相邻选择器，设置margin-left为得到的间隙值即可。

----------

###2015-12-11
======
1. 如果在浏览器不同标签页里发现同一页面的呈现情况不一致。。。比如说屏幕本身宽度为1600ox，但是审查元素的时
   候，显示元素宽度和设定的宽度不一致，那么考虑是不是缩放所致 -- 笑cry

2. 运行命令行进行 npm install 的时候，需要以管理员身份运行
3. 话说之前安装node-sass的时候提示没有python执行环境，后来不知怎么的又好了，今天安装webpack的时候也这样，
   我稀里糊涂的安装了一些东西，后来    也成功了，真是不知道怎么回事。
4. 如果链接在行尾因为宽度不够而导致内容换行显示，那么对链接设置display:inline-block即可。
5. 

###2015-12-15
=====
1. new Date和new Date()的执行结果相同，但是new Date不具有Date对象的相关方法，而new Date()则可以。这里其实
   可以直接理解为，带括号之后，指向的是该函数的返回值，而不带的时候，指向的是对这个函数的引用而已。
2. 静态类型语言指的是在编译的时候就已经能够确定变量的值得类型的语言，动态类型语言是指在执行的时候才能确定
   类型的语言，也就是在变量被赋    值之后才能确定其类型。
3. 多态的思想实质上是把做什么和谁去做分离开来。
4. 自调用函数的写法的区别：
   ````
   (function () {console.log('hello'})();
   (function () {console.log('hello'}()); 
   ````
   这里代表函数执行的括号写在内部和写在外部的区别是什么？
   貌似没有什么区别，这是第二种写法是JSlint推荐的写法，这样能能够提升代码整体性
   #括号加在里面，直接获取返回值，里面计算一次;

5. JS 数据封装
  ````
  var myObject = (function () {
    var _name = 'hello';
    return {
      getName: function (){
        return _name;
      },
      setName: function (value){
        return (_name = value);
      }
    };
   }());
   
   ````
  原理：定义一个变量为一个函数的返回值，在这个函数内部，定义了私有变量，在函数的返回值里，对外提供两个方
        法来获取值和设置该私有变量,这样，就形成了私有接口和公共接口。

###2015-12-16
=======
1. 使用new操作符调用函数时，返回的是一个对象，构造器里的this就指向这个对象-。
2. 对象可以使用new操作符后跟要创建的对象类型的名称来创建，如果不给构造函数传递参数，那么可以省略后面的圆
    括号，虽然有效，但是并不推荐。    此外，new Date和new Date()是有区别的，后者可以使用相关方法，而前者不行。这里上面已经提到过了。
   **要搞懂基本类型里的Object类型和引用类型里的Object类型的区别**
3. 
   
   `````
   var obj = {
     name: 'Jiangguoxi,
     getName: function (){
       console.log(this.name);
     }'
   };
   obj.getName();//'Jiangguxoi'
   var getName2 = obj.getName;
   getName2();//所得值为window.name
   obj.getName = function () {console.log (this)};
   obj.getName();//obj
   getName2();//window.name
   `````

   由上面代码的运行结果可以看出，当把一个函数赋给另一个函数的时候，他们之间是按值传递的，也就是说，当之前的函数发生改变的时候，并不会影响另外一个函数。关于这里，还是比较模糊的，总之要记清楚，当把一个对象的方法赋给另一个函数时，他们是按值传递的即可。

###2015-12-17
=======
1. 给元素append一个View的内容的时候，需要改View的模板的内容为(new View).el;
2. 在View里插入模板而不是在路由里。
3. {{ }}用来执行JS，{{- }}用来插入普通变量，{{= }}用来插入需要解析成Html的变量
4. 今日总结：
   * 每次提交代码前要npm run dev:lint
   * 逗号后面要跟空格
   * 不引入未使用的变量
   * 函数参数前后不要有空格
   * super后面不跟空格 也就是super();
   * 在一个作用域内，如果变量不会改变，那么就使用const来代替let或者var 
   * class 块后面不接分号。
   * 在一个块级内部的头部和尾部要接1个空格，如{ name: 'helloworld' }
   * if 语句中，if后面要留一个空格
   * import的内容，如果并不会在后面的代码中使用，那么就直接import而不需要命名。这点在导入CSS的时候尤其需 
     要注意
   * 加载模板需要在constructor里面。
5. 如果陷入死循环，那么注意函数执行的时候是不是一直在自调用。
6. 关于Backbone的View总结内容：
   * 
7. 通过获取label的引用，再调用它的control属性，即可获取到与之关联的元素
8. 关于函数bind方法的实现：

   ```````
   Function.prototype._bind = function(context) {
     var self = this;
     return function () {
       return self.apply(context,arguments);
     }
   };
  ```````


###2015-12-18
==========
1. View要实例化以后才行。 
2. 关于闭包，先看下面一段代码
   
   ````
   var func = function () {
     var a=6;
     return function () {
       return a;
     }
   };

   var f = func();
   f();//6
   ````

   在这里把f指向func的运行结果，而func的运行结果也就是返回一个函数，从而使得f变成了匿名函数的引用，因此，当调用f()时，就会执行该匿名函数，因为该匿名函数是在func内部的，而匿名函数内部又会返回外层函数的a值，从而使得我们可以在func函数的外部获取到func函数内部的值。 

###2015-12-19
=======
1. Array.prototype.push === [].push //true
   后面跟有方法的时候就为true，没有跟方法，则为false
2. 突然就扯到关于原型上的东西了，还是做点笔记吧
   * object.constructor: 表示object的构造器

     ````
     var ary = [];
     ary.constructor === Array;// true;
     ````

     因为ary是Array的实例，所以它的constructor 就指向了它的构造函数Array;
   * function定义的对象有一个prototype属性，而new生成的对象则没有这个属性

     ````
     var Hello = function () {
        this.name = 'Jiangguoxi';
        this.sayName = function () {
          console.log(this.name);
        }
      };

     var hello = new Hello();
     ````
     当对一个函数使用new操作符的时候，会生成一个对象。对象里面的属性和方法会与其构造器中有this的相关联。
     
     Hello.prototype.constructor就等于Hello本身

     而hello.constructor也等于Hello，但是，Hello.prototype 与hello是不等的,因为Hello.prototype是Hello的原型对象，而hello是Hello的实例对象。

   * function 的prototype属性指向prototype对象，而prototype对象的constructor属性，又指向function 本身。
     **所以上面提到的那个问题就有解了。Array.prototype指向的是它的原型对象，原型对象里面封装了一系列的方法，而ary则是Array的一个实例，那么，这个实例就从原型链上继承了对应的方法，所以说，Array.prototype.slice === [].slice**

   * 那么再重新理一理 关于````Array.prototype.slice === [].slice````
     * Array.prototype.slice是原型对象里封装的一个slice方法
     * []相当于是new 了Array，也就是Array的实例。
     * 那么当使用到[].slice方法的时候，由于它本身并没有这个方法，所以就会走原型链上查找，于是在其构造器的原型对象中找到了这个方法，所以说，他们是相等的喃。
     * 现在理清之后感觉好简单，之前却一直没搞懂o(╯□╰)o  果然是人太笨了

   * 注意区分定义对象的属性和定义构造函数

     `````
     //定义对象
     var person = {
       name: 'Jiangguoxi',
       sayName: function () {
         console.log(this.name);
       }
     };

     //定义构造函数
     var Person = function (){
       this.name = 'Jiangguoxi';
       this.sayName = function () {
         console.log(this.name);
       };
     };
     `````
   
###2015-12-20
======
1. 构造函数的实例具有[[Prototype]]内部属性，可以把该属性理解为指向其构造函数的原型对象的指针。谷歌、FF、Safari提供了_proto_。需要注意的是，在所有实现中都无法访问到[[Prototype]],但是可以通过Person.prototype.isPrototypeOf(person)来确定对象之间是否存在这种关系。__proto__(**注意是__而不是_也就是说，是两条下划线而不是一条**)是存在于实例和构造函数的原型对象之间而不是实例和构造函数之间 。
2. Backbone ,View里面给template传值，是在把模板插入el中的时候，在模板的参数里面传的。如：this.$el.html(template(variables))
3. 在Model的校验中，需要给Model绑定校验失败的时候，应该用this.bind('invalid',fn)而不是this.bind('error',fn);同时，设置Model的属性的时候，也要传入第二个参数{validate: true}来强制验证。如：Person.set( {name: 'Jiang Guoxi'},{validate: true} ); Validation默认只在save的时候触发
   model（模型）验证现在只默认执行在save中 —不再执行在set中，除非传递了{validate:true}选项。model（模型）验证现在会触发一个 "invalid"事件，而不是"error"事件。
4. 函数柯里化
   * 基本方法：使用一个闭包返回一个函数，当函数被调用时，返回的函数还需要设置一些传入的参数


#Problems
=======
1. 关于基本类型中的Object类型和引用类型中的Object类型的区别
2. 按值传递和按引用传递的类型分别有哪些？
3. **有个小问题，是在官网制作过程中发现的，部分jpg图片在其他浏览器下显示正常，但是在IE下无法显示，不管是哪个版本的浏览器，都显示无法解码。考虑到之后会更换图片，所以这个问题暂时搁置，但是有时间了还是有必要研究下的。**
4. 关于元素跳行的问题→＿←
5. fileLeft，文件夹名字过长会出现跳动问题。。。。
