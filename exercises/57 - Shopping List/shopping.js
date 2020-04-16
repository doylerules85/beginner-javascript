const shoppingForm = document.querySelector('.shopping');
const shoppingList = document.querySelector('.list');

// need array to hold state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;
  // creates item
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // push items into state

  items.push(item);
  console.log(`There are now ${items.length} in your state`);
  // clear form
  e.currentTarget.reset();
  // fire off custom event that will tell that the items have been updated
  shoppingList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input value="${item.id}" type="checkbox" ${
        item.complete ? 'checked' : ''
      }>
      <span class="itemName">${item.name}</span>
      <button value="${item.id}" aria-label="Remove ${
        item.name
      }">&times;</button>
    </li>`
    )
    .join('');
  shoppingList.innerHTML = html;
}

function toLocalStorage() {
  console.log('saving items');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromStorage() {
  // pull items from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // items = lsItems;
    // lsItems.forEach(item => items.push(item));
    // items.push(lsItems[0]);
    items.push(...lsItems);
    shoppingList.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('deleting this', id);
  items = items.filter(item => item.id !== id);
  console.log(items);
  shoppingList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('completed', id);
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  shoppingList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
shoppingList.addEventListener('itemsUpdated', displayItems);
shoppingList.addEventListener('itemsUpdated', toLocalStorage);
// event delegation - listen to clicks on  list on the first but then delegate the click over the button if that was clicked
shoppingList.addEventListener('click', function(e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromStorage();
