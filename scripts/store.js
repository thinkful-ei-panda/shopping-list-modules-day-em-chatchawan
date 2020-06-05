// const foo = 'bar';

// const store = {
//   items: [],
//   hideCheckedItems: false
// };

import item from './item.js';

const items = [];
let hideCheckedItems = false;

const findById = function(id) {
  // find item using find method
  return items.find(item => item.id === id);
};

const addItem = function(name) {
  try {
    // validate name
    item.validateName(name);
    // create item name
    const result = item.create(name);
    // push result
    this.items.push(result);
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = function(id) {
  // find the item
  const result = findById(id);
  // toggle items checked attribute
  result.checked = !result.checked;
};

const findAndUpdateName = function(id, newName) {
  try {
    // validating name
    item.validateName(newName);
    // find the item
    const result = findById(id);
    // update the item's name
    result.name = newName;
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};

const findAndDelete = function(id) {
  // find item by id
  const index = items.findIndex(item => item.id === id);
  // remove item from items
  items.splice(index, 1);
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};