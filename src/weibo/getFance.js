const cheerio = require('cheerio');
const request = require('request');
const { getUrlByPage } = require('./util');
const headers = require('./header');
const MatchReg = /uid=(\d+)&nick=(\S*)/g;
let Users = [];
const fs = require('fs');
let page = 2;

function doRequest (innerPage) {
  if (page > 62) return fs.writeFileSync('./follower.log', JSON.stringify(Users));
  const url = getUrlByPage(innerPage);
  console.log(`正在获取第 ${innerPage} 页的内容`);
  request.get({ url, headers }, (err, res, body) => {
    if (err) {
      return console.log(`第 ${innerPage} 页获取失败`, err);
    }
    Users = Users.concat(body.match(MatchReg));
    // Users.push(body.match(MatchReg));
    // console.log(Users);
    doRequest(++page);
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
// doRequest(2);
