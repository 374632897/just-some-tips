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
1. 如果在浏览器不同标签页里发现同一页面的呈现情况不一致。。。比如说屏幕本身宽度为1600px，但是审查元素的时
   候，显示元素宽度和设定的宽度不一致，那么考虑是不是缩放所致 -- 笑cry

2. 如果 npm install 的时候报错，则可以尝试以管理员身份运行
3. 话说之前安装node-sass的时候提示没有python执行环境，后来不知怎么的又好了，今天安装webpack的时候也这样，
   我稀里糊涂的安装了一些东西，后来    也成功了，真是不知道怎么回事。
4. 如果链接在行尾因为宽度不够而导致内容换行显示，那么对链接设置display:inline-block即可。
5. 

###2015-12-15
=====
1. new Date和new Date()的执行结果相同，但是new Date不具有Date对象的相关方法，而new Date()则可以。这里其实
   可以直接理解为，带括号之后，指向的是该函数的返回值，而不带的时候，指向的是对这个函数的引用而已。
2. 静态类型语言指的是在编译的时候就已经能够确定变量的值的类型的语言，动态类型语言是指在执行的时候才能确定
   类型的语言，也就是在变量被赋    值之后才能确定其类型。
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
    括号，虽然有效，但是并不推荐。    此外，new Date和new Date()是有区别的，后者可以使用相关方法，而前者不行。这里上面已经提到过了。
   **要搞懂基本类型里的Object类型和引用类型里的Object类型的区别**
3. 
   
   `````javascript
   var obj = {
     name: 'Jiangguoxi',
     getName: function (){
       console.log(this.name);
     }
   };
   obj.getName();//'Jiangguoxi'
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
3. {{ }}用来执行JS，{{-}}用来插入普通变量，{{=}}用来插入需要解析成Html的变量**注意：等号或者减号后面没有空格**
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
   f();//6
   ````

   在这里把f指向func的运行结果，而func的运行结果也就是返回一个函数，从而使得f变成了匿名函数的引用，因此，当调用f()时，就会执行该匿名函数，因为该匿名函数是在func内部的，而匿名函数内部又会返回外层函数的a值，从而使得我们可以在func函数的外部获取到func函数内部的值。 

###2015-12-19
=======
1. Array.prototype.push === [].push //true
   后面跟有方法的时候就为true，没有跟方法，则为false
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

     `````javascript
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

###2015-12-21
======
1. 在向View传递Model的时候，需要将Model实例化，并且只有实例化的Model才能使用toJSON()方法。
2. 在Model中，以前的定义默认参数的defaults:{}，不用写了，直接写在super({})里面就行。

   `````javascript
   class extends Backbone.RelationalModel {
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
8. 尝试在render() 中定义input之类的？？？
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
   * 对父元素设置**text-align:center**;
   * 对子元素设置**display:inline-block**;
   * 这样子的话，即使子元素里面有块级元素，那么该块级元素也不会充满整行 o(╯□╰)o  怎么说呢，感觉就像是里面的块级元素也被设置了inline-block一样，但是事实上他们的display依然是block;
   * 这个方案的缺点就是text-align默认是个继承属性，所以如果其子孙元素的text-align值不符合的话，还要单独写。



###2015-12-22
=======
1. 在添加监听事件时，回调函数不能加括号，如：
   
   `````this.listenTo(this.model, 'change', this.render)`````

   加括号是不行的。 

2. if语句结尾不用加分号

3. 在View里面的events里面，如果触发元素是view的el，那么在事件后面不用加对应的元素，比如一个view的tagName定义为li ,那么在events里面只需要加入````'click   ': 'events'````即可。

4. 通过View给ViewItem传model的时候，可以在constructor里面引入model，需要注意的是，因为iniatialize会先于constructor里面的内容执行，所以说，在constructor里面定义的属性什么的，不会首先被initialize使用到，解决办法是，把iniatialize里面的语句放到constructor里面去。另外，在constructor里面访问传入的model的时候，需要用model.model才能访问到，这是为什么？

5. 


###2015-12-23
=======
1. 今天小静静生日, Happy Birthday O(∩_∩)O哈哈~
2. 关于collection和Model的关联，使用Relational的话：
   * 在定义model的时候使用RelationModel来定义。
   * 在一个管理各个部分的model的总的Model中，定义relations属性，其值应该是一个数组，数组里面存入的是对象
   * relations内对象有四个属性：
     * type: 不知道是什么。。。。值为Backbone.HasMany
     * key:  在外部环境中通过这个key来获取对应的对象
     * relatedModel: 所关联的Model
     * collectionType: 所关联的Collection。通过key来获取的就是这个
   * 比如我在外部环境中引入了这个总的Model为model，Model中的relations的key值为Item，那么通过model.get('Item')即可访问到关联的Collection
3. 逻辑是否正确是找出问题的关键。出错的时候，需要考虑是不是自己的逻辑设计不合理
   * 我在collection里面设置的获取order值的时候，之前设置的是如果length=1,则返回1，否则返回最后一个的order加1，但是后来改成Relational之后，默认没有添加model了，所以长度为0,然后获取order的方法没有变，而最后一个Model根本不存在，所以就报错了。

4. 只给input设置高度而不设置行高，如果设置了行高的话，Safari下光标会显示异常。
5. 如果点击一个元素出现了不期望的行为，则考虑是不是事件冒泡引起的。e.stopPropagation()。
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
  
  * 第三种情况下，直接把log()的执行结果绑定到onclick上，但是这本身是没有意义的，因为这里的执行结果是一个单独的语句而不是函数。所以当语句执行到这里的时候，就直接执行了log()，而因为这个绑定是无效的，所以document.onclick = null;之后再点击也没有反应了

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
1. 使用Backbone.Relational的时候，关联的collectionType需要时collection的原型而不是他的实例，所以在导出collection的时候不要加new操作符。
2. **出现滚动条的时候由于滚动条占位，元素被挤开了，怎么解决？**
3. 写font的缩写的时候，font-size和family是必须的
4. where方法返回的是一个数组，所以通过where来过滤某一个元素的时候，需要在最后加个[0];
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
   原文地址： http://jingpin.jikexueyuan.com/article/34632.html

2. Safari下input 的 line-height 和height不一致的话会出现光标错位情况

###2015-12-27
=======
1. 操作节点的时候如果需要把一个节点移动到父节点末尾，那么可以直接使用appendChild()，这个方法如果传入一个节点，那么就会把该节点直接放到父节点尾部。另外，关于使用normalize()来代替children的方法行不通，因为normalize()只是把相邻的文本节点给合并了。
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
6. 正则里面的或还是需要用好， 比如，/[\D | 0]/g,就是匹配 所有非数字和0

###2015-12-28
=======
1. 把一个collection里面的model添加到另一个collection的话，那么这两个collection共用一个model，在一个collection里面修改model，另一个collection里的对应model也会受到影响
2. 清空一个collection，使用collection.reset()方法，貌似each,forEach遍历来删除单个的话都不行，因为每次遍历的时候长度都会变化，刷新频率跟不上，从而会出错。 
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
   * vertical-align对块状元素不生效？
4. 使用“*”通配符的话会大大增加css的渲染，效率低
5. 监听多个不同的事件时，使用空格分隔
6. collection也可以使用toJSON()， ````collection.toJSON()````,返回的是collection里面每个model的属性的数组。每个model为一个对象
7. 关于水平居中，使用绝对定位的话有三种方法
   * 定义left: 50%, 然后margin-left为自身宽度的一半的负值
   * 定义left: 50%, 然后使用transform: translateX(-50%);
   * 定义left和right，使之相等，这样就能把元素撑开了
8. 在一个上下文里获取元素
   ````$(selector,this.el)```` 获取到的是DOM对象
   ````this.$(selector)````    获取到的是jQuery对象
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
