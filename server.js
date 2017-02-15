const express = require('express');
const app = express();
const colors = require('colors');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

app.use(express.static(__dirname));
app.listen(4001);

console.log('Server runing at localhost:4001'.info);
