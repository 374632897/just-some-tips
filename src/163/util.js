const BASE_URL = 'http://music.163.com/weapi/v1/resource/';
const CSRF = '/?csrf_token=';
const COMMENTS_URL = BASE_URL + 'comments/R_SO_4_';

function getCommentsUrl (songsId) {
  return COMMENTS_URL + songsId + CSRF;
}

module.exports = {
  getCommentsUrl,
  BASE_URL
};
