const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const { getVideo, getList } = require('./template');
app.use(bodyParser.json());
// app.use('/dist', express.static('dist'));

app.use('/dist', express.static(path.join(__dirname, 'dist'))); // 需要用这个才行。 因为调用这个文件时并不是在本文件所在目录

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send('Hello world');
});
app.get('/secret', (req, res) => {
  res.send('Secret');
});
app.get(/.+\.mp4$/, (req, res) => {
  // console.log(req.url.slice(1))
  res.send(getVideo('http://www.w3school.com.cn/i/movie.mp4'));
})
app.listen(3000);

function Name () {
  function age () {
    function say () {
      function get () {

      }
    }
  }
}
