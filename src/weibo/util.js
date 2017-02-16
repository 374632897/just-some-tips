exports.getUrlByPage = getUrlByPage;
exports.getFocusUrlByPage = getFocusUrlByPage;

function getUrlByPage (page = 2) {
  return `http://weibo.com/p/1005052030202417/follow?relate=fans&page=${page}`;
};
function getFocusUrlByPage (page = 1) {
  return `http://weibo.com/p/1005052030202417/myfollow?t=${page}`;
}
