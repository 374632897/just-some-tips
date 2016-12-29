const { api } = require('NeteaseCloudMusicApi');
api.search('十年', data => {
  console.log(data)
})
