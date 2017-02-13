exports.getUrlByPage = getUrlByPage;

function getUrlByPage (page = 2) {
  return `http://weibo.com/p/1005052030202417/follow?relate=fans&page=${page}`;
};

