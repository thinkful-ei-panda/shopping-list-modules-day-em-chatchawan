// const foo = 'bar';

// const store = {
//   items: [],
//   hideCheckedItems: false
// };

import item from './item.js';

const items = [];
let hideCheckedItems = false;

const findById = function(id) {
  return store.items.find(item => item.id === id);
};

const addItem = function(name) {
  try {
    item.validateName(name);
    const result = item.create(name);
    this.items.push(result);
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = function(id) {
  const result = findById(id);
  // toggle it's checked attribute?
  this.item.result.checked = !this.item.result.checked;
};

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    const result = findById(id);
    this.item.result.name = newName;
    // update it's name?
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};

const findAndDelete = function(id) {
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(id, 1);
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