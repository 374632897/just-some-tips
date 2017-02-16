// →_← 这部分代码问题很大。
const cheerio = require('cheerio');
const request = require('request');
const { getFocusUrlByPage } = require('./util');
const headers = require('./header');
const MatchReg = /action-data=\\"(uid=.*?)">/g;
const fs = require('fs');
let page = 2;
let Users = [];

function doRequest (innerPage) {
  if (page > 13) return;
  const url = getFocusUrlByPage(innerPage);
  console.log(`正在获取第 ${innerPage} 页的内容`);
  request.get({ url, headers }, (err, res, body) => {
    if (err) {
      fs.writeFileSync('./myFocus.log', JSON.stringify(Users));
      return console.log(`第 ${innerPage} 页获取失败`, err);
    }
    Users = Users.concat(body.match(MatchReg))
    // Users.push(body.match(MatchReg));
    doRequest(++page);

    if (page > 13) {
      fs.writeFileSync('./myFocus.log', JSON.stringify(Users));
      console.log('成功写入文件');
    }
  }).on('err', (err) => {
    console.log(`第 ${innerPage} 页获取失败`);
    console.log(err);
  });
}
function start () {
  doRequest(page++);
  doRequest(page++);
  doRequest(page++);
  doRequest(page++);
  doRequest(page++);
  doRequest(page++);
  doRequest(page++);
  doRequest(page++);
  doRequest(page++);
}
start();


