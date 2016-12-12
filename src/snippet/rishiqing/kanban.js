$0.backboneView.collection.create({name: 'test', accessIds: '809'})
function createKanban(N = 10, timeout = 500) {
  var i = 0;
  var a = $0;
  while (i < N) {
    !(function (i) {
      setTimeout(() => {
        a.backboneView.collection.create({name: 'test-' + i, accessIds: '809'});
      }, timeout);
    })(i++)
  }
}
function createCard (N = 10) {
  // $0.backboneView.model.collection.each(item => {
    // for (let i = 0; i < N; i++) {
      item.get('kanbanCardList').create({
        displayOrder: 65535,
        isCard:true,
        isCopy:false,
        isUserCreated:true,
        kanban: item.get('id'),
        kanbanItemList:[],
        name:"test-" + i
      });
    // }
  // })
}
function createItem (N = 10, index = 'test', item) {
  for (var i = 0; i < N; i++) {
    item.get('kanbanItemList').create({
      name: (index + 1) + '-' + i,
      displayOrder: i,
      kanbanCard: item.get('id')
    })
  }
}
function createItemInCard (N = 10) {
  $0.backboneView.model.get('kanbanCardList').each((item, index) => {
    createItem(N, index, item);
  });
}
