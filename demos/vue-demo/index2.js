var myModel ={
  friends: [{
    name: 'wfl',
    age:22
  },{
    name: 'Bob',
    age:23
  },{
    name:'Anno',
    age:24
  }],
  search: ''
};
var myViewMode = new Vue({
  el: '#myApp',
  data: myModel
});
