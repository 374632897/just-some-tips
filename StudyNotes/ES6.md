1. 字符串方法： 
   * `includes`
   * `startsWith`
   * `endsWith`
   * 注意， 是`starts`和`ends`
   * 以上每种方法都接收两个参数， 要查找的字符串和开始的位置。 
   * 当没有第二个参数的时候， `startsWith`和`includes`方法会从字符串开始查找， 而`endsWith`方法会从字符串末尾开始。 
   * 当有第二个参数的时候， `startsWith`和`includes`方法会从提供的索引处查找， 而`endsWith`方法会从字符串长度减去第二个参数开始查找。 

   ```js
    const str = 'Jason';
    str.includes('Ja')
    // true
    str.includes('aB');
    // false
    str.startsWith('Ja')
    // true
    str.endsWith('on')
    // true
    str.startsWith('son', 2)
    // true
    str.endsWith('son', 1)
    // false
    str.endsWith('son', 8)
    // true
    str.endsWith('son', str.length)
    // true
   ```

   * `repeat`接收一个表示重复次数的参数
