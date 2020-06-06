import store from './store.mjs';
import item from './item.mjs';
import shoppingList from './shopping-list.mjs';

const main = function () {
  const itemNames = [ '', 'apples', 'pears' ];
  itemNames.forEach(name => {
    try {
      item.validateName(name);
      // create a new item if name is valid
      store.items.push(item.create(name));
    } catch(error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  });
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);

store.addItem('bananas');
store.addItem('quinoa');
store.addItem('rice');
store.addItem('corn');
// grab the id of the first store item (bananas)
let id = store.items[0].id;
console.log(id)
id = store.items[1].id;
console.log(id)
id = store.items[2].id;
console.log(id)
id = store.items[3].id;
console.log(id)
// id = store.items[4].id;
// console.log(id)
// id = store.items[5].id;
// console.log(id)
// delete this item from the store
store.findAndDelete(id);
shoppingList.render();