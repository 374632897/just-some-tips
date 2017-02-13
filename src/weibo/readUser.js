const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./follower.log'));
const followers = [];
data.forEach(item => {
  item.forEach(_item => {
    const [ids, names] = _item.split('&');
    followers.push({
      id: ids.split('=')[1],
      name: names.split('=')[1].match(/(\S+?)\\/g)[0].slice(0, -1)
    });
  });
});
const ids = [...new Set(followers.map(item => item.id))];
console.log(ids);
console.log(ids.length)
