var col = window.col; // 这个需要打断点存为全局变量先
function create (N = 10) {
  for (let i = 0; i < N; i++) {
    const last = col.last();
    col.create({
      name: last.get('name') + i,
      _tasklistId: last.get('_tasklistId'),
      _prevId: last.id
    });
  }
}
