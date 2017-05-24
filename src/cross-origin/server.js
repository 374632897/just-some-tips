const express = require('express')
const app = express();
app.use(express.static(__dirname + '/client'));

app.listen(9999, (err) => {
  if (!err) {
    console.log('Server running at 9999')
  }
});
