const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./myFocus.log').toString()).filter(item => /uid=(\d+)&nick=(\S*)/.test(item));

console.log(data.length);

function getData (data) {
  const followers = new Set();
  data.forEach(item => {
    item.forEach(_item => {
      const [ids, names] = _item.split('&');
      followers.push({
        id: ids.split('=')[1],
        name: names.split('=')[1].match(/(\S+?)\\/g)[0].slice(0, -1)
      });
    });
  });
  return followers;
}

function getIds (followers) {
  return [...new Set(followers.map(item => item.id))];
}
