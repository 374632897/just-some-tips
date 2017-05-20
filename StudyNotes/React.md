### tip
* 组件名称总是以大写开始(表示该标签为一个React组件)
* 所有 React 组件都必须是纯函数，并禁止修改其自身 props 。
* 正确使用state
  * 不要直接修改state
  * state的更新可能是异步的（可以在setState里面使用函数的方式， 函数接受两个参数，prevState, props）
  * state更新会被浅合并

### 事件
* React事件名使用驼峰命名
* 通过 JSX , 你传递一个函数作为事件处理程序，而不是一个字符串。
* 不能通过return false来阻止默认行为， 需要显式调用preventDefault()
*

### 组件
* 在render方法里面返回null的时候，将不会渲染组件， 但是不会影响生命周期的触发
* 倾向于使用组合模式而不是继承来实现代码复用
* React 必须要在作用域上， 比如`import React, {Component} from 'react'`， 即使React并没有用到， 也要引入进来。
* 如果你已经有一个 object 类型的 props，并且希望在 JSX 中传入，你可以使用扩展操作符 ... 传入整个 props 对象。这两个组件是等效的：
* 属性扩展
  ```js
  // 以下两者是等价的
  // return <RowItem key = {index} name = {item.name} price = {item.price} stocked = {item.stocked} />
  return <RowItem key = {index} {...item} />
  ```

* [函数作为子元素](http://www.css88.com/react/docs/jsx-in-depth.html#functions--children)
* ref -> `ref = {(input) => this.textInput = input}`, 此时在组件内部可以通过textInput来访问到对应的Dom元素
* 函数式组件表示通过函数而不是Class来声明的组件
* 如果 ref 回调以内联函数的方式定义，在更新期间会被调用两次，第一次参数是 null ，之后参数是 DOM 元素。这是因为在每次渲染中都会创建一个新的函数实例。因此，React 需要清理旧的 ref 并且设置新的。通过将 ref 的回调函数定义成类的绑定函数的方式可以避免上述问题，但是在大多数例子中这都不是很重要。
* 使用字符串来声明ref的方式不再推荐使用
* 使用`defaultValue | defaultChecked`来为表单元素添加默认值
