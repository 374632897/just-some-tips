const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./follower.log'));
// process.exit(0)
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
console.log(followers.length)
