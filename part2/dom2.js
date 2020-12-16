//parentElement
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'blue';
// console.log(itemList.parentNode.parentNode.parentNode);

//childNodes
console.log(itemList.childNodes);