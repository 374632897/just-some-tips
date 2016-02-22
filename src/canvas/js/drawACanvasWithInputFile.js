(function () {
  var obj = {
    reference: [],
    // 获取上传文件按钮
    getInputEle: function () {
      var Ele = document.getElementsByTagName('input');
      for (var i = 0, len = Ele.length; i < len; i++) {
        if (Ele[i].type = 'file') {
          return Ele[i];
        }
      }
    },
    // 读取传入文件
    // @param img [读取文件后设置传入图片的src为文件的url]
    readInputFile: function (img) {
      var Ele = this.getInputEle(), url;
      obj.reference.push(Ele);
      Ele.onchange = function () {
        var file = this.files[0], reader = new FileReader();
        obj.reference.push(reader);
        reader.onload = function () {
          url = this.result;
          try{
            img.src = url;
          } catch (e) {}
        };
        if (file !== undefined) {
          reader.readAsDataURL(file);
        }
      };
    },
    // 绘制图片
    drawImage: function () {
      var img = new Image(), _this = this;
      var point = {
        x : 100,
        y : 100,
        height: 400,
        width: 300 
      };
      obj.reference.push(img);
      img.onload = function () {
        // 每次绘制之前先清空画布
        var ratio = img.offsetWidth / img.offsetHeight;
        console.log(ratio);

        ctx.clearRect(0, 0, oC.width, oC.height);
        ctx.drawImage(this, 0, 0);

        // 绘制另一幅图片
        ctx2.clearRect(0, 0, oC.width, oC.height);
        ctx2.drawImage(this, 0, 0);

        _this.drawAMask();
        // ctx.drawImage(cloneCanvas, 0, 0, 500, 400, 0, 0, 500, 400);
        ctx.drawImage(cloneCanvas, 0, 0, oC.width, oC.height, 0, 0, 500, 400);
        ctx.stroke


      };
      this.readInputFile(img);
    },
    drawAMask: function () {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fillRect(0, 0, oC.width, oC.height);
      ctx.fill();
    },
    drawASelectArea: function () {

    },
    // 清除引用
    clearReference: function () {
      var btn = document.getElementById('clear');
      btn.onclick = function () {
        var result = confirm('单击此按钮后将无法继续选择图片，确定继续操作？');
        if (!result) return;
        obj.reference.forEach(function (item,index) {
          // debugger;
          item.onload = null;
          item.onchange = null;
        });
        btn.onclick = null;
      };
    }
  };


  obj.drawImage();


  obj.clearReference();
})();
