(function () {
  var obj = {
    reference: [],
    img: null,
    getPosition: function () {
      var point = getComputedStyle(oPoint), clone = getComputedStyle(cloneCanvas), cvs = getComputedStyle(oC);
      this.pointStyle = {
        x: parseInt(point.left, 10),
        y: parseInt(point.top, 10)
      }; 
      this.cloneStyle = {
        x: parseInt(clone.left, 10),
        y: parseInt(clone.top, 10)
      };
      this.sourceStyle = {
        x: parseInt(cvs.left, 10),
        y: parseInt(cvs.top, 10)
      };
      this.dis = {
        x: 50,
        y: 50
      };
      this.cloneRect = cloneCanvas.getBoundingClientRect();
      this.sourceRect = cvs;

    },
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
        _this.img = this;

        // 每次绘制之前先清空画布
        var ratio = img.offsetWidth / img.offsetHeight;
        console.log(ratio);

        _this.drawSelectedImage();
        _this.getPosition();
      };
      this.readInputFile(img);
    },
    drawAMask: function () {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fillRect(0, 0, oC.width, oC.height);
      ctx.fill();
    },
    drawSelectedImage: function () {
      var x = 0, y = 0, r = oC.width, disX = - this.dis.x, disY = - this.dis.y, dx = this.sourceStyle.x + disX, dy = this.sourceStyle.y + disY;

      ctx.clearRect(0, 0, oC.width, oC.height);
      ctx.drawImage(this.img, 0, 0, oC.width, oC.height);
      // 
      // 第2，3个参数为相对oC而言的
      ctx2.drawImage(oC, dx, dy, r, r, disX, disY, r, r);
      ctx2.lineWidth = 5;
      ctx2.strokeRect(x, y, cloneCanvas.width, cloneCanvas.height);
      ctx2.stroke();

      this.drawAMask();

    },
    strechPoint: function (e) {
      var moveDis = this.getPoint(e), x = moveDis.x, y = moveDis.y, 
        pointStyle = obj.pointStyle, cloneStyle = obj.cloneStyle,
        cloneCanvasWidth = cloneCanvas.width;



      pointStyle.x += x;
      pointStyle.y += y;

      cloneCanvas.width  = cloneCanvas.height = cloneCanvasWidth + x;

      oPoint.style.left  = pointStyle.x + 'px';
      oPoint.style.top = pointStyle.y + 'px';

      this.drawSelectedImage();
    },
    getPoint:function (e) {
      var rightBottomMoveDis = {};
      var cloneRect = this.cloneRect, 
        eX = e.clientX, eY = e.clientY,
        width = cloneCanvas.width, height = cloneCanvas.height;

      rightBottomMoveDis.x = rightBottomMoveDis.y = eX - (cloneRect.left + width);
      return rightBottomMoveDis;
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
    },
    init: function () {
      this.getPosition();
      this.drawImage();
      this.bindPointEvent();
      this.bindCloneCanvasEvent();
      this.clearReference();
    },
    bindPointEvent: function () {
      oPoint.onmousedown = obj.mouseover;
    },
    bindCloneCanvasEvent: function () {
      var _this = this;
      cloneCanvas.onmousedown = function (e) {
        var srcLeft = parseInt(_this.sourceRect.left, 10),
          srcTop = parseInt(_this.sourceRect.top, 10),
          disX = e.clientX - srcLeft - obj.dis.x,
          disY = e.clientY - srcTop - obj.dis.y;
        console.log(disX, disY);
      }
    },
    mouseover: function (e) {
      e.preventDefault();
      obj.mouseMove(e);
    },
    mouseMove: function (e) {
      document.onmousemove = function (e) {
        e.preventDefault();
        obj.strechPoint(e);
        document.onmouseup = function () {
          this.onmousemove = null;
          this.onmouseup = null;
        }

      }
    }
  };
  obj.init();


  // obj.drawImage();

  

  // obj.clearReference();
})();
