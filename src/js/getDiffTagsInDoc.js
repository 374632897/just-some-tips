/*
* @Author: Jiang Guoxi
* @Date:   2016-05-03 17:32:50
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-05-03 17:32:54
*/

function getDiffTagsInDoc () {
  console.time('the time to get different tags');
  var allTags = document.getElementsByTagName('*'), hash = {}, tagArr = [];
  for (var i = 0, len = allTags.length; i < len; i++) {
    var tag = allTags[i].tagName;
    if (!hash[tag]) {
      hash[tag] = tag;
      tagArr.push(tag);
    }
  }
  console.timeEnd('the time to get different tags');
  return tagArr;
}