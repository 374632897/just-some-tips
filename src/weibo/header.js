const fs = require('fs');
const cookie = require('./cookie');

module.exports = {
  'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language':'zh-CN,zh;q=0.8',
  'Cache-Control':'max-age=0',
  'Connection':'keep-alive',
  'Cookie': cookie,
  'Host':'weibo.com',
  'Referer':'http://login.sina.com.cn/sso/login.php?url=http%3A%2F%2Fweibo.com%2F374632897&_rand=1486961851.2726&gateway=1&service=miniblog&entry=miniblog&useticket=1&returntype=META&_client_version=0.6.23',
  'Upgrade-Insecure-Requests':'1',
  'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3010.0 Safari/537.36',
};
