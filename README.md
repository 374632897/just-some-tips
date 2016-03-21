# just-some-tips
##前端学习中积攒的一些小经验
###2015-12-10
==========
1. 在一个页面的制作中，如果是定宽的就统一定宽，或者使用百分比，假设文档中有5行，其中三行是用的百分比来规定宽度，另外两行是直接定了宽度的    话 ，那么在页面缩放的时候，那三行的宽度会变成可视区的宽度，但是另外两行的宽度不会变化，这样，另外两行就会把页面给撑开，从而导致页面底    部出现滚动条，当把滚动条向右边拖动的时候，就会看到设置百分比宽度的那几行右边会有留白。解决办法：统一宽度的设置方式，全部都定宽，或者全    部都设为百分比。
2. 关于多列布局的一个方法：a. 获取列宽度的百分值，然后用1-百分值*列数就会得到剩余的空间，再把这个空间除以列数-1，这样就能得到每
   一列之间的间隙，在设置的时候，使用相邻选择器，设置margin-left为得到的间隙值即可。


----------

###2015-12-11
======
1. 如果在浏览器不同标签页里发现同一页面的呈现情况不一致。。。比如说屏幕本身宽度为1600px，但是审查元素的时
   候，显示元素宽度和设定的宽度不一致，那么考虑是不是缩放所致 -- 笑cry

2. 如果 npm install 的时候报错，则可以尝试以管理员身份运行
3. 话说之前安装node-sass的时候提示没有python执行环境，后来不知怎么的又好了，今天安装webpack的时候也这样，
   我稀里糊涂的安装了一些东西，后来    也成功了，真是不知道怎么回事。
4. 如果链接在行尾因为宽度不够而导致内容换行显示，那么对链接设置display:inline-block即可。
5. 

###2015-12-15
=====
1. new Date和new Date()的执行结果相同，但是new Date不具有Date对象的相关方法，而new Date()则可以。直接使用Date()得到的会是一个日期的字符串表示。 ~~这里其实
   可以直接理解为，带括号之后，指向的是该函数的返回值，而不带的时候，指向的是对这个函数的引用而已.~~   
    **2016/3/13注： 这里其实涉及到的是运算符优先级的问题**
     
  ```js
  new Date.getFullYear(); // Uncaught TypeError: Date.getFullYear is not a constructor(…)
  new Date().getFullYear(); // 2016
  (new Date).getFullYear(); // 2016
  (new Date()).getFullYear(); // 2016
  ```
  也就是说，其实这里因为``new Date``的时候没有带参数， 所以``new`` 的优先级要低于`.``的优先级， 因此会先尝试访问``Date.getFullYear``, 但是这样得到的结果是`undefined`，然后再执行new，由于``undefined``不是构造函数， 所以就会报错了。 因此当给``new Date``加上括号之后， 提升了语句的优先级， 就不会报错了。 圆括号的优先级是最大的。而至于这里带不带括号的问题， 其实无关紧要， 在需要传递参数的时候自然需要带括号， 如果不传递参数， 可以不带。   
  附： [运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
2. 静态类型语言指的是在编译的时候就已经能够确定变量的值的类型的语言，动态类型语言是指在执行的时候才能确定
   类型的语言，也就是在变量被赋值之后才能确定其类型。
3. 多态的思想实质上是把做什么和谁去做分离开来。
4. 自调用函数的写法的区别：
   ````javascript
   (function () {console.log('hello'})();
   (function () {console.log('hello'}()); 
   ````
   这里代表函数执行的括号写在内部和写在外部的区别是什么？
   貌似没有什么区别，这里第二种写法是JSlint推荐的写法，这样能能够提升代码整体性
   **括号加在里面，直接获取返回值，里面计算一次;**

5. JS 数据封装
  ````javascript
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
    括号，虽然有效，但是并不推荐。    此外，new Date和new Date()是有区别的，~~后者可以使用相关方法，而前者不行。这里上面已经提到过了。~~
   **要搞懂基本类型里的Object类型和引用类型里的Object类型的区别**
3. 
   
   `````javascript
   var obj = {
     name: 'Jason',
     getName: function (){
       console.log(this.name);
     }
   };
   obj.getName();//'Jason'
   var getName2 = obj.getName;
   getName2();//所得值为window.name
   obj.getName = function () {console.log (this)};
   obj.getName();//obj
   getName2();//window.name
   `````
   
  ```js
  const obj = {
    name : 'JGX',
    detail: {
      gender: 'male',
      age: 22,
      favor: 'read',
      saySth () {
        console.log('inner')
      }
    }
  }
  const detail = obj.detail;
  detail.age = 22;
  obj.detail.age; // 22  // 也就是说在这里通过对象的引用对其属性的修改反应在了原对象的内部
  let func = obj.detail.saySth; // 直接访问该对象内部的方法
  func = () => {
    console.log('outer')
  };
  func(); // outer
  obj.detail.saySth(); // inner // 上面重写了func之后并没有反应在源对象上。 
  ```

    
     **2016/3/13注** 
   ~~由上面代码的运行结果可以看出，当把一个函数赋给另一个函数的时候，他们之间是按值传递的，也就是说，当之前的函数发生改变的时候，并不会影响另外一个函数。关于这里，还是比较模糊的，总之要记清楚，当把一个对象的方法赋给另一个函数时，他们是按值传递的即可。~~ 关键在于访问方式。 

###2015-12-17
=======
1. 给元素append一个View的内容的时候，需要改View的模板的内容为(new View).el;实际上， 实例化后的view，其el即为html内饿哦让
2. 在View里插入模板而不是在路由里。
3. {{ }}用来执行JS，{{-}}用来插入普通变量，{{=}}用来插入需要解析成Html的变量~~**注意：等号或者减号后面没有空格**~~ 并不是这样  是等号或者减号前面不能有空格
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

6. 通过获取label的引用，再调用它的control属性，即可获取到与之关联的元素
7. 关于函数bind方法的实现：

   ```````javascript
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
   
   ````javascript
   var func = function () {
     var a=6;
     return function () {
       return a;
     }
   };

   var f = func();
   f(); // 6
   ````

   在这里把f指向func的运行结果，而func的运行结果也就是返回一个函数，从而使得f变成了匿名函数的引用，因此，当调用f()时，就会执行该匿名函数，因为该匿名函数是在func内部的，而匿名函数内部又会返回外层函数的a值，从而使得我们可以在func函数的外部获取到func函数内部的值。 

###2015-12-19
=======
1. Array.prototype.push === [].push //true
   后面跟有方法的时候就为true，没有跟方法，则为false。   
   因为这里在访问`[]`的`push`方法的时候， 实际上是走Array的原型里查找的， 所以这个时候`[].push`就等于`Array.prototype.push`了。 
2. 突然就扯到关于原型上的东西了，还是做点笔记吧
   * object.constructor: 表示object的构造器

     ````javascript
     var ary = [];
     ary.constructor === Array;// true;
     ````

     因为ary是Array的实例，所以它的constructor 就指向了它的构造函数Array;
   * function定义的对象有一个prototype属性，而new生成的对象则没有这个属性

     ````javascript
     var Hello = function () {
       this.name = 'Jason';
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
     * []相当于是new 了一个Array，也就是生成了一个Array的实例。
     * 那么当使用到[].slice方法的时候，由于它本身并没有这个方法，所以就会走原型链上查找，于是在其构造器的原型对象中找到了这个方法，所以说，他们是相等的喃。
     * 现在理清之后感觉好简单，之前却一直没搞懂o(╯□╰)o  果然是人太笨了

   * 注意区分定义对象的属性和定义构造函数

     `````javascript
     //定义对象
     var person = {
       name: 'Jason',
       sayName: function () {
         console.log(this.name);
       }
     };

     //定义构造函数
     var Person = function (){
       this.name = 'Jason';
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

###2015-12-21
======
1. 在向View传递Model的时候，需要将Model实例化，并且只有实例化的Model才能使用toJSON()方法。
2. 在Model中，以前的定义默认参数的defaults:{}，不用写了，直接写在super({})里面就行。

   `````javascript
   class Model extends Backbone.RelationalModel {
     constructor () {
       super({
         //这里写默认属性值
       });
     }
   }
  `````

3. 关于Models和Collection的关联。
   * 建立一个整体的Model，在这个Model里面引入Collection
   * 在这个Model的super()里面，定义一个对引入的Collection的引用
   * 在该Collection里面，引入基础Model,在super里面定义Collection的model为引入的Model，最后导出Collection的实例。
4. 在model中调用collection里的方法的时候，所用的collection一定要是collection的实例才行。
5. 将model与collection关联起来，需要将model的实例添加到collection的实例里面。如todos.add(todo),而关于数据的传递，则是在Model实例化的时候将数据传入的。
6. 将Model 与View关联起来，是通过在给View的模板传参的时候，将实例化的Model转化为JSON数据传入，然后再在View的initialize中添加对model的监听事件，从而将Model和View关联起来
7. 在render() 中要记住````return this````以便支持链式调用
9. 在通过View添加model的时候，先实例化一个ItemView并且传入Model，然后将ItemView的el插入View的html里面。在addOne()里面要传入Model,这个Model应该是和监听事件的Collection所绑定的Model一样？？如：

   ``````javascript
   this.listenTo(Todos,'add',addOne);
   ...
   addOne: function (todo) {
     var view = new TodoView({model: todo});
     this.$(el).append(view.render().el);
   }
   ``````

   如上面所示，addOne参数里的model应该是和上面监听的Collection里面所绑定的model是同一个？
10. 关于使用inline-block进行居中
   * 对父元素设置``text-align:center``;
   * 对子元素设置``display:inline-block``;
   * 这样子的话，即使子元素里面有块级元素，那么该块级元素也不会充满整行 o(╯□╰)o  怎么说呢，感觉就像是里面的块级元素也被设置了inline-block一样，但是事实上他们的display依然是block;
   * 这个方案的缺点就是text-align默认是个继承属性，所以如果其子孙元素的text-align值不符合的话，还要单独写。



###2015-12-22
=======
1. 在添加监听事件时，回调函数不能加括号，如：
   
   `````this.listenTo(this.model, 'change', this.render)`````

   加括号是不行的。 

2. if语句结尾不用加分号

3. 在View里面的events里面，如果触发元素是view的el，那么在事件后面不用加对应的元素，比如一个view的tagName定义为li ,那么在events里面只需要加入``'click   ': 'events'``即可。也就是说，如果触发事件的元素是根元素，那么就只需添加事件类型。

4. 通过View给ViewItem传model的时候，可以在constructor里面引入model，需要注意的是，因为iniatialize会先于constructor里面的内容执行，所以说，在constructor里面定义的属性什么的，不会首先被initialize使用到，解决办法是，把iniatialize里面的语句放到constructor里面去。另外，在constructor里面访问传入的model的时候，需要用model.model才能访问到，这是为什么？**01/08注：这里是因为实例化一个view的时候传入的是一个对象，而model只是这个对象里的一个属性，所以在后面访问的时候，要获取所需model就需要通过对象来获取**

5. 


###2015-12-23
=======
1. ...
2. 关于collection和Model的关联，使用Relational的话：
   * 在定义model的时候使用RelationModel来定义。
   * 在一个管理各个部分的model的总的Model中，定义relations属性，其值应该是一个数组，数组里面存入的是对象
   * relations内对象有四个属性：
     * type: 不知道是什么。。。。值为Backbone.HasMany **3/16: collection => HasMany, Model =>  hasOne**
     * key:  在外部环境中通过这个key来获取对应的对象
     * relatedModel: 所关联的Model
     * collectionType: 所关联的Collection。通过key来获取的就是这个
   * 比如我在外部环境中引入了这个总的Model为model，Model中的relations的key值为Item，那么通过model.get('Item')即可访问到关联的Collection
3. 逻辑是否正确是找出问题的关键。出错的时候，需要考虑是不是自己的逻辑设计不合理
   * 我在collection里面设置的获取order值的时候，之前设置的是如果length=1,则返回1，否则返回最后一个的order加1，但是后来改成Relational之后，默认没有添加model了，所以长度为0,然后获取order的方法没有变，而最后一个Model根本不存在，所以就报错了。

4. 只给input设置高度而**不设置行高**，如果设置了行高的话，Safari下光标会显示异常。**其实是safari版本问题**
5. 如果点击一个元素出现了不期望的行为，则考虑是不是事件冒泡引起的。`e.stopPropagation()`。
6. 实现单击按钮上传文件的话，添加一个label和一个inputFile,将label和file关联起来，然后将file的宽度高度设为0，再设置display:none;
7. 函数节流的实现
   
   ````javascript
   var throttle = function (fn,interval) {
    var _self = fn,
        timer,
        firstTime = true;
    return function () {
      var args = arguments, // event
          _me  = this;      // window
      // 如果是第一次，就直接执行函数          
      if (firstTime) {
        _self.apply(_me,args); // 相当于在me 的环境下执行 _self(args){}函数
        // _self();
        return firstTime = false;
      }
      
      // 如果定时器还在，就return false;
      if (timer) {
        return false; // return false之后，就是不执行后面的语句了,感觉这里应该直接return就行的
      }

      timer = setTimeout(function () {
        clearTimeout(timer);
        timer = null;
        _self.apply(_me,args);

      }, interval || 500);
    };
  };

  window.onresize = throttle(function () {
    console.log(1);
  });


   ````
----------------

  在搞懂这段代码之前，先来弄清几个东西，如下:

   ````javascript
  function log () {
    console.log('hello');
  }
   ````
   ````javascript
  document.onclick = function () {
    log();
  }; // hello
   ````
  * 第一种情况下，把log()放在另一个函数里，当发生click事件的时候会在这个函数里面执行log，因为函数加了括号就表示这个函数的执行结果而不是指向函数的引用。而函数的执行结果就是记录下hello。

-------------------


  
  
   ````javascript
   document.onclick = function () {
     log;
   }; // 无反应

   ````
  * 第二种情况下，直接把log放在函数里，这样其实没有什么意义，这就相当于把一段代码放进去，但是代码本身并没有触发条件

---------------
   



   ````javascript
   document.onclick = log(); // 语句执行到这里的时候直接log；之后点击无反应
   ````
  
  * 第三种情况下，直接把log()的执行结果绑定到onclick上，但是这本身是没有意义的，因为这里的执行结果是一个单独的语句而不是函数。所以当语句执行到这里的时候，就直接执行了log()，而因为这个绑定是无效的，所以document.onclick = null;之后再点击也没有反应了. 当然，如果log的返回值是一个函数的话， 那么document上的绑定事件则会加在这个函数上。 

---------------




   ````javascript
   document.onclick = log;  // 单击的时候会log 
   ````

  * 而最后一个就更别说了，这里就相当于是直接把一个函数绑定到window.onclick 上面。也就是说，这段代码相当于 ````document.onclick = function () {console.log('hello')};````

---------------




  这里搞清楚了，再来看上面的代码，

  `````javascript
  window.onresize = throttle(function () {
    console.log(1);
  });
  `````
  这里对window绑定了
  ````javascript
  throttle(function () {
    console.log(1);
  });
  ````
  由上面的分析可知，在代码执行到这里的时候，window.onresize就等于这个函数的运行结果，观察上面的代码，可以知道，这个函数的运行结果就是返回另外一个函数，所以window.onreize就与该函数返回的另外一个函数绑定了。这里就是利用到了闭包。

###2015-12-24
=======
1. 使用Backbone.Relational的时候，关联的collectionType需要是collection的原型而不是他的实例，Model 也是，所以在导出collection的时候不要加new操作符。但是在导出RelationalModel的时候，需要导出其实例，也就是加上new操作符
2. **出现滚动条的时候由于滚动条占位，元素被挤开了，怎么解决？**
3. 写font的缩写的时候，font-size和family是必须的
4. where方法返回的是一个数组，所以通过where来获取自己需要的某一个元素的时候，需要在最后加个[0];
5. 


###2015-12-25
=======
1. 关于calc
   * 使用这个属性的时候，里面的表达式符号要注意分隔，例如````calc(100vw - 100%)````,运算符号的前后如果不加空格的话，就是一个无效的属性
   * 关于vw，这个值是viewport/100，也就是视口的宽度的百分之一，100vw就是整个窗口的宽度，包含了滚动条，而100%，是当前元素的可用宽度(不含滚动条)，所以，在根元素下，calc(100vw - 100%)也就是滚动条的宽度

2. underscore的模板
  {{- }}只是用来插入变量的，如果是想要在js中读取变量，直接使用就行了。。。比如在模板中有个判断语句，{{if(oprationType ===1 ){ }},就直接这样写而不要写成{{-}}的形式
3. 关于在mainView中将过滤后的collection里面需求的model重新渲染的问题
   * 获取需求的model
   * 将model传入对应的viewItem
   * 将viewItem的el插入需求元素
   * 需要考虑的有几个问题
     * 一是性能问题，这是不是最优化的解决方案？
     * 直接清空dom的话，那些view的监听事件是不是没有被移除，是不是会造成资源浪费？其实这个问题还是和性能有关了
     * 
   * mainView其实也只是一个View而已，只不过它管理着viewItem,但是viewItem本身是不在mainView里面的。。。也就是说，mainView里childView并不是viewItem

4. 这周还是把php大概的过一遍吧。。。加油

###2015-12-26
=======
1. 关于Windows下GitHub同步分支失败的解决办法
   * 解决的办法一是可以选择更新libcurl，或者把默认git的默认连接方式由https改为ssh，只需在Shell执行以下命令即可：

     `````
     git config --global url.ssh://git@github.com/.insteadOf https://github.com/
     `````

   * 第二种方式

     ````
     git config --global url.ssh://git@github.com/.insteadOf https://github.com/
     ```` 
   [原文地址](http://jingpin.jikexueyuan.com/article/34632.html)

2. Safari下input 的 line-height 和height不一致的话会出现光标错位情况。 
   * **01/08注： 只需要给文本框设置高度即可，无需设置行高，因为设置行高后Safari下的placeholder和line-height会出现异常。**

###2015-12-27
=======
1. 操作节点的时候如果需要把一个节点移动到父节点末尾，那么可以直接使用appendChild()，这个方法如果传入一个节点，那么就会把该节点直接放到父节点尾部。另外，关于使用normalize()来代替children的方法行不通，因为normalize()只是把相邻的空文本节点给合并了。
2. replaceChild()，两个参数，第一个是要插入的节点，第二个是要替换的节点
3. HTMLCollection的几种访问方法，假设aLi为对应的HTMLCollection
   * 使用方括号语法或者item()直接访问 ````aLi[3]````,````aLi.item(3)````
   * HTMLCollection的方法：````namedItem()````,可以通过元素的name来获取
   * 直接使用方括号加名字: ````aLi['hello']````
4. childElementCount: 返回子元素(不包括文本节点和注释)的个数
   firstElementChild:
   lastElementChild:
   nextElementSibling:
   previousElementSibling: 
   以上属性都不会返回空白文本节点// IE9以上才支持→＿←
5. afterpaste是粘贴时触发的事件
6. 正则里面的或还是需要用好， 比如，~~/[\D | 0]/g,就是匹配 所有非数字和0~~ 【3/9注】： 然而并不是→＿←. 少了`|`也是或的关系， 而在中括号里面加上`|`之后就会匹配`|`这个字符了。 
  
  ```js
  '|'.match(/[ts|]/); // ["|"];
  ```

###2015-12-28
=======
1. 把一个collection里面的model添加到另一个collection的话，那么这两个collection共用一个model，在一个collection里面修改model，另一个collection里的对应model也会受到影响
2. 清空一个collection，使用collection.reset()方法，貌似each,forEach遍历来删除单个的话都不行，因为每次遍历的时候长度都会变化，~~刷新频率跟不上~~（**01/08注： 不是刷新频率跟不上，而是因为期望删除元素和当前删除元素不同步，在后面有提到这个问题**），从而会出错 。 
3. 如果两个View共用一套collection，然后针对相同的动作有不同的行为的话，那么需要在将Model传入View的时候，传为一个对象，而不只是一个Model，实际上，在将Model传入View的时候一般都要传作对象，不然的话，html里面会多出很多混乱的数据。

###2015-12-29
=======
1. npm安装依赖包出错
   `````
    If you are behind a proxy, please make sure that the 'proxy' config is set properly. 
    npm err! Error: connect ECONNREFUSED 127.0.0.1:8087  

   `````
   具体信息忘记截图了。。。
   总之意思就是说代理错误，所以需要更改代理设置，

   ````
   npm config set proxy null
   ````
   然后就能正常运行了。。解决了一个困扰这么久的问题。。心里还是很开心的O(∩_∩)O哈哈~ 
2. 关于Switch语句分组的问题，需要在case的后面加：而不是逗号（毕竟不是css）,o(╯□╰)o 
3. 关于line-height
   * 没有设置高度的情况下，撑开元素的高度，靠的是行高而不是font-size
   * line boxes的高度取决于它的子元素的最高高度（因此可以给其本身设置一个行高，再在里面添加一个空元素来继承其行高以便撑开）
   * 关于line-height的百分值和小数值，
     使用百分比会计算line-height的值，然后以px像素为单位继承下去，而1.5则是先继承1.5这个值，遍历到了该标签再计算去line-height的像素值
     也就是说，
     **使用百分比，会先计算，再继承**
     **使用小数值，会先继承，再计算**
   * 使用height会使标签hasLayout, 而使用line-height的话则不会
   * vertical-align的相对值是相对line-height来的
   * vertical-align对块级元素不生效？
4. 使用“*”通配符的话会大大增加css的渲染，效率低
5. 监听多个不同的事件时，使用空格分隔
6. collection也可以使用toJSON()， ````collection.toJSON()````,返回的是collection里面每个model的属性的数组。每个model为一个对象
7. 关于水平居中，使用绝对定位的话有三种方法
   * 定义left: 50%, 然后margin-left为自身宽度的一半的负值
   * 定义left: 50%, 然后使用transform: translateX(-50%);
   * 定义left和right，使之相等，这样就能把元素撑开了
8. 在一个上下文里获取元素
   ~~````$(selector,this.el)```` 获取到的是DOM对象~~， 然而并不是这样。浏览器内置了$对象来通过querySelector来获取元素，所以当时使用的时候，调用的其实并不是jQuery而是浏览器内置的。这里有个问题，就是在JS里的指定位置console.log的话，就能获取到jQuery对象，但是通过断点来查看的话，并不能够获取。这里要 mark 一下 。 
   ````this.$(selector)````    获取到的是jQuery对象
   * chrome 默认使用$来引用querySelector
   * Firefox 只有在控制台中才能使用$，也是通过querySelector
   * Safari 只有在控制台中通过$来根据id获取元素
   * IE11的调试器和FF差不多，不过同样也只能在控制台中使用

9. 在表单操作当中，取得表单的引用之后，可以直接通过该引用来获取其子元素有id或者name属性的元素
   ````html
   <form action="" id="testForm">
    <input type="text" name = "testInput" id="hh">
   </form>

   ````
   ````javascript
   var form = document.getElementById('testForm');

   ````
   然后通过````form.testInput````或者````form.hh````都可以取到input元素

###2015-12-30
1. 使用MarkDownPreview插件，可以在本地预览.md文件，安装后，在md文件中按````ctrl+shift+p````调出命令行，输入mdp,选择````Preview in browser```` 即可
2. 关于按需加载
   * 可以将需要按需加载的内容放在script标签里，然后在需要的时候，将需要展示的盒子的html()设为该标签里的内容，这样子在页面刚刚加载，没有达到触发条件的时候，并不会触发请求 
   * 懒加载的实现原理： 
      * 生成标签时，用data-src来保存图片地址；
      * 记录的图片data-src都保存到数组里；
      * 对滚动条进行事件绑定,假设绑定的函数为function lazyload(){};
      * 在函数lazyload中，按照下面思路实现：计算图片的Y坐标，并计算可视区域的高度height，当Y小于等于(height+ scrollTop)时，图片的src的值用data-src的来替换，从而来实现图片的按需加载

###2015-12-31
1. DOM元素的classList属性，表示的是当前元素的类名清单。。。
2. console.log()，里面的内容如果以逗号形式分隔，那么在输出的时候，就会用空格来分隔开来
3. console.warn()，里面的消息就会以警告的形式出现在控制台里面（感叹号 + 浅黄色背景 ）。
4. console.error(), 会抛出错误，与throw new Error()不同的是，后者会有错误类型```Uncaught Error```
5. console.info()，提示类信息，蓝色的小i
6. console.group(),用于消息分组，console.groupEnd()用来结束分组
   **需要注意的是，这里只会折叠group到groupEnd的内容，如果分开来写了，就算group的名称相同，也不会合并在一起**
7. console.table(),用于将数据以表格形式呈现
8. console.time(),console.timeEnd(),用于计算这两个之间执行的代码所用的时间，如
   ```javascript
   console.time('用了多久');
   var arr = [];
   for ( var i = 0;i < 1000;i++) {
     arr.push(i);
   }
   console.timeEnd('用了多久'));

   ```
   **需要注意的是，time和timeEnd里面的参数必须一致**，这样才能正确输出。这个方法在做性能测试的时候比较方便
9. 字符串替换
   * %o    对象替换
     ```
     var hello = 123;
     console.log('The number is %o', hello);
     ```
     这样的话，打印出来的消息里，hello将会替代%o.
   * %d or %i
     用于整型替换。如果传入的值是非整数的话，将会强制转换为整数。转换规则和parseInt差不多。使用%o的话则不会转换
   * %s 
     输出字符串
   * %f 
     输出为浮点值，
   **注：原文中%d和%f的描述里有个尚未支持格式化，不懂什么意思** 
   * %c
     使用%c之后，就会对%c之后的内容使用css样式了
     
     ````javascript
     console.log('%chello world','color: red;');
     ````
     然后hello world 就会显示为红色
* 参考内容
   * [刘哇勇的部落格](http://www.cnblogs.com/Wayou/p/chrome-console-tips-and-tricks.html)
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/API/console)

* 关于word-spacing 和letter-space
  * word-spacing 表示的是单词之间的间距（~~对中文不生效~~），是单词间距，对中文也是，词间距
  * letter-space 表示的是字符间距，每个单词内字符的间距（中文有效）
  [DEMO](http://374632897.github.io/just-some-tips/DEMO/spacing.html)

###2016-01-01
1. JS只有一个主线程，主线程执行完执行栈的任务后去检查异步的任务队列，如果异步事件触发，则将其加到主线程的执行栈。示例如下：
  ```javascript
  setTimeout(function(){console.log('timeout')},0);
  console.log(1);
  // 1
  // timeout
  ```
  结果就是1/timeout.

2. 关于删除节点操作, 不仅仅是删除， 在涉及到集合子项的删除中都是这样
```html
  <input type="button" value="删除" id="delByI++">
  <input type="button" value="删除" id="delByI--">
  <ul>
    <li>节点1</li>
    <li>节点2</li>
    <li>节点3</li>
    <li>节点4</li>
    <li>节点5</li>
    <li>节点6</li>
    <li>节点7</li>
    <li>节点8</li>
    <li>节点9</li>
    <li>节点10</li>
    <li>节点11</li>
    <li>节点12</li>
  </ul>
```
```javascript
  var oDel1 = document.getElementById('delByI++');
  var oDel2 = document.getElementById('delByI--');
  var aLi   = document.getElementsByTagName('li');
  oDel1.onclick = function () {
    for (var i = 0; i < aLi.length; i++ ) {
      aLi[i].parentNode.removeChild(aLi[i]);
    }
  };

  oDel2.onclick = function () {
    // 注意这里是aLi.length - 1
    for (i = aLi.length - 1; i >= 0; i-- ) {
      aLi[i].parentNode.removeChild(aLi[i]);
    }
  };
```
然后在点击第一个按钮的时候，第一次只会删除6个节点（1/2），第二次再点，删除3个，还是（1/2），第三次删掉俩，等点了第四次的时候才能够删完。

为什么呢，因为for循环只有在刚刚开始的时候，才会去初始化i的值，之后每次循环只会判断当前i的值有没有达到停止循环的要求，也就是说，下次循环只会从第二句开始，但是循环每执行一次就会删掉一个节点，这样一来，Li的长度始终都是在变化的，但是i的值却没有发生相应的 变化，比如说，当循环执行到第二次的时候，此时i=1,但是因为删除了一个节点，aLi[i]却等于节点3，也就是跳过了我们期望删除的节点2. 每次循环都这样，所以最后也自然不能按照我们预期进行咯。

解决办法就是从尾部删除。

###2016-01-02
=======
这个不知道该怎么起名。。。 

```javascript
var aLi = document.getElementsByTagName('li');
  
  for (var i = 0, b; b = aLi[i++]; ) {
    b.onclick = function () {
      console.log(this.innerHTML);
    }
  }
```
其实这段代码和下面这段代码是一样的效果

```javascript
for (var i = 0; i < aLi.length; i++) {
    aLi[i].onclick = function () {
      console.log(this.innerHTML);
    };
  }
```
因为这里访问的```this.innerHTML```其实是固定的值，当循环开始的时候，就已经为对应的每一个DOM元素绑定了事件了，在后来访问的时候并不涉及到i，所以这种写法并没有什么影响。

至于闭包的话，是这样子的

```javascript 
for (var i = 0; i < aLi.length; i++) {
    aLi[i].onclick = function (i) { //也就是说，这里的i需要在同一个层上，并将其作为参数传入函数内部这样才不会出错
      return function () {
        console.log(i);
      };
    }(i);
  }
```

这样子的话，当对应元素发生单击事件的时候，打印出来的东西就会是自己期望的值了。 

###2016-01-03
1. 将数组转换为字符串
   ```javascript
   var colors = ['red','blue','yellow'];

   colors.toString();
   colors.join(',');// 给join传递参数的话，那么就会以传递的参数来分隔字符串，没有传参的话，默认为','
   // 把多维数组转化为一维数组
   colors.toString().split(','); // 注意： split 是通过指定标识符把**字符串**切割为数组 // 但是这样子的话，数组项会变为字符串
   ```
2. 栈
  * 是一种可以限制插入和删除项的数据结构。LIFO(last-in-first-out)，后进先出，也就是最新添加的项最先被移除   
  * 方法： push(),pop();
  * push():可以接收任意数量参数并添加到数组末尾，返回**修改后数组的长度**
  * pop()：从数组末尾移除最后一项，返回**移除项**
3. 队列
  * 队列数据结构的访问规则是FIFO(first-in-first-out)，先进先出。
  * 方法： shift(),push();
  * shift():   移除数组中的第一个项并返回该项。
  * **添加数组项的方法：unshift(),push(),返回值为添加之后的数组长度**
  * **删除数组项的方法：shift(),pop(),返回值是删除项**
4. 数组的方法
  * concat
    用于数组合并。不会在原数组上操作。

    ```javascript
    var num  = [1,2,3,4,5,6,7];
    var num2 = num.concat(8,9); // [1,2,3,4,5,6,7,8,9]
    var num3 = num.concat([8,9]); // [1,2,3,4,5,6,7,8,9]
    var num3 = num.concat([8,[9]]); // [1,2,3,4,5,6,7,8,[9]]
    ```
    ``concat``的一个应用是用来将多维数组转换为一维数组


    ```js
    var arr = [1, 2, 3, 4, 5, [6, 7, 8, 9, [10, 11, 12]]];
    Array.prototype.apply([], arr); // 然而这个的弊端在于只能转换二维数组， 如果是更高维的话得不到期望值
    // 所以可以用下面这个方法： 
    arr.toString().split(',').map((item) => { // 然而如果要是数组里面含有对象的话， 就挂了→＿←
      return item - 0;
    });
    ```
    [两种方法转换数组的性能比较](http://374632897.github.io/just-some-tips/DEMO/array-convert.html)
    可以看到， 实际上使用concat的话性能会好很多。只是不一定会转换为一维数组。  
    事实上， 性能还是相差不大的， 相差比较大的时候， 可能是数据比较大， 也可能是因为数组是多维的， 而``concat``只能转换二维， 但是String却能全部转换。

    另外一个应用就是可以创建指定长度数组并推入某个值。

    ```js
    const ary = new Array(31).concat(32); // 得到一个长度为32的数组， 并且数组的最后一项是32
    ```
    需要注意的是， 上面不能使用``push``方法, 因为`push`返回的是`push`进去之后的数组长度。当然， 如果是在已有数组上操作的话就另当别论了。 


  * slice
    基于当前数组中的一个或多个项创建一个新数组。如果有两个参数，则返回的是起始位置到结束位置（但不包括结束位置）的数组。不会在原数组上操作。如果slice的参数中有负数，则用数组长度加上负数来确定相应的位置。

    ```javascript
    var ary = function() {
      console.log(typeof arguments.sort);
      var arg = [].slice.call(arguments,0); // 将类数组转化为数组。 
      // var arg = Array.from(arguments); // 将类数组转化为数组。 
      console.log(typeof arg.sort);
    }(1,2,3,4,5,6,7);
    // undefined
    // function
    ```
  * splice
    * 删除： 可以删除任意项。只需指定两个参数：要删除的第一项的位置和要删除的项数(返回值是删除的数组项)。
    * 插入： 插入任意项。    三个参数：  起始位置，0（要删除的项数），要插入的项
    * 替换： 三个参数： 起始位置，要删除的项数和要插入的项数
    * 此方法直接操作的原数组
  * indexOf和lastIndexOf
    * 接受两个参数：要查找的项，和查找的起始位置的索引
    array.indexOf(item);
    * 这里来个小小的穿插
    ```javascript
    '1,2,3,4,5,6'.indexOf(3);
    ```
    那么结果是多少呢？？答案是4，因为','也是一个字符啊，:笑cry;
  * 迭代方法
    * 传入的函数接受三个参数：数组项的值，在数组中的位置和数组对象本身（jQuery的each第一个是index）
    * every  对数组中的每一项运行对应函数，如果每一项为true，即返回true
    * filter 对数组中的每一项运行对应函数，返回由返回值为true的项组成的数组
    * forEach 对数组中的每一项运行对应函数，无返回值
    * map    返回每次函数调用的结果组成的数组  需要显式地调用return 来返回
    * some   如果该函数对任一项返回true，则返回true
  * 归并方法
    * 接受两个参数： 一个在每一项上调用的函数和作为归并基础的初始值
    * 调用的函数接受4个参数：前一个值，当前值，项的索引和数组对象
      * 前一个值：通过上一次调用回调函数获得的值。如果向 reduce 方法提供 initialValue，则在首次调用函数时，previousValue 为 initialValue。
    * reduce  从数组的第一项开始
    * reduceRight 从数组的最后一项开始
    * 这个函数返回的任何值都将作为第一个参数自动传给下一项
    * **关于归并函数还是有点不大懂**
  * 排序方法
    * sort(),可以传递一个函数作为排序依据，如按照数组项从小到大进行排序： 

    ```javascript
    var num = [7, 6, 2, 1];
    num.sort(function (a, b){
      return a - b
    });
    ```
    如果要逆序的话，将```a - b```改为```b - a```即可。这个方法是在原数组上进行操作的。
  * **注意：数组不是基本类型而是引用类型！！！！！！重要的事情说三遍，另外两遍自己脑补**
  * for(var i in ary)来遍历数组的话，i是索引索引索引！！！！或者说是数组对象的key值(不会遍历数组的length)
  * 当然。。 用`for in`来遍历对象的话， 也是key值

5. 日期对象
  * 月份的表示是基于0的，所以
    
    ```javascript
    var date = new Date(2012,12,12);
    // 转换为时间字符串
    date.toTimeString(); // 得到时间的字符串表示
    date.toDateString(); // 得到时间的日期表示（周几，年， 月， 日）
    ```
    所得到的值并不会是2012-12-12而是2013-01-12

     **01/20 2016更新**  
     ```javascript
     new Date(2015,12,0)
     // Thu Dec 31 2015 00:00:00 GMT+0800 (中国标准时间)
     ```
     也就是说，当天数设为0的时候，获取到的月份与对应的月份是相等的。然后刚好可以通过这个方式来获取一个月份的天数。

  * 实例化日期对象的时候，如果要设置日期，那么传入的日期用逗号分隔，如
    ```javascript
    new Date(2012,11,12,12,12,12);
    ```
    另外，传入的日期至少要包含两个参数，年和月。如果缺少了1个，那么返回的日期对象将会是从1970开始。未提供天数，则假设天数为1，其他参数默认为0。

  * Date.now()返回调用这个方法时的日期和时间的毫秒数（IE9以上支持，在不支持的浏览器中可以使用+new Date()来代替）ES5提出来的。 


6. 关于函数对象
7. 字符串方法
  * charAt;charCodeAt
  *  ** 都不会修改字符串本身，而是返回一个修改后的副本 **
  * concat  拼接字符串，然而一般都用+号拼接
  * slice     第一个参数表示字符串开始的位置，第二个参数表示字符串到哪里结束（不包括该字符）
  * substr    第一个参数表示字符串开始的位置，第二个参数表示的是要返回的字符个数
  * substring 第一个参数表示字符串开始的位置，第二个参数表示字符串到哪里结束（不包括该字符）
  * 在给这些方法传递负的参数的情况下
    * slice       将负值加上字符串的长度
    * substr      将第一个负值参数加上字符串长度，第二个负参数转化为0
    * substring   把所有负值都转化为0，然后将较小的值作为开始位置，将较大值作为结束位置
  * indexOf,lastIndexOf
  * trim()  去除空格
  * toLowerCase;toUpperCase;   大小写转换
  * match   str.match(pattern); 找到则返回匹配字符串，未找到则返回null
  * search  如果未找到则返回-1
  * replace
  * 关于正则表达式的模式匹配
    * $&  匹配整个模式的子字符串
    * $`  匹配的子字符串之前的子字符串
    * $'  匹配的子字符串之后的子字符串  引号前需要加转义字符
    * $n  匹配的第n个子字符串
    * $nn 匹配的第nn个子字符串，如果没有定义捕获组，则为空字符串
    * 上面指的捕获组，是正则表达式中的括号括起来的部分。如： /(hello)/g，第一个括号就是第一个捕获组，匹配的部分可以用$1表示。
  * split  基于指定的分隔符，将字符串分割成多个子字符串并存进一个数组。可以指定第二个参数来表示数组长度
  * localeCompare  比较两个字符串（貌似没多大用啊） 

###2016-01-04
=======
1. 关于将mainView和itemView关联起来的方法是，在mainView初始化的时候，为其添加一个属性this.childView（数组）来存放itemView，每次创建了itemView的时候就将其Push到childView里面。

2. 在清空View的时候，应该采用close的方法（移除事件监听，然后removeView）,如果直接用empty清空的话，view里的事件监听什么的依然在，会浪费内存？ 

3. this.$(selector)只会在当前元素下面查找元素，如果查找的元素不在当前元素下，那么就不要加this，直接用选择器。

4. ~~在用$.ajax请求的时候，在里面的回调函数里this的指向不会是期望值，解决办法是在$.ajax里面定义一个属性，指向this,如~~
   ```javascript
   $.ajax({
      type: 'GET',
      url: '/task/search/searchSolr',
      _this: this, // 在这里定义_this为this,然后在回调函数里就可以通过this._this来访问了。
      data: {
        type: 1,
        start: 0,
        keyword: val
      },
      success: function (res) {
        const searchBox = this._this.searchBox;
        console.log(res);
        searchBox.getTypeNum(res);
      },
      error: function () {
        console.log('请求失败');
      }
    });
   ```
   【3/13注：】: 直接在函数外把this赋给另一个变量不得了→＿←
5. 关于搜索框的初始样式

6. 正则相关
   * 匹配双字节字符（包括汉字、全角）
     
     ```javascript
     /[^\x00-\xff]/     // 注意 ^ 这个符号
     ```
   
   * 匹配汉字
     
     ```javascript
     /[\u4e00-\u9fa5]/  //这里没有 ^  这个不会匹配汉字标点符号（其实那个应该算在双字节内）
     ```
7.  ~~关于使用文字溢出text-overflow: ellipsis后的文字对齐问题~~ **以下描述错误**
   
   ```html
   <p class="test">
     <span class="left">我是一段段小小小文字</span>    
     <span class="right">恩。。啊。。 哈哈。。 </span>
   </p>
   ```

   ```css
   p{
     width: 300px;
     margin: 0 auto;
   }
   span{
     display: inline-block;
   }
   .left{
     width: 40%;
     white-space: nowrap;
     text-overflow: ellipsis;
     overflow: hidden;
   }
   ```
   然后走浏览器里面查看的话，就会发现左边的文字和右边的文字并不是对齐的。。
   
   这是为嘛呢。。。其实是因为给.left元素加了overflow:hidden，然后触发了元素的BFC。

   知道了原因，解决问题就好办了，可以给.right加上一个右浮动，也可以对它加一个overflow:hidden.

   然后文字就对齐咯。。。 

   不过看到MDN上面介绍说行内块元素也会触发BFC哒，这样的话这两个span不是都应该触发了么。。。为什么还会出现这种情况呢？或者说是我理解错了？ 真心求解。

    **stackoverflow上的回答： ** 直接对span 元素设置```vertical-align: top```然后就可以对齐了。

   所以这里又牵扯到```vertical-align```了，
   * ```vertical-align```指定了行内元素(```inline```)或表格单元格(```table-cell```)的垂直对齐方式.
   * 其参考元素为父元素
   * 对于```inline```元素来说，其高度为可见的文字高度，但是对其设置了inline-block之后，其默认高度就会变为文字的行高。
   * [inline-block元素垂直居中问题](http://stackoverflow.com/questions/12950479/why-does-inline-block-element-having-content-not-vertically-aligned);


8. 关于onunload , 和onbeforeunload事件
   * onunload 书上说主要是用来在卸载页面之前清除引用的，然后我在里面加了事件好像也没什么用，比如alert();这个事件是在文档被完全卸载之后才会触发的。
   * 【3/13注：】其实是有用的， 只不过每次卸载页面要么是关闭窗口， 要么是跳转页面， 控制台就会更新，如果使用断点的话就会看到事件处理函数里面的语句是执行了的。 
   * onbeforeunload
   需要传入事件对象，然后事件对象有个returnValue属性，属性指定的字符串在卸载页面之前会出现在弹窗里。如下

   ```javascript
   window.onbeforeunload = function (event) {
     var event = event || window.event;
     var msg   = 'Do you really wanna leave ? '
     event.returnValue = msg;
     return msg;
   };
   ```

9. 博客园里markdown插入代码的话，必须要顶格才能正常显示。 【3/13注：】好久没去博客园了。 


###2016-01-05
=======
1. 关于随机数的生成。

   ```javascript
   value = Math.floor(Math.random()*可能值的总数 + 第一个可能的值);
   ```
   例如： 想要选择一个1-10之间的数，那么可以这样来选择： 

   ```javascript
   var num = Math.floor(Math.random()*9 + 2);
   ```
2. jQuery的text()方法，只会获取html里的文本内容。


###2015-01-06
=======
1. 使用GitBash时，修改进入之后的默认路径可以右击其图标，然后在起始位置里面输入期望位置。如果重启后操作无效，则看是不是目标位置的最后，有
   ```cd to home```字段，如果有的话，就去掉。然后就可以了。 


2. 不要直接操作主分支！！！！平时提交代码提交到自建分支上，需要更新的时候pull request就行

3. 如果一个字符串为'2014年法律硕士考试提醒', 然后需要匹配2014年之后的内容的话，可以用下面这种方法： 
   
   ```javascript
    var str = '2014年法律硕士考试提醒';
    str.match(/2014年(.*)/g);
    var matchResult = RegExp.$1;
   ```
   也就是获取捕获组

4. 注意分清轻重缓急！！！！路要一步一步走，饭要一口一口吃！！！！！！现阶段主要任务是把JS学好，读完jQuery源码！！！做好笔记！！！灵活运用！！！！webpack,grunt之类的，可以之后再学！！！nodejs,webpack,react,php,mysql需要在读完jQuery和Backbone的源码之后再去学。。。


###2015-01-07
=======
1. 正则表达式的元字符： ( { [ \ ^ $ | ? * + . ] } )，在需要表达他们本身时，需要转义
2. 直接使用//来定义正则的方式叫做字面量，而使用```new RegExp()```的方式来定义的话，第一个参数为需要匹配的字符串模式，另一个是标志字符串。字符串中的元字符需要进行双重转义。（1 => 2, 2 => 4）

###2015-01-08
=======
1. 用npm从远程仓库上安装插件失败的话，考虑是不是ssh key的问题，



###2015-01-09
=======
1. 黑体也是可以设置宽度的，设置font-weight:normal，然后就会变成正常宽度了。
2. 注意啊。。。判断相等是三个或者两个等号！！！！！一个等号是赋值！！！

###2016-01-10
=======

1. 以下代码： 

   ```javascript
   null ==  undefined // true
   null === undeifned //false
   ```
   也就是说null并不严格等于undefined
2. ArrayLike对象的本质特征是具有length属性
3. 合并数组

   ```javascript
   var arr1 = [1, 2, 3, 4];
   var arr2 = [5, 6];
   var arr3 = [7, 8, 9];
   var arrC = [].concat(arr1, arr2, arr3);
   ```

###2016-01-11
=======
1. 别把高度设为auto，不然的话，在有些手机上可能会出现手机输入法撑开高度的情况，好吧，虽然他的initial value 本身就是auto,但是在我把显性地设置height为auto的语句去掉之后，在小米的UC浏览器上显示确实正常了。


###2016-01-12
1. 微信的内核是webkit，所以用到CSS3的属性的时候需要加-webkit-前缀。→＿←微信自带浏览器必须要加前缀
2. ``input[type=hidden]``，隐藏文本域的一个作用是， 可以将通过php获取到的数据暂时存放在它的value里面，方便在JS里取用。
3. 下面的php语句

   ```php
   <?php
    session_start();
    $reg = empty($_SESSION['reg'])?"":$_SESSION['reg'];
    $uid = empty($_SESSION['uid'])?"":$_SESSION['uid'];
    $inviteCode = empty($_SESSION['inviteCode'])?"":$_SESSION['inviteCode'];
    $urlSearch = '';
    header("Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0"); // HTTP/1.1
    header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
    header("Pragma: no-cache"); // Date in the past
    if(!empty($reg) && !empty($uid)  && !empty($inviteCode)){
        $urlSearch = '?reg='.$reg."&uid=".$uid."&inviteCode=".$inviteCode;
        exit;
    }else if(!empty($reg) && !empty($uid)){
        $urlSearch = '?reg='.$reg."&uid=".$uid;
        exit;
    }else if(!empty($inviteCode)){
        $urlSearch = '?inviteCode='.$inviteCode;
        exit; //当添加了这句话的时候，语句执行到这里就停止了，然后页面不会再继续渲染，所以看起来就是空的
        // 那么这是为什么呢？？ 
    }
   ?>
   ```
4. $_GET[KEY],用于获取URL里面的对应的值
5. $_SESSION[KEY]使用之前，需要先sesstion_start() // 在定义该SESSTION的时候可以不用，但是在其他页面调用的时候必须先start
6. 使用require引入文件 <?php require 'file' ?>
7. 关于在html中插入php变量

   ```html
   <a href="<?=empty($urlSearch)? 'login.php': 'login.php'.$urlSearch?>">立即登录</a>
   ```
8. 跨源资源共享(Cross-Origin Resource Share)

###2016-01-13
======

1. 如果要是在chrome下调试的时候，发现控制台在source等频道下调不出来，只有在console下才能显示的时候，可能是按了esc将console给隐藏了。解决办法是点控制台右上角的三个点，然后选择show console.即可。Of course, you can also press the shortcut ``esc`` to show it again.

2. 绝对定位的时候bottom参照的元素是浏览器的第一屏，当其参照元素在滚动的时候，也会跟着滚动。
3. textarea禁止缩放：在css里为其添加rule,resize: none | horizontal | vertical;
4. 下面的代码： 

   ```javascript
   var root = (typeof self == 'object' && self.self == self && self) ||
              (typeof global == 'object' && global.global == global && global);
   ``` 
   在默认情况下（没有重写self的引用时），self指向window;self.self指向window,self.self.self指向window,→＿← global是nodejs中的全局

5. 定义一个构造器

  ```javascript
  var Person = function (config) {
    this.name = config.name;
    this.job = config.job;

  };
  Person.prototype.work = function () {
    return this.name + " is working";
  };
  ```
6. 英文的比较好看圆滑的一个字体是'Open Sans';
7. 来学学英文吧。。。 **point out** 指出

8. 一段代码： 

  ```javascript
   var Model = function (obj) {
    // var this.attributes = {};
    // 注意的是，这里应该用this而不是使用var ，因为最后这个实例的时候是要变为对象的一个属性的。
    this.attributes = {}; // 如果这里不声明这一句的话，在遍历添加的时候，就会报错,也就是说对象的属性需要先声明再使用
    if (obj.defaults) {
      for ( var key in obj.defaults) {
        this.attributes[key] = obj.defaults[key];
      }
    }
  };
  ```
9. 访问一个对象的属性时，如果一个该属性不存在，将会返回undefined,如果在这个时候再访问该属性的另外一个属性时，则会直接报错。如： 

  ```javascript
  var obj = {
    team: {
      name: 'hello'
    },
    id: 2,
    member: {
      name: 'Jiangxi'
    }
  };
  obj.name  // undefined
  
  obj.name.name // Uncaught TypeError: Cannot read property 'name' of undefined
  ```
  解决办法就是在使用之前先进行判断 

  ```javascript
  obj.name && obj.name.name; // undefined
  ```
  也就是说，如果要访问一个对象的属性的属性的时候，需要先判断该属性是否存在，如果存在，再进行访问，这样才不会报错

###2016-01-14
=======
1.  ~~@keyframe~~ **@keyframes,是复数！！！** 加前缀是@-webkit-keyframes 而不是-webkit-@keyframes o(╯□╰)o 

2. background-clip: content-box,padding-box,border-box;规定背景的绘制区域，默认为padding-box
3. rotate(1turn)表示转一个圈
4. text-transform: 控制文字的大小写capitalize，uppercase，lowercase
5. 　```Uncaught SyntaxError: Unexpected end of input``` 通常是因为缺少括号或大括号来结束语句了o(╯□╰)o，怎么就给忘了，不知道错误的原因就注释掉语句看是哪里出了问题，再不行就在其他浏览器下查看报错
6. 用CSS绘制三角形： 

   ```css
   .arrow{
      width: 0;
      height: 0;  /* 要将高度设为0，不然会显示为梯形 */
      border: 50px solid transparent; /*  三角形侧边 */
      border-top: 0;
      margin: 50px auto;
      border-bottom: 100px solid #f66; /* 设置三角形底边的的长度和三角形的颜色 */
   }
   ```
7. 关于条件判断语句：
   ```javascript 
   // 如果里面有需要执行的代码，且不止一条，那么应该调用自调用函数
   true ? (function(){console.log('hello');console.log(' nihao')}()) : console.log('haha');
   // 如果满足或不满足条件时不需要执行操作，那么应该将对应的条件设为null(迷糊了)，总之不能省略
   false ? console.log('hello') : null;

   ```
8. Chrome Cl APIs
  * **$** 返回匹配CSS选择器的第一个元素 querySelector
  * **$$** 用数组形式返回匹配CSS选择器的元素 querySelectorAll
  * **$x(path)**  $x('//p')返回所有的p元素
  * **debug(function)** 传递一个函数，当函数调用的时候，会在函数内的第一个可执行语句处断点。取消断点可以用undebug(function)
  * **dir()**, 同console.dir(), 显示一个DOM元素的可操作列表(可以通过点号访问到的)
  * **inspect(object/function)** 选中并跳到该元素（或函数）
  * **getEventListeners(object)**, 用于获取注册到object上的事件，对象的键为事件类型，值为注册到该对象上的事件绑定的函数组成的数组。该数组描述了每个事件类型的监听器（也就是该事件绑定的函数）,例如可以通过```getEventListeners(document).click[0].listener```来访问document上click事件绑定的第一个函数
  * **keys(object)** 返回一个由对象的属性名字组成的数组，对应的有还有 **values(object)**
  * **monitor(function)** 当指定的函数调用的时候，将会显示出传入函数的参数


9. P标签内部只能包含inline标签，如果包含了block标签的话，该block标签将会被提到p的同一个层级。注意，这里指的是默认的block标签，而不是具有display: block的标签 .IE下innerHTML会对错误嵌套报非法错误（未测试）[原文地址](http://www.thinksaas.cn/group/topic/268153/);
10. html元素错位，除了考虑嵌套之外，还需要考虑是不是没有补全标签（也该算是嵌套吧）

###2016-01-15
=======
1.  ```display: none```会让屏幕阅读机和键盘 Tab 忽略它。因此可以用绝对定位，设置left为一个极大或者极小值，使得元素能够保持在文档流中
2. 伪元素添加内容的时候一定要添加content属性啊！！！！！ 没有content就没有内容就不会显示啊
3. 当一个元素hover的时候，要改变该元素的伪元素的状态的话，那么:hover 和伪元素之间不能有空格，否则不会生效，如
   
   ```css
   div:hover:before{} /* 就是div hover的时候他的伪元素发生对应的变化，注意不能有空格不能有空格！！！*/
   ```
4. 通过transform的scale来控制元素的隐藏和显示，配合transition即可实现动画效果。如下例： 
   
   ```css
    div{
      display: inline-block;
      position: relative;
    }
    div:before{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: #f65;
      transform: scaleX(0);
      transition: all ease-out .2s;
    }
    div:hover:before{
      transform: scaleX(1);
    }
   ```
5. elem.offsetParent获取的是其父元素？ 
6. 注意文件名大小写，虽然在本地测试的时候，大小写不正确也能正常显示，但是放到服务器上之后，大小写不对的话，也不能正常访问到。
7. GitHub里不要在序号后面直接写代码。。不然会显示异常的
8. php没有undefined。。。。


###2016-01-17
=======
1. JS不能选中before,after伪元素怎么办？？？？废话。。用其他标签来代替伪元素不得了么。。。。
2. JS高级程序设计——最佳实践
   * 将事件处理程序和应用逻辑解耦，也就是说涉及到事件的部分，只处理事件，然后将处理的结果传递给应用逻辑
   * 使用常量（用全大写表示），这样将会使代码更易维护
     * 重复值
     * 用户界面字符串
     * URLs
     * 任意可能会更改的值
   * 性能
     * 避免全局查找 将一个语句中多次用到的全局变量存为局部变量
     * 避免with语句 

3. \x20表示空格 \f换页符 \t制表符  \r回车符  \n换行符
   去除空格的正则表达式 : ```whitespace = "[\\x20\\t\\r\\n\\f]"```

4. ```obj.ownerDocument```返回节点所属的根元素


###2016-01-18
=======
1. Math.cos() Math.sin()等等涉及到三角函数的方法接受的参数是弧度而不是角度啊啊啊啊啊啊啊！！！！！
2. const定义一个对象的时候， 可以在之后改变对象的属性，但是不能改变该常量为其他对象。也就是说，可以用const 定义一个对象，然后可以继续修改这个对象的属性方法等. It's also available for Arrays.
3. 不要为函数参数重新分配值
4. 涉及到执行语句的话用{{}}, 需要解析为html的，则用{{= }}, 如下

   ```javascript
   <ul class="content month">
     {{ for (var i = 0, len = 31; i < len; i++) { }}
       <li class={{= "month_" + i}}>{{= i}}</li> // 这里是用的等号
     {{ } }}
   </ul>
   ```
5. return可以直接返回一个对象： 

  ```javascript
  function getName() {
    return {
      name: 'Jiangxi',
      age: '22'
    };
  }
  var person = getName();
  person // Object {name: "Jiangxi", age: "22"}
  ```
6. 三元运算符里可以进行函数运算。但是不能直接return 【eslint检测过不了 :笑cry】—— 额。。 不对。。 是根本就不能`return` , 会报语法错误， ``Uncaught SyntaxError: Unexpected token return``

###2016-01-19
=======
1. `$.extend({}, s1, s2, s3..)`就是将s1,s2,s3..等合并到第一个参数（一个空对象里），然后再返回这个对象, ES6里的``Object.assign()``和这个差不多。 然而可恶的IE10!!!!
2. 在View实例化的时候传入的参数可以在view的构造器里的initialize的函数里作为参数传进去。
3. 微软雅黑加粗之后看起来简直不像雅黑了！！！！所以如果设置了字体但是感觉不是自己想要的的时候，看看是不是多加了个font-weight吧。 
4. 利用好三元操作符的话可以节省很多代码，真的。如： 

   ```javascript
    let msg = obj.toString().replace(/,/g,' ').trim().replace(/(\d+)\s*/g, '$1 ').trim().split(' ').join('、');
    msg ? msg = '每月' + msg : '';
    this.$header.text(msg);
    this.$header.prop({ 'title': msg });
   ```
   其实这里不仅仅是利用好三元操作符，还有一个就是，如果重复代码比较多的话，可以在前面先进行判断，根据不同的结果，把对应的数据存放到变量里，然后在下面需要的时候就直接使用变量来代替了。 

   如果不用三元操作符的话，这里的判断可能会像下面这样： 
   ```javascript
   if (msg) {
     // 需要注意的是，如果是msg += '每月'的话，那么每月每显示在后面，所以这里没那样写
     msg = '每月' + msg; 
   } else {
     msg = '';
   }
   ```
   类似这样的操作就可以直接用三元操作符来代替，从而达到节省代码量的目的。(然而如果在三元运算符里执行语句的话，eslint的检测过不了，o(╯□╰)o)

5. Backbone里View初始化的时候设置其需要计算的style的时候，会出错，因为此时元素尚未渲染到页面中。
6. 如果在一个View初始化的时候需要访问上层元素，那么可以在上一层View初始化的时候进行访问，而不是在这个View里通过全局访问，这样真的访问不到。

###2016-01-20
=======
1. WebPack 在添加loader的时候，对应的loader需要加引号才行，不然会报错。
2. 在安装依赖的时候用npm install module --save的方式比较快捷吧 。。 当然， 可以同时安装多个包。 
   ``sh
   npm install express mongoose jade --save
   ``
3. JSON里的键值应该使用双引号而不是单引号。
4. webPack的插件是在其配置文件中的plugin中指定， BannerPlugin给输出的文件头添加注释信息
5. 在插入插件比如 new webpack.BannerPlugin()的时候，需要现在配置文件头部```var webpack = require('webpack')```;
6. ```webpack --display-error-details```可以打印详细错误信息
7. 当引入通过 npm 安装的 node.js 模块时，可能出现找不到依赖的错误。Node.js 模块的依赖解析算法很简单，是通过查看模块的每一层父目录中的 node_modules 文件夹来查询依赖的。当出现 Node.js 模块依赖查找失败的时候，可以尝试设置 resolve.fallback 和 resolveLoader.fallback 来解决问题。
8. dropdown的dropdown-toggle和dropdown-menu应该在同一层目录下。 
9. JS获取当前月的天数： 
   
   ```javascript
   new Date(2016,2,0).getDate(); // 使用时把年份换成当前年份，月份换成当前月份（需要注意的是，该是几月就是几月，如2月就是写2）
   ```
10. dropdown的JS方法和添加data-toggle='dropdown'方法只能用一个. 不然的话以两个作为触发条件的话， 最后结果就是打开了又关了。
11. CSS用important加权重的方法
    
    ```css
    line-height: 20px!important; // 这种还是少用吧。。 
    ```
    注意important的位置和书写方式。
12. dropdown的水平对齐方式有两种，left和right，因为是相对父元素定位的，所以如果想要实现居中对齐的话，可以通过给父元素添加padding来实现

13. 获取选中的单选框的索引  

    ```javascript
    var index;
    [].slice.call(document.forms[0]['h']).map(function (a, b) {
      a.checked === true ? index = b : null;
    });
    ```

14. 获取年份的时候要使用`new Date().getFullYear()`才能得到当前的年份，如果使用的是`new Date().getYear()`的话，将会返回1900到今年的年份数 【3/19注：】居然忘了还有这个API。 
15. 表示小于等于的时候，是不能分开的，必须连在一起。。。 i <= 123;
16. o(╯□╰)o   JS中直接使用%号是求模求模求模， 不是百分比啊。。。。:笑cry
17. 用了inline-block之后，元素的宽度 * 数量 != 总宽度， 然后给元素加个背景色看看是不是那个间隙搞的鬼！！！只要是涉及到inline-block，然后宽度什么的不对的问题，你懂的。。。
18. 利用好background-clip的话，可以实现不同的需求。


###2016-01-21
======
1. 关于取反：

   ```javascript
   isMulti = !this.select.start === this.select.end;
   ```
   这样写是不对的因为会先计算!this.select.start，然后再判断相等，所以需要先加个括号  

   ```javascript
   isMulti = !(this.select.start === this.select.end);
   ```
   这样才能得到自己想要的结果
2. jQuery里的nextAll(), prevAll(), nextUtil(), prevUntil()方法
3. 关于css的hover不一定需要父元素在空间上包裹子元素，只要结构上包裹，就会触发。

###2016-01-22
=======
1. 关于内容撑开滚动条的显示隐藏问题。。。可以给可能会撑开的元素设置overflow-y:auto，让元素的滚动条一直显示，然后利用元素的margin或者padding 把元素的滚动条撑到父元素外面去，再给父元素设置overflow: hidden，然后就能利用障眼法来去掉滚动条了。 

2. 使用setTimeout的异步执行方式可以巧妙地在某些语句之后执行相应语句，尤其是在清类名的时候


###2016-01-23
=======
1. webpack里不要require('babel-core')
2. sass-loader默认是把样式放到网页内的？？ 

###2016-01-24
======
1. 富文本编辑的两种方式 [据说这是一个大坑， 等以后有能力了真想好好踩踩]
  * iframe
  * contentEditable
2. document.defaultView.getComputedStyle()，标准推荐的获取样式的方法
3. 原生JS可以直接通过DOM元素的text属性来访问其文本，不过更好的方法还是通过innerText

###2016-01-26
======
1. 获取日期，new Date(year, month, date)的时候，如果date为零，那么获取到的将会是上一个月的最后一天，可以通过这个方法来获取一个月的天数。也就是说可以通过  

```javascript
new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
// const date = new Date();
// new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
```
来获取到当月的天数
2. 如下代码： 
  
  ```javascript
  Math.random() * 16 | 0; // 0 - 16的随机数 整数
  ```
  不知道是什么原理。。。总之这里用了这句话之后，就不用再使用Math.floor()来取整了。 
  卧槽。。好像发现了一个神奇的东西。。。 


  ```javascript
  var random = Math.random() * 16; // 2.7166785709559917
  random | 0; // 2
  random | 1; // 3
  ```
  那么是不是就代表 | 后面接0代表向下取整， 后面接1代表向上取整  
  不对啊。。。 好像是向下取整后，再加上后面的值的来着

  ```javascript
  random | 3; // 11
  random | 5; // 13
  random | 199; // 207
  random | 200; // 200  // 然而奇怪的是，到了200之后就会变成后面的数值了 // 200 - 207之间
  ```
  总觉得好神奇的样子。。。

  好吧。。。原谅我又看书不仔细了。。或者前看后忘的
  * ```~ ```，按位非，所得值为**操作值的负值减一**，如```~15```值为-16,
  * ```& ```, 按位与，两个操作符数，将两个数值的每一位对齐，只有对应位都是1时才返回1
  * ```| ```, 按位或，

  ** 1/27注 ** 这里靠按位或来进行取整并不靠谱，比如
  
  ```javascript
  1.5 | 1; // 1
  1.566 | 1; // 1
  4565.4564 | 1 // 4565
  ```
  所以还是老老实实的用Math对象的方法来进行取整吧。 。不过这种用来取随机数的话还是可行的。  

###2016-01-27
=======
1. 数字toString的时候需要使用括号括起来
   
   ```javascript
   1231231231.toString(16); // Uncaught SyntaxError: Unexpected token ILLEGAL(…)
   (1231231231).toString(16); // "496318ff"
   ```
   后面有提到， 因为数值的存储是用的浮点， 所以上面第一句里面的第一个小数点会被认为是小数点而不是点号操作符
2. 获取样式
     
   ```javascript
  
  info = ('getComputedStyle' in window) && window.getComputedStyle(ele, null) || ele.currentStyle;
  ```

###2016-01-28
1. nodeName.cloneNode(boolean)用于拷贝节点
   ```javascript
   var oUl = document.getElementsByTagName('ul')[0], cloneUl = oUl.cloneNode(true),
        list = ['10', '11', '12'], temp, i = 0, len = list.length;
    for (; i< len; i++) {
      temp = document.createElement('li');
      temp.innerHTML = list[i];
      cloneUl.appendChild(temp);
    }
    oUl.parentNode.replaceChild(cloneUl, oUl);
   ```
   虽然直接拼接字符串， 然后一次性的用innerHTML插入会比较好，但是replaceChild还是需要好好理解应用的。
2. 查看页面中DOM元素数量
   
   ```javascript
   document.getElementsByTagName('*').length
   ```
3. matchesSelector用来匹配dom元素是否匹配某css selector。它为一些高级方法的实现提供了基础支持，比如事件代理，parent, closest等。
   
   ```javascript
   var docElem = window.document.documentElement,
      selector_hasDuplicate,
      matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector ||docElem.msMatchesSelector,
      selector_sortOrder = function ( a, b ) {
          // Flag for duplicate removal
          if ( a === b ) {
               selector_hasDuplicate = true ;
               return 0;
          }
      }
   ```
4. JS里不能直接判断两个数组是否相等，用全等或不全等都不行，都会返回false， 可以把数组利用toString转换为字符串再进行比较。

###2016-01-29
1. 关于if语句  
  
   ```javascript
   if (!10 % 2) { console.log('123') }  // 不会执行
   if (!(10 % 2)) { console.log(123) }  // 123
   // 因为!运算符的优先级要高于%，所以就会先对10进行取反，得到false, 然后false % 2， 得到的是0，自然就不会执行了。 所以要注意括号的使用
   ```

3. 关于位运算符
   * 判断奇偶  
   ```javascript
   if (n & 1) { console.log('n是奇数'); } // 如果是奇数，那么值为0

   // 原理： 奇数的二进制码的最后一位数肯定是1，而1只有最后一个为1，因此按位&1之后，得到的结果里面肯定只有最后一个数为1了，所以对奇数按位&1之后，得到的结果就肯定是1
   ```
   * 按位异或(^)  
   按位异或是两个数中只有一个1时返回1，其他情况返回0。

4. jQuery的on方法在绑定的事件之后有个可选的[selector]参数，用于指定特定的后代元素才会触发这个事件
   
   ```javascript
    // 以下代码运行时，只有.container的.left元素才会触发click事件
    $('.container').on('click', '.left', function () {
       console.log('click');
    });

    // [selector]后面还有个可选的[data]参数，当使用此参数时，需要给绑定的函数传递事件对象，然后访问[data]时，通过事件对象的data属性来进行访问
    $('.container').on('click', '.left',{name: 'Jiangxi'},  function (e) {
       console.log('click' + e.data.name);
    });
   ```
5. jQuery自定义事件
   * 首先给元素绑定一个事件，设置一个函数
   * 然后触发
   * 原生： 

     ```js
     var event = document.createEvent('CustomEvent');
     event.initCustomEvent('sayHello', true, false, 'hello world');
     ...
     ele.dispatchEvent(event);
     ```
6. npm uninstall module --save-dev的时候，如果dependencies里面也有这个包的话，那么卸载的时候也会把里面的都给卸载掉


###2016-01-30
1. 关于webpack加载babel-loader的一些注意事项
   * 需要安装的依赖包： babel && babel-core && babel-preset-es2015 && babel-loader && babel-plugin-add-module-exports
   * 需要注意的是，需要在当前项目根目录下建立一个.babelrc文件，然后里面内容如下：

     ```json
      {
        "presets": [
          "es2015"
        ],
        "plugins": [
          "add-module-exports"
        ]
      }
     ```
   * babel-plugin-add-module-exports是为了添加ES6的import 和 export功能

2. webpack命令
   * webpack 最基本的启动webpack的方法
   * webpack -w  监听文件变更，并实时更新
   * webpack -p  对打包后的文件进行压缩
   * webpack -d  提供sourcemap, 方便调试

3. 【CSS-MDN学习】
   * text-decoration-color: 用于更改文字修饰线条的颜色，默认值为currentColor目前只有FF和safari支持这个属性
   * text-overflow: 可以取字符串，也可以取两个值。。。当然，只有FF支持这个属性

4. 来点英语吧
   * era 时代，纪元
   * dynamic 动态的
   * 

5. 注意！！！！webpack.config.js里面，loader是module之下的一个对象。。。别落下了。。

6. 关于数组的reduce方法

7. 箭头函数内部的this为函数定义处的上下文的this, 箭头函数对上下文的绑定是强制性的，无法通过apply或者call来改变相应的值。 因此不要随意在顶层作用域使用箭头函数以防出错

8. 因为调用babel转码ES6时，用的是严格模式，在严格模式下，顶层作用域中的this不是指向window的，而是undefined

9. 关于class的static静态方法。
10. import { } from '', 表示局部引入

11. 覆盖整个模块儿的暴露对象，需要在export后面加上default `export defalut` 

12. promise
    * 要为一个函数赋予 Promise 的能力，先要创建一个 Promise 对象，并将其作为函数值返回
    * 要求创建一个函数并且带有resolve和reject参数
    * 如果函数内部需要用到this，那么就需要使用this的别名，或者使用箭头函数


###2016-02-01
=======
1. 设置```font-size: 0```来消除inline-block元素中间的间隙在Safari下不可行。。。所以还是使用浮动吧 。。 
2. 关于backgound-clip在IE下表现不对的问题。。 可以通过border来搞定。[DEMO](https://github.com/374632897/just-some-tips/src/testBorderRadiusUnderIE9.html), padding配合background-clip和border可以做出不少有意思的东西[好吧， 其实那些只需要border就行了]

3. 对于input text元素尽量使用padding来实现居中啊。。。 

###2016-02-02
======
1. ellipse----椭圆    individual ---- 个人的  denote --- 指示, 指出
2. 关于border-radius
   * 当为一个值的时候， 表示四个角一样
   * 为两个值的时候， 第一个值表示左上角和对角， 第二个值表示右上角和对角
   * 为三个值的时候，第二个值表示右上和左下
   * 使用'/'来分隔的时候， 可以定义不同方向的值。 '/'之前表示水平方向，之后表示垂直方向  
   * 当border-collapse为collapse的时候， border-radius不能作用于表格元素

3. 查找一个元素在数组中的索引： 
  
   ```javascript
   var arr = ['test1', 'test2', 'test3', 'test4'];
   arr.indexOf('test1'); // 0
   ```
   要注意的是， 是arr.indexOf()....

4. ```position: relative```对表格元素无效。

5. 清除IE下INPUT元素的叉叉， ```::-ms-clear{display:none}``` 清除密码查看： ```-ms-reveal{display:none}```.

6. #233看起来好像也确实不错哈。
7. 关于bind:
   
   ```js
   var name = 'Jason';
   var obj = {
     name: 'Daisy',
     sayName: function (name) {
       console.log(name);
     },
     sayHello: function () {
       console.log('hello ' + this.name);
     }
   };
   
   obj.sayHello(); // hello Daisy
   obj.sayHello.bind(this)(); // hello Jason
   obj.sayName(obj.name); // Daisy
   obj.sayName.bind(this, 'Jason'); // Jason
   ```
   以上有两个需要注意的地方， 
   * 一个是对函数使用bind的时候，需要对函数本身而不是函数的执行结果进行绑定，也就是说，绑定的时候应该是```obj.sayHello.bind(this)()```而不是```obj.sayHello().bind(this)()```. 当然了，有了ES6的箭头函数之后， 就没必要这么麻烦了。 需要注意的是，对函数使用了bind()之后只是绑定了函数执行环境的this，还要加上括号才表示执行函数。
   * 另外一个就是，传递参数的时候，可以在bind()的第二个参数之后传递, 多个参数之间直接用逗号分隔
   * 当然，也可以只给bind()传递this,然后在执行函数的括号里面传递具体参数


###2016-02-03
=======
1. 元素的位置通过指定与其最近的position属性非static的元素来确定。
2. 对```position: fixed```的元素的宽度使用百分比的话， 其宽度是相对窗口来的而不是相对其父元素来
3. 对于使用transform来进行变换的元素， 可以利用left，top(如果可以用的话)来进行微调。
4. 通过jQuery获取元素，得到的是一个类数组对象
5. ```::selection```永远只能用两个冒号开始， 毕竟伪元素
6. 使用变量来代替对象属性的话可以避免对象引用发生变化时可能出现的错误。 
7. font的简写中， style | variant | weight在font-size的前面

###2016-02-16
=======
1. 闭包相关：  
   ```js
    var hello = (function () {
      var hello;
      console.log(hello);
      return function () {
        if (hello) {
          console.log('preHello is ' + hello);
        } else {
          hello = 'hello';
          console.log(hello)
        }
      }
    })();
    hello(); // hello
    hello(); // preHello is hello
   ```

2. 多个变量同时声明：   
   ```js
  (function () {
     var a = b = c =1; // 只声明了变量a
     console.log(a, b, c); // 1 1 1
  })();
  a // Uncaught ReferenceError: a is not defined(…)
  b // 1
  c // 1

   ```
   也就是说，通过以上的方式来声明变量的话， b和c成了全局变量，但是a依然是局部变量

3. 关于```unload```事件，应该加在window上，这样在每次刷新或者卸载页面的时候就会触发该事件。
4. 关于```Generator```  
   ```js
    function* testGenerator() {
      yield 's1';
      yield 's2';
      return 'end';
    }
    var test = testGenerator();
    test.next(); // Object {value: "s1", done: false}
   ```
   * 在调用generator函数之后，该函数并不执行， 返回的只是一个指向内部状态的指针对象
   * 通过调用遍历器对象的next()方法，来使得指针移向下一个状态
   * value 为 当前值， done表示遍历未完成
   * ES6没有规定*号需要写在哪个位置。。。
   * yield语句如果用在表达式中， 则需要加括号，在用作函数参数或者赋值表达式右边时则不用
   * yield语句默认是没有返回值的， 如果需要有返回值，那么需要在调用next方法的时候传递参数```true```， 得到的返回值为上一个yield值


5. 当需要获取当前毫秒的时候，可以使用```new Date().getTime()```, 但是直接使用```+ new Date()```却更为简便

###2016-02-17
======
1. 关于```Promise```  
   ```js
    let promise2 = new Promise(function(resolve, reject) {
      console.log('Promise');
      resolve(); // 将promise的状态由pending转化为resolve
      reject();
    });

    promise2.then(function() {
      console.log('Resolved.');
    }, function() {
      console.log('Rejected');
    });

    console.log('Hi!');
    // Promise
    // Hi!
    // Resolved.

    // 异步加载图片
    function loadImageAsync(url) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
          resolve(image);
        };
        image.onerror = () => {
          reject(new Error(`Could not read image at ${url}`));
        };
        image.src = url;
      })
    }

    const t = loadImageAsync('https://www.baidu.com/img/bd_logo1.png');
   ```
   * Promise的then方法返回的是另外一个新的实例  
   ```js
   var t1 = t.then((value, t1, t2) => { return 'Daisy' })
    .then((value) => {
      console.log(`the prev value is ${value}`);
      return 'Jason';
    }).then((value) => {
      throw new Error('nonono');
      return 'error';
    }).catch((error) => {
      console.log(error);
      return 'Catch';
    });

    var t3 = new Promise((resolve, reject) => {
      resolve('JASON');
    }).then((e) => {
      console.log(`The prev value is ${e}`);
      return 'Daisy';
    }).then((e) => {
      console.log(`The prev value is ${e}`);
      const err = new Error('invalid value');
      throw err;
    }).catch((e) => {
      console.info(e);
    });
    // The prev value is JASON
    // The prev value is Daisy
    // Error: invalid value(…)

    // 通过这种方法可以直接生成实例
    var i = Promise.resolve('Jason');
    var j = Promise.reject('Jason');  // 会抛出错误

   ```

2. ```Object.assign```用于一次性的向对象添加多个属性或方法  
   ```js
    var obj = {}
    Object.assign(obj, {
      name: 'Jason',
      sayName () {
        console.log(this.name);
      }
    });
    console.log(obj); // Object {name: "Jason"}
   ```

3. ```class```
   * ```constructor```方法： 在使用new操作符生成实例的时候，会自动调用此方法
   * 在```class```内部定义的方法默认保存到其原型对象上
   * ```class```不存在变量声明提升
   * 类之间的继承是通过```extends```来实现的。  

   ```js
    class Person {
      constructor (name) {
        this.name = name;
      }
      sayName () {
        return this.name
      }
    }
    class PersonDetail extends Person {
      constructor (name, age) {
        // super指代父类的实例， 必须要调用super()之后才能够使用this，不然会报错
        super(name); // 调用父类的constructor方法。 这里必须要这句话。并且需要传入父类的constructor调用时所需的参数
        this.age = age;
      }
    }

   ```
   * 所有在类中定义的方法都会被实例继承， 如果在方法前加上```static```, 则该方法不会被实例继承 ， 而是直接通过类来调用，也就是‘静态方法’, 父类的静态方法可以被子类继承
   * ```new.target```用于确定调用函数时有没有使用new操作符，如果没使用，那么值为```undefined```。class内部调用```new.target```， 则指向该class,如果在继承的时候使用，将会指向子类  
   ```js
    function Person2(name) {
      if (new.target !== undefined) {
        this.name = name;
      } else {
        throw new Error('必须使用new生成实例');
      }
    }
    var p2 = Person2('Jason');
    // Uncaught Error: 必须使用new生成实例(…)

   ```
 
4. 箭头函数
    * 下面的f表示函数名, (a,b)表示函数参数， ```=> a```，a表示函数返回值。   
    ```js
    var f = (a, b) => a;
    ``` 
    * 如果函数有多个语句的话, 用花括号包围  
    ```js
    var f = (a, b) => { console.log(a);console.log(b) }
    ```
    * 如果函数的返回值为一个对象， 那么需要用圆括号将该对象包围  

    ```js
     var f = (a, b) => ({ id: a, name: b });
    ```
    * **箭头函数不能使用new操作符， 不可以使用arguments, 不可以使用yield命令，所以不能用于Generator函数**
    * 函数中的```this```指向定义时所在对象而不是使用时的对象

  

5. ```Object.prototype.hasOwnProperty()```参数是个字符串啊字符串o(╯□╰)o [MDN-Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/)
  
6. 关于```Object.prototype```的简写为```({})```, 如```({}).hasOwnProperty()```， 如果不用圆括号包裹花括号的话， 就会报错。。。 因为花括号默认为块级代码。 

7. ```prototype.isPrototypeOf(object)```检测一个对象是否在另一个对象的原型链上。   

    ```js
    function A() {}
    function B() {}

    A.prototype.isPrototypeOf(B); // false 这里应该为一个对象， 也就是B的原型对象
    B.prototype = new A(); // B的原型对象指向A的实例， 也就是B继承了A。 那么A的原型对象就在B的原型对象的原型链上。 
    A.prototype.isPrototypeOf(B.prototype); // true // A的原型对象在B的原型链上

    var a = new A();
    a instanceof A; // instanceof 的左边是一个对象，右边是一个（构造）函数。


    ```
    与```instanceof```不同， ```isPrototypeOf```用于两个对象之间， 而```instanceof```用于一个对象和一个构造函数之间

8. ```obj.propertyIsEnumerable()``` 
    * 返回一个布尔值， 表示指定的属性名是否是当前对象的可枚举属性  

    ```js
    class Person {
      constructor (name) {
        this.name = name;
      }
      sayName () {}
    }
    var person = new Person('Jason');       // undefined
    person.propertyIsEnumerable('name');    // true
    person.propertyIsEnumerable('sayName'); // false
    ```
    
    * 可枚举属性是可以通过```for...in..```遍历到的
9. 代码：  
   ```js
   var obj = {
      foo: 1,
      get bar() {
          return 2;
      }
   };
   obj.bar; // 2

   var to = Object(param); // 这里param是什么类型， 那么to便是什么类型  
   // 如， var to = Object({ id: 123 }); 那么to为 { id: 123 }

   Object.keys(obj); // 得到的是由obj的键名组成的一个数组
   ```

10. ```Object.getOwnPropertyDescriptor(obj, prop)``` 
   * 获取对象obj的prop属性的属性描述符， 如果obj不具有prop属性， 那么返回值为undefined 
   
   ```js
    var obj = { id: 12 };
    Object.getOwnPropertyDescriptor(obj, 'id'); // Object { value: 12, writable: true, enumerable: true, configurable: true }
   ``` 

###2016-02-23
=======
1. 关于拖拽
   * mousedown事件加在拖拽元素上
   * mouseover, mouseup事件在mousedown事件内部绑定
   * mouseover, mouseup事件需要绑定在document对象上
   * 真的。。 肺腑之言

###2016-02-18
=======
1. 关于```Object.defineProperty()```   
   
   ```js
   var obj = { name: 'one' }, obj2 = {};
    Object.defineProperty(obj, 'name', {
      value: 'One'
    });
    Object.defineProperty(obj2, 'name',{
      value: 'Two'
    });
    Object.getOwnPropertyDescriptor(obj, 'name'); // Object {value: "One", writable: true, enumerable: true, configurable: true}
    Object.getOwnPropertyDescriptor(obj2, 'name'); // Object {value: "Two", writable: false, enumerable: false, configurable: false}
   ```
   也就是说通过``Object.defineProperty```来定义一个尚未存在于对象中的属性的时候， 该属性的未定义特性将会为false, 如果该属性已存在与对象之中， 那么其未定义特性将为true;

2. chrome快捷键
  * ```F12 || ctrl + shift + I```  --- 打开开发者工具
  * ```ctrl + shift + c```         --- 检查元素
  * ```ctrl + shift + j```         --- 打开开发者工具并使控制台获取焦点
3. ```document.documentMode```IE的特性，通过这个可以判断是否是IE。 
  * documentMode的值表示当前IE浏览器在哪个文档模式下工作---IE11 -> 11， IE8 -> 8...

4. 关于把一个对象赋给另一个对象  
   
   ```js
    // 简单的对象赋值
    var obj = { name: 'Jason' }, obj2 = obj;
    obj2.age = 22;
    obj // Object {name: "Jason", age: 22}
    obj2 // Object {name: "Jason", age: 22}
    // 也就是说，当obj2发生变化的时候，obj也发生了变化， 这与对象按引用传递的概念是相吻合的

    // 原型对象  o(╯□╰)o  当时出现的问题怎么复现不了了。 。 

   ```


5. backbone里的View实例化的时候传参， 参数需要是一个对象， 如```const view = new View({obj: obj})```,如果直接传递obj的话，那么obj的属性会直接写在对应模板的html的根元素上

6. ```Object.is(arg1, arg2)```, 用于比较arg1和arg2是否相等。 与```===```不同的是， ```===```在判断```+0 === -0```的时候会返回```true```, 在判断```NaN === NaN```的时候会返回```false```, 而通过```Object.is()```来判断的时候就刚好相反。 

7. 关于set  
  
  ```js
  var o = Object.create({}, {
    foo: {
      writable: true,
      configurable: true,
      value: 'hello'
    },
    bar: {
      configurable: false,
      get: function (){ return 10; },
      set: function(value){console.log(value)} // 通过o.bar = val来访问
    }
  });
  ``` 
  也就是说，访问器属性里面， 直接通过o.bar来访问的话， 会调用get函数， 如果对o.bar赋值的话， 会调用set函数， 需要注意的是， 用```o.bar(val)```来设置的话会报错啊/(ㄒoㄒ)/~~

8. 关于```Object.create()```
  
  ```js
  var o = Object.create({}, {
    p: {
      value: 43
    }
  });
  Object.getOwnPropertyDescriptor(o, 'p');
  // Object {value: 43, writable: false, enumerable: false, configurable: false}
  ```
  也就是说， 通过```Object.create(proto, [ propertiesObject ])```来创建对象时， 其省略的属性特性默认值为false. propertiesObject是一个对象， 属性名为新创建对象的属性名称， 值为属性特性描述符。 
  
  ```js
  var o = {
    name: 'Daisy',
    age: 22
  };
  var o2 = Object.create(o, {
    husband: {
      value: 'Jason'
    }
  });

  o2; // Object {husband: "Jason"};
  o2.__proto__; // Object {name: "Daisy", age: 22};
  
  // 通过Object生成的对象， 具有一个原始值PrimitiveValue， 可以直接操作， 如a + 5之类
  var a = Object(123);
  a; // Number {[[PrimitiveValue]]: 123} Primitive: 原始的
  var b = 123;
  b; // 123;

  ```
  也就是说， 通过```Object.create(proto)```创建得到的新对象的```__proto__```属性即为proto对象

  [Polyfill待看](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill)

9. 关于```Object.preventExtensitions```, ```Object.freeze```, ```Object.seal```
  * ```Object.preventExtensitions```:  阻止对对象添加属性， 但是可以操作现有属性
  * ```Object.freeze```： 阻止添加新的属性和操作已有属性， 也就是说该对象将会处于不可变状态
  * ```Object.seal``` ： 不能添加属性和删除属性， 但是可以修改现有属性。 

###2016-02-19
=======
1. ```setTimeout```和```setInterval```未指定时间的时候， 则时间为0.
2. 清除定时器是使用```clearInterval(timerId)```或者```clearTimeout(timerId)```， 而不是直接将```timerId = null```, 真的是笑cry. [demo](http://374632897.github.io/just-some-tips/src/testTimeout.html)
3. 在view里只能给view里的元素绑定事件？？？？
4. 将多维数组转化为一维数组：  
      

   ```js
   const arr = [1, 2, 3, 4, [5, 6, 7, 8, 9]];
   let   arr2 = arr.toString().split(',').map(item => item - 0);
   arr2; // Array [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

   // 也可以像下面这样
   [].concat.apply([], arr); // 这里不能使用call
   ```

###2016-02-24
1. 变量声明提升和函数声明提升
     

   ```js
   console.log(x); // function
   var x = '123';
   function x () {}
   
   console.log(y); // function

   function y () {}
   var y = '123';
   ```
   也就是说， 变量声明提升优先于函数声明提升。这样来看吧。 。 


   ```js
   // 首先进行变量声明提升，此时 var y = undefined, 声明了y但是没有赋值
   // 然后进行函数声明提升，把函数赋给了y
   console.log(y);
   function y () {}
   var y = '123';
   ```

2. 使用```:empty```选择器来实现```contentEditabel```元素的placeholder效果： 
    

   ```html
    <div contenteditable = 'true'></div>
   ```

   ```css
   div[contenteditable = 'true']{
     width: 400px;
     padding: 10px;
     line-height: 28px;
     min-height: 400px;
     border: 1px solid rgba(0, 0, 0, .3);
   }
   div[contenteditable = 'true']:empty:before{
     content: '请输入内容';
   }
   ```
   [实现contentEditable元素的placeholder效果DEMO](http://374632897.github.io/just-some-tips/DEMO/placeholderForContent.html)

3. 使用模板引擎的时候， 如果给标签属性插入变量， 记得加引号如```value = '{{- hello}}'```
4. CSS也要注意目录分层
5. 隐藏滚动条效果： 
      
  
 
   ```html
   <div class='list'>
    <div class="wrap">
      <ul>
        
      </ul>
    </div>
  </div>
   ```

   ```css
   .list{
     width: 140px;
     overflow: hidden;
     height: 600px;
     outline: 1px solid #f66;
   }
   .wrap{
     width: 157px; /* 包裹元素要比外层元素多17个像素， 17为滚动条的宽度 */
     height: 600px;
     overflow-x: hidden;
     overflow-y: scroll; /* 让滚动条一直显示出来， 并将其挤出内容区即可达到隐藏滚动条效果*/
   }
   ul{
     width: 157px;
   }
   ```
6. 使用CSS计数器
   * ```counter-reset: countername, startValue``` 后面跟一个计数器的名字和起始值， 如```counter-reset: list 2```表示初始化list计数器的值为2， 默认为0.
   * ```counter-increment: countername[,step]``` 指定增加的计数器和步进， 如：   
     ```counter-increment: list 5```, 则表示计数器list将会从5开始并以5为步进计数5， 10， 15.。。
   * ```content: ' ' counter(list)``` 调用计数器
   * 计数器需要配合```:before```, ```:after```伪元素的```content```属性来使用
   [计数器&&隐藏滚动条DEMO](http://374632897.github.io/just-some-tips/DEMO/hideScrollBar.html)
   [多个计数器目录结构](http://374632897.github.io/just-some-tips/DEMO/counter.html)

7. * ```Math.trunc()``` 用于去除一个数的小数部分， 参数可以为字符串或者数字，或者布尔值
   * ```Math.cbrt()```  用于计算一个数的立方根

8. ```Array.from()```可以把一个类数组对象转化为数组。可以接受第二个参数， 用来处理传入的数据并返回。    

   ```js
   Array.from(arrLike, (item, index, ary) => {
     console.log(item, index, ary);
     return item + 5;
   });
   // 1 0 undefined
   // 2 1 undefined
   // 3 2 undefined
   // Array [ 6, 7, 8 ]
   ```
9. 箭头函数不能用作构造函数。 
10. 如下代码： 关于Object的简写：  

   ```js
   var name = 'Jason', age = 22, obj = { name, age };
   obj; // Object { name: "Jason", age: 22 }
   ```

11. 关于属性赋值器    

   ```js
    var person = {
      _name: 'Jason',// 注意这里要加下划线， 不然会出现无限递归调用从而报错
      get name () {
        return this._name;
      },
      set name (value) {
        this._name = value;
      }

    }
    person._name
    // "Jason"
    person.name
    // "Jason"
   ```
12. 属性名的简洁写法的情况下， 属性名始终是字符串：  
     

   ```js
   var obj = {
     class () {
      
     }
   };
   ```

   定义属性名的时候可以用```[]```, 里面可以用变量或者表达式或者字符串  
   ```js
   var relation = 'husban', name = 'Jason', obj = {
     [relation]: name
   };
   obj
   // Object { husban: "Jason" }
   ```
    **属性名与简洁写法不能同时用， 会报错**


13. Proxy  

  ```js
  var obj = new Proxy({}, {
    get (target, key, receiver) {
      console.log(target, key , receiver);
    },
    set (target, key, value, receiver) {
      console.log(target, key , value, receiver)
     }

  });
  obj.name = 'Jason'
  // Object {  } name Jason Object {  }
  // "Jason"
  ```

###2016-03-01
=======
1. 注意`inline-block`元素默认对齐方式为基线对齐
2. `return`后面不能直接跟`throw new Error()`

3. `forEach`和`map`在遍历一个数组时， 将会自动忽略数组的undefined项, 并且不执行该次遍历



###2016-03-03
====
1. 好像绝对定位的元素可以不受滚动条影响？ 这个可以好好  研究下。 然而并不是。。 只是特定场景下出现的效果而已。 


###2016-03-04
1. 单例模式
     

   ```js
   var Time = (function () {
     var time;
     return function () {
       if (!time) time = + new Date();
       return time;
     };
   })();
   Time(); // 1457024261571
   Time(); // 1457024261571
   Time(); // 1457024261571
   Time(); // 1457024261571
   Time
   // function () {
   //   if (!time) time = + new Date();
   //   return time;
   // }
   ```
   也就是说下次执行Time()的时候执行的只是最开始赋值时得到的那个函数， 由于闭包， time一 直常驻于内存中， 所以通过闭包的返回值来访问该值的话一直能够访问到， 从而获取到的是最开始得到的值。 。 

###2016-03-05
=======
1. ``module.exports = moduleName``和```exports.moduleName = moduleName```的区别在于通过前者导出的是可以直接访问到的，而后者导出去的require得到的是一个对象， 需要再访问这个对象的对应属性才能拿到对应的模块儿
2. 


###2016-03-07
=======
1. `concat`不是在原数组上操作不是在原数组上操作！！！
2. JS里的数字是用浮点数来保存的。 所以。。   

  ```js
  5.52.toFixed(2); // '5.52'
  5.toFixed(2);   // Uncaught SyntaxError: Unexpected token ILLEGAL(…)
  5..toFixed(2);  // "5.00"
  (5).toFixed(2); // "5.00" 
  ```
  因为数字后面默认会有个小数点。。 所以使用``5.toFixed()``的时候， 那个点号表示的是小数点而不是操作符
3. 关于函数  

  ```js
  var test = function te () {
    console.log(test === te); // true 表示在这里两者都可以访问到。 并且是等价的。 
  };
  test; // function te...
  te; // te未定义
  ```
4. 关于`return`, `continue`, `break`  

  ```js
   var obj = {
     name : 'Jason',
     age: 22,
     gender: 'male'
   };
   for (const key in obj) {
     console.log('start');
     if (key === 'name') continue; // 跳出本次循环， 继续下次循环
     console.log('end')
   }
   for (const key in obj) {
     console.log('start');
     if (key === 'name') break; // 跳出所有循环， 执行循环外的语句
     console.log('end')
   }
  ```
  `return` 用于函数中返回一个值。 在非函数的环境中使用的话会报错。 

5. `GIT`命令
  * ``ls -ah``可以用于查看隐藏文件（夹）
  * ``git add filename`` 把文件添加到仓库  -- 暂存区
  * ``git add . ``即可一次添加所有更改文件
  * ``git commit -m 'msg' `` 把文件提交到仓库 -- 将暂存区的所有内容提交到当前分支
  * ``git status ``可以查看当前仓库的状态
  * ``git diff``查看改变的地方 (difference)  用于在add之前查看？ 
  * ``git diff [<options>] [<commit> [<commit>]] [--] [<path>...]``, 如``git diff HEAD -- readme.md``
  * ``git diff <srcBranch> <targetBranch>``
  * ``git log``可以查看提交记录， ``git log --pretty=online``美化提交记录
  * ``HEAD``表示当前版本， 上一个版本是``HEAD^``, 上上个版本是``HEAD^^``， 当有100个版本的时候则写成``HEAD~100``
  * ``git reset --hard HEAD``表示回退到上一个版本
  * ``git reset --hard``后面不跟版本号的话会回退到最近提交的版本上。 如果只add了但是没有commit，那么add的内容就会丢失
  * ``git reflog``用于查看命令历史
  * ``cat filename```即可查看文件
  * ``git checkout -- readme.md ```可以放弃工作区内对指定文件的修改。。 注意→＿←： **中间的两根中划线前后都有空格**
  * ``git push -u orgin master``把本地分支master 推送到远程。 由于远程库是空的，所以第一次推送的时候加上-u参数
  * ``git remote add origin git@github.com:374632897/git.git`` 关联远程仓库
  * ``git clone git@github.com:374632897/cropper ``即可克隆远程仓库
  * ``git checkout -b test``表示创建test分支并切换到该分支， 相当于``git branch test``, ``git checkout dev``
  * ``git merge``用于合并指定分支到当前分支。
  * ``git branch -d branchname``删除指定分支  不能删除当前分支
  * ``git log --graph``可以查看分支合并图
  * 通常情况下， 在合并分支的时候git会使用Fast forward模式，这种模式下删除分支后会丢失掉分支信息。 
  * ``git merge --no-ff -m 'some msg' branchname`` 即可使用非Fast forward模式来合并分支。 因为这种合并方式会产生新的commit所以需要加上-m参数
  * ``git stash``可以将当前内容存储起来， 以后再进行恢复
  * ``git stash apply``可以将当前stash恢复， 但是并不会删除stash里的内容， 需要调用``git stash drop``来删除。 
  * ``git stash pop``可以恢复当前stash, 并将该stash删除
  * ``git stash list``可以用来查看当前stash列表
  * ``git branch -D branchname``用来强行删除一个分支， 用于分支有更改但是尚未合并的情况
  * ``git remote``用于查看远程分支的信 息
  * ``git remote -v``查看更多的远程分支信息 如果没有推送权限则看不到push的信息
  
    ```sh
    origin  ssh://git@github.com/374632897/git.git (fetch)
    origin  ssh://git@github.com/374632897/git.git (push)

    ```
  * ``git pull``可以把远程的更新抓取下来
  * ``git tag <name> ``用于新建一个标签
  * ``git tag -a <tagname> -m 'some msgs'``用于指定标签信息
  * ``git tag``可以查看所有标签
  * ``git push origin <tagname> ``推送一个本地标签
  * ``git push origin --tags``可以推送全部未推送过的本地标签
  * ``git tag -d <tagname>`` 可以删除一个本地标签
  * ``git push origin :refs/tags/<tagname>``可以删除一个远程标签
  * ``git config --global color.ui true``让git显示颜色

6. 

###2016-03-09
=======
1. `mongoose`model
  ```js
  var PersonModel = mongoose.model('modelname', PersonSchema, 'CollectionName');
  ```
 第三个参数才是真正的集合名（表名）， 至于第一个参数随便怎么命名都行的。。 o(╯□╰)o  这个问题困扰自己这么久，结果一不小心看到了答案。。原来还是自己没有认真看API。   


2. 要删除数组中的指定值得项， 其实直接使用``filter``就挺好的了→＿←  
3. 关于``Notification``
   * `Notification.permission`可以获取桌面通知显示权限， ``default``为拒绝， ``denied``表示用户不想要通知，``granted``表示用户同意接受通知。
   * ``Notification.requestPermission()``执行此方法即可向用户请求权限
   * 要生成一个桌面通知即可通过`new Notification(some msgs)`来实现.

4. 关于``calc()``函数
   * ``calc(100% - 90px)``表示宽度为当前元素的父元素的100%减去90像素得到的宽度。这个应用场景还是比较宽泛的。

5. 箭头函数的this在函数语句里能够正确访问， 但是在打断点的时候访问会出现意外。 →＿←  原来并不是。。 因为执行场景中那只是一个回调而已。

###2016-03-11
=======
1. 关于自增自减运算符，   
   
   ```js
   (function () {
      var i = 0;
      console.log(i++); // 0 // 先执行再增加
      console.log(i);   // 1
   })();
   (function () {
      var i = 0;
      console.log(++i); // 1 // 也就是说前置自增运算符会先计算再执行
      console.log(i);   // 1
   })();

   ``` 
   后置递增（递减）优先级要高于前置递增（递减）一位。
2. void运算符表示表达式放弃返回值。

###2016-03-12
======
1. 一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。
   
  ```js
  // counter.js
  'use strict'
  let i = 0;
  module.exports = () => {
    return ++i;
  }

  // test.js
  const count1 = require('./counter.js');
  const count2 = require('./counter.js');

  console.log(count1 === count2); // true  也就是说实际上通过count2访问到的就是count1这个函数而不是另外又加载的函数
  console.log(count1()); // 1
  console.log(count2()); // 2
  console.log(count2()); // 3
  console.log(count1()); // 4

  ```

2. 关于``NODE_PATH`` --- 原来这个是在环境变量里定义的→_→  不是在程序里
3. 如果要引入目录下的`index.js`那么可以直接使用该目录的名字..
4. ``node /path``中的path其实是针对该磁盘目录的绝对路径.

5. 关于对象的键→＿←
  
  ```js
  this.model.set(attr, value); // 这里是对变量attr设置值为value , 其key为attr指向的变量
  this.model.set({ attr: value }); // 这里设置之后其键名就为'attr'  →_→  所以还是得留意一下子啊。。 
  ```
6. ``process.argv[0]``表示nodejs执行程序的路径
7. 

###2016-03-14
=======
1. 对于含有标签的内容，想获取纯文本的哈，  如果要是觉得用正则来替换会比较麻烦的话， 可以使用jQuery的text()方法。
  
   ```js
   $(`<p>${title}</p>`).text() // 这样就能够获取该字符串内的纯文本了。 

   ```
2. 直接用赋值方式将一个数组赋给另一个数组的话， 这两个数组实际上还是相互影响的， 也就是说他们是指向的同一个引用。 要想实现复制行为，可以用``([]).concat(arr)``

3. `Parsing error: Duplicate data property in object literal not allowed in strict mode`指的是在一个对象下面定义了重复的键值 →＿←  


4. ``window.hha`` ``undefined``  
   ``window.hha === undefined`` ``true``  
   ``window.hha === 'undefined'`` ``false``

5. ``li:nth-child(2)``表示选中li父元素的第二个且为li的子元素，
6. `p`标签内不能有默认为`block`的标签

###2016-03-15
=======
1. ``chrome``快捷键
  * `↑`  `↓ `  用于选择DOM元素， `←` `→`  折叠、展开元素
  * `ENTER` 编辑DOM元素属性
  * `H`隐藏DOM元素

2. 关于``web worker``: 
   
  ```js
   // worker.js
  var getData = function () {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (res) { // 注意这里的onreadystatechange是全部小写的啊
      if (xhr.readyState === 4 && xhr.status === 200) {
        try{
          self.postMessage(xhr.responseText); // 注意： 获取响应是通过xhr.responseText来获取。 
        } catch (e) {}
      }
    };
  };
  xhr.open('get', 'http://localhost:99/task/kanbanArchive/list');
  xhr.send();
  getData();

  // index.js
  const worker = new Worker('./worker.js');
  worker.onmessage = (res) => {
    console.info('worker has get sth, ', res);
  };
  ```
  * `web worker`不能访问主进程中的全局变量
  * `web worker`需要遵守同源策略
  * `new Worker()`的时候传递的参数为一个指向需要执行的文件的url
3. `timeStamp`时间戳

4. 关于`Backbone.Relational`， 如果要对关联的`collection`进行`reset`需要在绑定`collection`的`relationmodel`里进行操作。如果在c`ollection`里面操作的话， 最后会在`relation`里面再度重置， 从而无法达到期望效果。 



###2016-03-16
=======
1. `webpack`的一个问题， 直接复制粘贴文件或者文件夹的方式来更改文件的话， 那么webpack编译后的文件依然是原来的文件。 不知道是配置的问题还是他本身的问题。 

2. 通过检测滚动条的距离来实现按需加载
   * 通过`getBoundingClientRect()`
   * 获取容器元素的`getBoundingClientRect()`的`bottom`的值。
   * 获取容器最后一个元素的`getBoundingClientRect()`的`bottom`的值。
   * 前者减后者， 当所得值大于某个负值的时候发送请求加载内容。 
   * 这只是针对自己所需业务场景做的总结→＿←

3. 

###2016-03-17
=======
1. 连续按两次`shift`即可查找工程内的文件或函数， `ctrl + shift + n`
2. `F3`查找下一个， `shift + f3`查找上一个
3. `ctrl + r`文件内代码替换, `ctrl + shift + r`指定目录内代码批量替换


  
  
4. `import {} from 'path'`` 可以将路径里的对象一次性地获取到
5. `export default {}``可以将当前模块儿的变量以对象属性的方式导出
6. 

###2016-03-18
=======
1. 调用表单的`reset`方法， 可以重置表单
2. 直接调用`localStorage.attr = value`即可添加属性值到本地存储→＿←
3. 页面可见性API
   * `document.hidden` `{boolean}` 表示当前页面是可见还是不可见
   * `document.visibilityState` 返回当前页面的可见状态
   * `prerender`
   * `preview`
4. `chrome`
   * 在`source`面板下， 如果代码区左下角有`{}`的话， 点击就可以格式化代码， 在针对压缩后的代码的时候尤其适用
   * 在断点调试的时候， 如果一个函数里面包着另一个函数， 那么可以按F11进入该函数中

5. GIF截取工具： `LICECap`
6. `dropdown-menu`元素如果要是通过其他方式来控制其隐藏的话，那么之后再点击的话就不会再响应了。 →＿←
7. 一个奇怪的问题， 在chrome调试工具里选中了元素之后再去页面里面点击的话没反应。

###2016-03-18
=======
1. 知乎上看到的如何不使用循环创建一个长度为100的数组， 并且数组项的值要等于其索引， [原文地址](https://www.zhihu.com/question/41493194/answer/91196402)
   
   ```js
   '​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​'.split('').map(function (v, i) { return i; }); // 关于这里的第一个''其实并不是一个简单的引号o(╯□╰)o ， 零宽空格是个什么鬼
   
   Array(100).fill('naive').map(function (v, i) { return i; }); // Array.fill是ES6的语法
   
   // 通过生成器
   function* ary(i) {
     yield i;
     if (i < 99) {
       yield* ary(i + 1)
     }
   }
   Array.from(ary(0));
  
   // 使用递归
   (function f(i) {
     return i < 0 ? []: f(i - 1).concat(i);
   })(99);

   ```
   直接使用``new Array(100)``生成的是稀疏数组（此时控制台打印出来的是`[undefined * 100]），通过``Array.from(Array(100))``即可将稀疏数组转换成密集数组(此时控制台打印出来的是`[undefined,undefined...])，然后就可以调用`map`并能返回期望值了。   


   创建一个空的密集数组： ``Array.from({length: 100});`` 使用`Array.apply(null, {length: 100})也是可行的。

   也可以用拓展运算符。。。`[...Array(100)]`  
   ```js
   Object.keys(Array.apply(null, {length: 100}));

   Array.from(Array(100).keys())

   [...Array(100).keys()]
   ```
    **`apply`方法的参数可以是一个类数组对象，只要改对象带有length属性即可**


2. ``GitHub Pages``绑定域名需要将`CNAME`文件同步到`master`分支上。

3. 注意啊。。。``return ``是跳出当前函数执行环境，跳出循环使用``continue``或者``break``

###2016-03-20
=======
1. `document.body.onpagehide`事件相当于是在卸载的时候触发， 而不是切换标签页的时候触发。。。。
2. 数组去重： 
   
   ```js
   var ary = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9], ary2 = [], ary3 = [];
   for (var i = 0, len = ary.length; i < len; i++) {
     if(ary3.indexOf(ary[i]) === -1) ary3.push(ary[i])
   }
   ```





###2016-03-21
=======
1. 一般来说， JS中的数组是稀疏数组， 也就是说数组元素之间可以由空隙. 创建一个稀疏数组可以通过指定数组长度来创建。 稀疏数组的空隙项在使用`map`或者`forEach`遍历的时候并不会遍历到。
2. 创建密集数组： 
   
   ```js
   var ary = Array.apply(null, Array(3));
   // [undefined, undefined, undefined];
   ```
   这个时候就可以使用`map`或者`forEach`遍历了。 

3. 好神奇， ``console.log*(123)``居然不会报错
4. 其实表格布局在比较复杂的情况下还是很适用的。。。 
5. 今天在做更改文档结构的时候， 出现了模板加载错误（实际上并没有报错， 只是期望内容没有加载进去。 ）， 找了半天， 原来是把开始标签`<tr>`写进了判断内→＿←

=======
#Problems
=======
1. 关于基本类型中的Object类型和引用类型中的Object类型的区别
2. 按值传递和按引用传递的类型分别有哪些？
3. **有个小问题，是在官网制作过程中发现的，部分jpg图片在其他浏览器下显示正常，但是在IE下无法显示，不管是哪个版本的浏览器，都显示无法解码。考虑到之后会更换图片，所以这个问题暂时搁置，但是有时间了还是有必要研究下的。**
4. 关于元素跳行的问题→＿←
5. fileLeft，文件夹名字过长会出现跳动问题。。。。
6. 关于相关的事件，有些只需要再Item里触发的，就不用放到整个list里面去了，明天记得更正过来。不然逻辑显得很混乱。
7. 创建文件夹的时候，让新建文件夹在列表头部显示，并且自动获取焦点。
8. 有个bug,当文件夹删除之后，再创建的话不会加载数据(因为事件监听的对象没有了)
9. 关于滚动条的这个。。要搞清楚
10. 明天需要把代码里的重复部分给去掉。。有好些语句都是可以省略的来着
11. 关于正则表达式匹配的贪婪模式，如： 
   
    ```javascript
    var re = /\<\w*\>.*\<\/\w*\>/g;
    var str = '写下自己的答案，如果对<em>产品</em>操作有疑问，可以找杨悦对<em>产品</em> 6 80 对照问题熟悉<em>产品</em>，写下自己的答案，如果对<em>产品</em>操作有疑问，可以找杨悦对<em>产品</em>有建议的话找曹德季其他问题找戴盈盈';
    str.match(re);
    ```
    原本期待的是只返回一个被em包裹的元素，但是在这里匹配到的是这样的
    
    ```html
    <em>产品</em>，写下自己的答案，如果对<em>产品</em>操作有疑问，可以找杨悦对<em>产品</em>
    ```
    所以这大概就是贪婪模式在作怪吧，那么应该怎么改呢？ 现在我只是设置了文本溢出不显示，治标不治本的。
12. replace的时候如果使用或操作符的话，会变成单个字符匹配，所以就多次replace，这种问题应该怎么解决喃？
    如： 
    
    ```javascript
    const b = this.$('p.top').html().replace(/\&lt;em\&gt;/g, '<i class="type-link"> ').replace(/&lt;\\?\/em(\&gt;)?/g, ' </i>').replace(/\&nbsp;/g, '');

    var str = '<em>backbone</em>';
    str.match(/[<em>|<\/em>]/,''); // ["<"]
    str.match(/<\/em>/g); // ["</em>"]
    ```

    如果用[]把多个replace里的内容放在一起的话，就会出现匹配的时候是一个字符一个字符的匹配的情况。。这种怎么搞。。。 
13. 关于行高的一些问题
14. jQuery在初始化的时候slideUp()不会执行的问题
15. 关于exec方法当时看了没有练，结果现在忘了，有空了一定要好好练习下。
16. jQuery匹配unicode编码 ```characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+"```表示看不懂啊
17. Backbone绑定scroll无效？
18. 安装sass-loader出错的话。。。使用cnpm来安装
19. --save-dev，之间是没有空格的
20. 在公司电脑里sourcemap用了不生效。。。怎么回事。。 
21.
