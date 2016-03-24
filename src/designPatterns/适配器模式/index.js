var baiduMap = {
  display: function () {
    console.log('开始渲染百度地图')
  },
  show: function () {
    this.display();
  }
};

var googleMap = {
  show: function () {
    console.log('开始渲染Google地图')
  } 
};

var renderMap = function (map) {
  map.show();
};
renderMap(baiduMap);
renderMap(googleMap);