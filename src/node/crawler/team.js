const https = require('https');
const http = require('http');
const Events = require('events');
const u = 'https://worktile.com/';
// 软件产品网
// const u = 'http://www.soft78.com/';
// const u = 'http://www.jingoal.com/lp/oa/jmb.htm?origin=' + 'fjsadkjdklsfjklasdjfklasdjfklas;fklfasdj'.repeat(100);
// 中粮期货 Apache/2.4.6 (CentOS) PHP/5.4.16
// const u = 'http://tuiguang.zlqh.com/zlsctd/';
// 重庆晨报
// const u = 'http://www.cqcb.com/reading/2016-12-14/228646_pc.html';
const request = u.startsWith('https') ? https : http;

const Max = 1;
const EndOne = 'finishOne';
class Connect extends Events {
  constructor (url, times) {
    super();
    this.url = url;
    this.times = times;
    this.taskStore = [];
    this.currentTasks = 0;
    this.bindEvents();
  }
  start () {

  }
  resetTask () {
    this.tasks = [];
  }
  bindEvents () {
    this.on(EndOne, this.getTask);
    this.on('error', (err) => {
      console.log('connect || error => ', err)
    })
  }
  startTask () {
    while (this.currentTasks < Max) {
      this.request();
      this.currentTasks++;
    }
  }
  getTask () {
    console.info('getTask')
    this.currentTasks--;
    // this.startTask();
  }
  pushTask (task) {

  }
  request () {
    console.log(`当前任务数 => ${this.currentTasks}`);
    request.get(this.url, (socket) => {
      console.log(socket.rawHeaders)
      socket.on('error', (err) => {
        console.error(err);
        this.emit(EndOne);
      }).on('data', () => {
        // console.log('data');
      }).on('end', () => {
        console.log('socket end');
        this.emit(EndOne);
      });
      //这里也需要绑定错误处理函数
    }).on('error', err => {
      console.log('request error => ', err)
    });
  }
}
const c = new Connect(u);
c.startTask();
