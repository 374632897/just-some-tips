const r = require('request');

function logError (err) {
  console.error('An Error => ', err);
}

function request (i) {
  r({
    url: `http://192.168.3.107/task/userManage/addUser?username=zhouqiang${i}@rishiqing.com&password=123456`,
    method: 'get',
    headers : {
      "Cookie":"JSESSIONID=D70C911E277FD2DEDBADB64C2C7DEAC3; rishiqingRem=Vjd6SmYvbWJ6WjlWRXo1NXFNL1BLdz09OkNtRFhzdzhMamN4WFlyYk1NN09YOFE9PQ; u=admin; PHPSESSID=4qnbbvtjkojg3kde9nilugmai5; Hm_lvt_b486bc02e446cec339e6c08eb84b5aec=1486464206; Hm_lpvt_b486bc02e446cec339e6c08eb84b5aec=1486467048; Hm_lvt_4aa410495414a8b717fcc2a903ff655a=1486464206; Hm_lpvt_4aa410495414a8b717fcc2a903ff655a=1486467048; _ga=GA1.1.1004498586.1486464206; NTKF_T2D_CLIENTID=guest889A177A-C97B-7993-9E54-18576EE5B6A4; nTalk_CACHE_DATA={uid:kf_9458_ISME9754_1#admin,tid:1486467067621837}",
      "Host":"192.168.3.107",
      "Referer":"http://192.168.3.107/task/systemManage",
      "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.2997.0 Safari/537.36",
      "X-Requested-With":"XMLHttpRequest"
    }
  }).on('error', logError).on('response', (res) => {
    if (res.statusCode === 200) {
      console.log('Success One');
    } else {
      logError(res.statusCode);
    }
  });
}

for (let i = 3000; i < 4000; i++) {
  console.log(i)
  request(i);
}
