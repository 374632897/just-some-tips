#jQuery源码阅读笔记
1. ```javascript
   rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
   ```
   这一段的意思是通过正则来匹配不换行的空白符
2. ~操作符表示按位取反
   * ~1 === -2, ~2 === -3, ~3 === -4, ~-0 === -1
   * ~-1 === 0, ~-0 === -1, ~-2 === 1 , ~-3=== 2;
3. o(╯□╰)o关于IE8及以下
   * 在IE8及以下的浏览器中，通过getAttribute来访问类名的话，需要通过className而不是class;
   * 通过getAttribute来访问元素特性的时候，传参应该和特性名称一样(IE8及以下是个例外)，不然就会返回null，而className只有再通过对象属性访问特性时才会用到
   * IE8(及以下)不支持createEvent();
   * 注意，typeof是小写，全小写！！！！后面的内容加不加括号都行

   ```javascript
   function testLessIE8() {
     var div = document.createElement('div');
     div.className = 'i';
     if (div.getAttribute('className')) {
       alert('你的浏览器小于IE8');
     } else {
      alert('你的浏览器不是老古董哦');
     }
   }
   ```

4. 对于Input元素来说，部分属性，如value 和 checked，通过attribute来获取到的是初始值，直接通过访问元素的属性（如：div.checked)来获取到的则是动态值
