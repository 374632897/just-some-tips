window.external = {
  upload : function (state) {
    console.log(state);
  }
};
var plugin = (function () {
  var plugin = document.createElement('embed');
  plugin.style.display = 'none';
  plugin.type = 'application/txftn-webkit';
  plugin.sign = function () {
    console.log('开始扫描文件');
  };
  plugin.pause = function () {
    console.log('暂停文件上传');
  };
  plugin.uploading = function () {
    console.log('开始文件上传');
  };
  plugin.del = function () {
    console.log('删除文件上传');
  };
  plugin.done = function () {
    console.log('文件上传完成');
  };
  document.body.appendChild(plugin);
  return plugin;
})();

var Upload = function (fileName) {
  this.plugin = plugin;
  this.fileName = fileName;
  this.button1  = null;
  this.button2  = null;
  this.signState = new SignState(this);
  this.uploadingState = new UploadingState(this);
  this.pauseState = new PauseState(this);
  this.doneState  = new DoneState(this);
  this.errorState = new ErrorState(this);
  this.currState  = new CurrState(this);
};
Upload.prototype.init = function () {
  // var _this = this;
  this.dom = document.createElement('div');
  this.dom.html = 
    '<span>文件名称:' + this.fileName + '</span>\
    <button data-action = "button1">扫描中</button>\
    <button data-action = "button2">删除</button>';
  document.body.append(this.dom);

  this.button1 = this.dom.querySelector('[data-action = "button1"]');
  this.button2 = this.dom.querySelector('[data-action = "button2"]');

  this.bindEvent();
};

Upload.prototype.bindEvent = function () {
  var _this = this;
}
