#####context
解析```entry```选项的基础路径（绝对路径）

#####entry
1. 如果entry的值是字符串，那么将会在读取的时候，解析为一个模块儿
2. 如果entry的值是一个数组，那么所有数组项都会读取，并且导出最后一项
3. 如果使用的是一个对象，那么将会为对象下面创建多个bundle
4. 可以使用

#WEBPACK学习    

1. 安装 ```npm instal webpack -g```  全局安装
2. 编译，在当前目录下运行命令：  

   ```
   webpack ./app.js bundle.js
   ```  

   然后就会将当前目录下的app.js编译为bundle.js
3. 第一个Loader

   ```sh
   npm install css-loader style-loader // 局部安装，不需要加-g
   ```

4. 绑定模块儿
  
  ```sh
  webpack ./app.js bundle.js --module-bind 'css=style!css' # webpack 入口文件 出口文件 --module-bind '文件类型=读取模块儿'
  ```

5. 添加配置文件

  ```javascript
  // webpack.config.js
  module.exports = {
    entry: './app.js',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style!css'}
      ]
    }
  };
  ```
  然后就只需要运行```webpack```就可以自动编译了，如一个sass文件，就需要先用sass-loader来编译，然后再用style!css把他们插入到JS中

6. 编译进度显示
   
   ```sh
   webpack --progress --colors
   ```
   但是我用了之后好像没用啊。。。难道方式错误？

7. 观察模式
   
   ```sh
   wepack --progress --colors --watch
   ```
   当使用观察模式后，webpack将会为所有文件增加监听器。webpack同时也会缓存未变动的模块儿

8. 服务器
  
  ```sh
  npm install webpack-dev-server -g
  webpack-dev-server --progress --colors
  ```
  这个功能会默认绑定电脑的8080端口到当前页，然后在文件发生变化的时候会自动刷新
  我在运行的时候出了错误，因为我的8080端口已经被占用了。。。

9. 修改端口号
   ```sh
   webpack-dev-server --port <number> # 即可更改默认的端口号
   ```
10. 关于入口文件和出口文件

   ```sh
   module.exports = {
      entry: {
        app: './app.js',
        page1: ['./entry1.js', './entry2.js'] # 可以用数组来表示
      },
      output: {
        publicPath:'/assets', # publicPath用于在网页中的url或者href的相对路径
        path: __dirname + '/build',  # output.path需要是绝对路径，所以可以用__dirname + ''来代替
        filename: '[name].bundle.js'  # name 或id 表示的是entry对象里的键名  还可以在这里使用[hash]或者[chunkhash]
      },
      module: {
        loaders: [
          { test: /\.css$/, loader: 'style!css'}
        ]
      }
    };
   ```
11. module.loaders是一个数组，他可以包含以下属性
 * test 
   必须 可以正则来表示，或者使用包含绝对路径的字符串来表示
 * exclude
   必须 可以正则来表示，或者使用包含绝对路径的字符串来表示
 * include
   必须 可以正则来表示，或者使用包含绝对路径的字符串来表示
 * loader
  用!分隔的loaders
 * loaders  
   字符串来表示的Loaders数组

 ```sh  
 module.loaders: [
  {
    // "test" 用于匹配文件扩展名
    test: /\.jsx$/,

    // "include" 用来匹配路径
    include: [
      path.resolve(__dirname, "app/src"),
      path.resolve(__dirname, "app/test")
    ],

    // "exclude" 用来排除特殊项
    // try to prefer "include" when possible

    // the "loader"
    loader: "babel-loader"
  }
 ]
 ```

12. module.preLoader

13. resolve  影响到模块儿解析的选项
 这里感觉还是挺重要的，需要好好学习下
 * resolve.alias 用其他模块儿路径来代替模块儿，通常是一个对象。键名为模块儿名字，键值是路径。如果键名以$结尾，那么直接通过require(keyname)就能访问到对应位置，如果再加文件名的话就会报错
 * resolve.root
  ** 必须是绝对路径 **
  ```javascript  
  var path = require('path');

  // ...
  resolve: {
    root: [
      path.resolve('./app/modules'),
      path.resolve('./vendor/modules')
    ]
  }
  ```

14. 





##Problem
1. 关于安装node-sass报错的问题。
   * python版本需要是2.x的而不能是3.x
   * 安装.NetFramwork SDK和Visual Studio
