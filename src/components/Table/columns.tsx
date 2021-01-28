const columns = [{
    type: 'checkbox',
    name: '',
    key: 'cell1',
    className: 'pa3 cell-checkbox',
  },{
    type: 'text',
    name: 'Dessert (100g serving)',
    key: 'Dessert',
    className: 'pa3 cell-dessert',
    sortable: true
  }, {
    type: 'text',
    name: 'Calories',
    key: 'nutritionInfo.calories',
    className: 'pa3 cell-calories',
    sortable: true
  }, {
    type: 'text',
    name: 'Fat (g)',
    key: 'nutritionInfo.fat',
    className: 'pa3 cell-fat',
    sortable: true
  }, {
    type: 'text',
    name: 'Carbs (g)',
    key: 'nutritionInfo.carb',
    className: 'pa3 cell-carb',
    sortable: true
  }, {
    type: 'text',
    name: 'Protein (g)',
    key: 'nutritionInfo.protein',
    className: 'pa3 cell-protein',
    sortable: true
}];

export default columns;