const fs = require('fs')
const str = '新建任务，完成任务，标题修改，修改任务详情，添加任务成员，移除任务成员，设置任务日期，设置进度，添加标签，编辑标签，设置优先级，设置接受任务通知，添加/编辑/删除子任务，评论，复制任务，移动任务，任务排序，归档任务，删除任务，设置成员可见，设置编辑权限';
// console.log(str.join(',\n\r'))
// console.log(JSON.stringify(str))
// console.log(str)
const planField    = 'addKBMember,editKBInfo,attribute,preference,defaultRole,memberRole,memberAuthority,removeKBMember,transitionKB,archiveKB,removeKB,quitKB';

const planText     = '添加计划成员，编辑计划信息，设置计划归属，设置计划偏好，设置默认角色，设置成员角色，设置角色权限，移除成员，移交计划，归档计划，删除计划，退出计划';

const subplanFiled = 'createCK,editCK,defaultCKSetting,sortCK,archiveCK,removeCK';

const subplanText  = '创建子计划，编辑子计划，设置默认子计划，调整子计划顺序，归档子计划，删除子计划';

const cardField    = 'createCard,renameCard,sortCard,copyCard,moveCard,archiveCard,removeCard';

const cardText     = '添加卡片，编辑卡片名称，调整卡片顺序，复制卡片，移动卡片，归档卡片，删除卡片';

const taskFiled    = 'createItem,done,name,note,member,removeMember,date,schedule,addTag,editTag,itemPriority,message,subTask,comment,copy,move,sortItem,archive,remove,checkAuthority,editAuthority';

const taskText     = '新建任务，完成任务，标题修改，修改任务详情，添加任务成员，移除任务成员，设置任务日期，设置进度，添加标签，编辑标签，设置优先级，设置接受任务通知，添加/编辑/删除子任务，评论，复制任务，移动任务，任务排序，归档任务，删除任务，设置成员可见，设置编辑权限';
/**
 * @param  {[type]} _str   [description]
 * @param  {Number} indent [description]
 * @return {[type]}        [description]
 */
function format(_str, indent = 2) {
  const d = ',\n\r';
  const str = _str.split(/[，,]\s{0,}/).map(item => ' '.repeat(indent) + '\'' + item + '\'').join(d);
  return '[\n\r' + str + '\n\r]';
  // console.log('[\n\r' + str + '\n\r]');
}
const Str = [planText, planField, subplanText, subplanFiled, cardField, cardText, taskFiled, taskText].reduce((pre, next) => {
  return pre + format(next);
}, '');

// format(str);
fs.writeFile('target.txt', Str, (err) => {
  if (err) {
    console.log(err);
  }
});
