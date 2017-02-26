const express = require('express');
const app = express();
'get put delete post'.split(' ').forEach(item => {
  app[item]('/', (req, res) => {
    res.json({
      sucess: true,
      type: item
    });
    // res.setHeader('200 ok');
  });
})

// app.listen(4000);
// console.log('Server listen at 4000');

module.exports = app;
