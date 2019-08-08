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

  // Public method
  return {
    logData: function(){
      return data;
    }
  }
})();
// UI Controller
const UICtrl = (function() {
  
  // Public method
  return {

  }
})();
// App Controller
const App = (function(ItemCtrl, UICtrl) {
  // console.log(ItemCtrl.logData());

  // Public method
  return {
    init: function(){
      console.log('Initializing App...')
    }
  }
})(ItemCtrl, UICtrl);

// Initialize App
App.init()