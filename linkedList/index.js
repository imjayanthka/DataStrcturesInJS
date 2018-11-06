var LinkedList = require('./MyLinkedList.js');

const list = new LinkedList();
list.addToHead(1);
console.log(list.print());
list.addToHead(2);
console.log(list.print());
list.addToHead(3);
console.log(list.print());
list.addToTail(4);
console.log(list.print());
list.addToTail(4);
console.log(list.removeHead());
console.log(list.print());
list.insertAt(9, 3);
list.insertAt('00', 2);
console.log(list.print());
