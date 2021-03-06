const request = require('request');
const headers = require('./headers');
const { getCommentsUrl } = require('./util');

class Music {

  getComments (id, form, cb) {
    this.doRequest(getCommentsUrl(id), form, (a, b, c) => {
      console.log(c);
    });
  }

  doRequest (url, form = {}, cb = function () {}) {
    request({
      url, headers, form,
      method: 'post',
    }, (a, b, c) => {
      cb(a, b, c);
    });
  }
}

new Music().getComments(209115, {
  'params':'I/Ib0p3edyUjQuSuo21Wbp7n6e0DNQzqi0wmHdeYg0r/a44I03iyM8jmtmxTQH2iI7uV/XHrgVAwKyaXxA8szSQNjNaOXrEUkwSlF4uGOpo3B6J1tuuLGh9b1EFyZvK2LQ4J5MxJu8G3XwJG9pmseUcpDP0d9lv8ddmy+PbssevSGB9hY5oC4h/bIfTBkJ2H',
  'encSecKey':'2fab1038b271fc2e1cb6ab195df0133e7b0983ea14aaf5547c27566cfce3c5b79db281af3ae2d15f9b6b95ae3e2a57aedb95875b2c2bd95f1e51cb536d51c60983684dbb745b3edc56c6a3c1e67d1bcde1054c3b27dfc8de47a2cff30929b98d19f2ff803d319ab8f6c4e322901d887afe8ff435a79316a0bf3b6ca3b4c61704'
});

module.exports = Music;
