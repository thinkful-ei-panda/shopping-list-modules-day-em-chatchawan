// const store = {
//   items: [],
//   hideCheckedItems: false
// };

import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(ids) {
  console.log(ids);
  return items.find(items.ids);
}

function addItem(name) {
  try {
    item.validateName[name];
    const result = item.create(name);
    this.items.push(result);
  } catch (error) {
    console.log('Cannot add item: ${error.message}');
  }
}

function findAndToggleChecked(id) {
  let item = this.findById(id);
  // toggle it's checked attribute?
  item.checked = !item.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName[name];
    const item = this.findById(id);
    item.name = newName;
    // update it's name?
  } catch (error) {
    console.log('Cannot update name: ${error.message}');
  }
}

function findAndDelete(id) {
  findById(id).filter(this.items);
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};