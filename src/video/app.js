const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', (req, res) => {
  console.log(req.headers);
  res.send('Hello world');
});
app.get('/secret', (req, res) => {
  res.send('Secret');
});
app.listen(3000);
