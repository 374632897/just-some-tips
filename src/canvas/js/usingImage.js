/**
 * 图片绘制的图片原可以为一下四种
 * 1. img元素 （img标签或者Image对象）  在img的属性上使用crossOrigin属性可以进行跨域访问， 如果不添加这个属性访问跨域图片将会污染画布
 * 2. video元素， 获取当前帧的图像
 * 3. canvas元素
 * 4. ImageBitmap  高性能位图， 可以低延迟地进行绘制
 *
 * 统一由canvasImageSource来引用
 *
 * 注意： 
 * 1. 先为图片绑定onload事件
 * 2. 再指定图片的src
 *
 * drawImage三种方法： 
 * 1. drawImage(img, x, y)                               ---- 绘制图片
 * 2. drawImage(img, x, y, width, height)                ---- 控制缩放
 * 3. drawImage(img, sx, sy, sw, sh, dx, dy, dw,dh )     ---- 切片
 *    表示在图像sx, sy的地方裁剪掉sw, sh这一块儿， 然后在dx, dy这个点上， 按照dw, dh显示出来
 */

function drawImageWithInputFile () {
  var img = new Image(), fileUpload = getFileUploadEle();
  // console.log(fileUpload);
  // img.src = fileUpload.
  fileUpload.onchange = function () {
    var file = this.files[0];
    img.onload = function () {
      ctx.drawImage(this, 0, 0);
    };
    // var src = this.value; // 原来使用这种方法来读取上传文件是错误的
    readInputFile(file, img);
    // img.src = 'F:/Github/just-some-tips/src/canvas/img/1.png'; // 这里也可以
  }
}
// drawImageWithInputFile();
// 
// 读取上传文件
function readInputFile (file, img) {
  var reader = new FileReader();
  reader.onload = function () {
    var url = this.result; // 为base64
    img.src = url;    
  };
  reader.readAsDataURL(file); // 注意， 这里是大写！！！！！！

}
function drawImageWithRelativePath () {
  var img = new Image();
  img.onload = function () {
    // ctx.drawImage(this, 0, 0);
    ctx.drawImage(this, 0, 0, 200, 200); // 最后两个参数分别表示绘制图形的宽高 用于缩放（scale)
    // 绘制重复图片
    // drawRepeatImage(this);

  };
  img.src = 'img/1.png'; 
  // 好奇怪， 这里为什么是这样啊？？？相对路径的话不是应该加'../'的来着
  // 难道是因为最后会把这段代码放到html里面， 所以这个路径就是相对index.html来的？？？ 
}
// drawImageWithRelativePath();

function testPath() {
  var img = new Image();
  // img.src = '../img/1.png';
  // img.src = 'img/1.png';
  img.src = 'F:/Github/just-some-tips/src/canvas/img/1.png'; // 绝对路径是可以的啊。。。。 
  document.body.appendChild(img);
}
// testPath();

function slicing () {
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(this, 100, 100, 100, 100);
    ctx.moveTo(200, 200);

    ctx.strokeStyle = '#f66';
    // ctx.beginPath();
    ctx.lineTo(200, 500);

    ctx.moveTo(200, 200);
    ctx.lineTo(500, 200);
    // ctx.closePath();

    ctx.stroke();

    // ctx.drawImage(this, 100, 100, 500, 500, 200, 200, 300, 300);
    // ctx.drawImage(this, 0, 0, 600, 600, 200, 200, 300, 300);
    ctx.drawImage(this, 0, 0, 600, 600, 200, 200, 300, 300);
  };
  img.src = 'img/1.png';
}

slicing();



function drawRepeatImage (img) {
  var WIDTH = HEIGHT = 100, xNum = oC.width / WIDTH, yNum = oC.height / HEIGHT;
  for (var i = 0; i < yNum; i++) {
    for (var j = 0; j < xNum; j++) {
      ctx.drawImage(img, (WIDTH + 40) * j, (HEIGHT + 50) * i, WIDTH, HEIGHT);
    }
  }
}

function getFileUploadEle () {
  var inputEle = document.getElementsByTagName('input');
  for (var i = 0, len = inputEle.length; i < len; i++) {
    if (inputEle[i].type = 'file') {
      return inputEle[i];
      // break; // 直接return就会跳出循环了。。。而且break加在这里也根本执行不到o(╯□╰)o   突然变笨了
    }
  }
}

