var itemLimit = 10;
document.querySelector('li.kanban-card-container').backboneView.model.collection.forEach((item, index) => {
  let i = 0;
  while (i < itemLimit) {
    try {
      item.get('kanbanItemList').create({
        name: (index + 1) + '-' + i,
        displayOrder: i,
        kanbanCard: item.get('id')
      });
    } catch (e) {}
    i++;
  }
});
