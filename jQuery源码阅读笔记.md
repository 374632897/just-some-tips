#jQuery源码阅读笔记
1. ```javascript
   rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
   ```
   这一段的意思是通过正则来匹配不换行的空白符