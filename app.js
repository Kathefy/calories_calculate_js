// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 0, name: 'Fish', calories: 500},
      {id: 0, name: 'Omlet', calories: 600}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function() {
      return data.items;
    },
    logData: function(){
      return data;
    }
  }
})();

// UI Controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list'
  }

  // Public method
  return {
    createItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  }
})();

// App Controller
const App = (function(ItemCtrl, UICtrl) {
  // console.log(ItemCtrl.logData());

  // Public method
  return {
    init: function(){
      // console.log('Initializing App...');

      // Fetch items from data
      const items = ItemCtrl.getItems();
      // Create list items
      UICtrl.createItemList(items);
    }
  }
})(ItemCtrl, UICtrl);

// Initialize App
App.init()