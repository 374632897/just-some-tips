const fs = require('fs');
const cookie = fs.readFileSync('./cookie').toString();
module.exports = {
  'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language':'zh-CN,zh;q=0.8',
  'Cache-Control':'max-age=0',
  'Connection':'keep-alive',
  'Cookie':'SINAGLOBAL=2213314198302.7783.1478347686914; un=779714169@qq.com; TC-Page-G0=b05711a62e11e2c666cc954f2ef362fb; SCF=Aslhlh711HBVZWw9npAyja-cpaaUd2xvKmx6lNnsl5JBOmGOM8DE97vqBHHV_nYbBFZpj37sHB46We2sioQn0Ys.; SUB=_2A251pUzrDeTxGeVO41IY8CjOwzyIHXVW0zkjrDV8PUNbmtAKLWLMkW93dzG1bB158OjzpYUo1HQAteDUGA..; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WWEPTcarhymFsuYkoGbCaUu5JpX5KMhUgL.Foe71h54ehqE1h52dJLoIpjLxKML1K.LB.BLxKMLBKML12zLxKMLB.2LBo2t; SUHB=0oU4A02nweF-SF; ALF=1518497851; SSOLoginState=1486961851; _s_tentry=login.sina.com.cn; Apache=8980350167774.137.1486961858526; ULV=1486961858533:6:4:2:8980350167774.137.1486961858526:1486961647388; TC-V5-G0=458f595f33516d1bf8aecf60d4acf0bf; UOR=,,login.sina.com.cn',
  'Host':'weibo.com',
  'Referer':'http://login.sina.com.cn/sso/login.php?url=http%3A%2F%2Fweibo.com%2F374632897&_rand=1486961851.2726&gateway=1&service=miniblog&entry=miniblog&useticket=1&returntype=META&_client_version=0.6.23',
  'Upgrade-Insecure-Requests':'1',
  'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3010.0 Safari/537.36',
};
