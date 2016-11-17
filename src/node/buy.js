const request = require('request');
const fs = require('fs');
const config = {
  username: 'kooyear',
  password: '12345678'
};

const api = 'https://www.glbuyer.com/user/api-username-sign-in';
const listUrl = 'https://www.glbuyer.com/cart/api-list-card-items';

request.post(api, {form: config}, (err, res) =>  {
  if (err) {
    return console.error(err);
  }
  getList(JSON.parse(res.body).access_token)
});

function getList (token) {
  console.log(token)
  request.post(listUrl, {form: {Bearer: token}}, (err, res) => {
    if (err) {
      return console.error('error =>', err)
    }
    fs.writeFileSync('test.html', res.body)
  });
}
