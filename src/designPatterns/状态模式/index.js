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
