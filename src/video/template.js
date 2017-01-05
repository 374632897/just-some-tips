const fs = require('fs');
const path = require('path');

function getVideo (addr) {
  return `
<!DOCTYPE html>
<html>
<head>
  <title>${addr}</title>
  <link href="/dist/video-js.min.css" rel="stylesheet">
  <script src="/dist/video.min.js"></script>
</head>
<body>
<video  preload = "auto" id = "my-player" class = 'video-js' controls data-setup = "{}" >
  <source src="${addr}" type="video/mp4" >
</video>
</body>
</html>
  `;
}
function getList (list) {
  const html = list.reduce((prev, next) => {
    return prev + `<li><a href = "${next}">${path.basename(next).split('.')[0]}</a><li>`
  }, '');
  return `
<!DOCTYPE html>
<html>
<head>
  <title>首页</title>
</head>
<body>
  <ul>${html}</ul>
</body>
</html>
  `;
}

exports.getVideo = getVideo;
exports.getList = getList;
