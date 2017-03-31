var moment = require('moment');


// var date = moment();
// date.add(1, 'years').subtract(9, 'months');
 
// console.log(date.format('MMM Do, YYYY Q' ));

// 10
var date = moment().add(3,'hours');

console.log(date.format('h:mm a'));