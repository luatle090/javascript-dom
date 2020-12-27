//parentElement
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'blue';
// console.log(itemList.parentNode.parentNode.parentNode);

//ChildNodes
//dòng console trên in ra mảng các child nodes.
//mảng sẽ có các items là text. Item text đó là các break của HTML
//nếu html ul ko xuống hàng thì sẽ ko hiển thị
console.log(itemList.childNodes);

//hiển thị ra các elements con của thẻ ul. Ko hiển thị break
console.log(itemList.children);

//hiển thị item của vị trí thứ 2 trong mảng
console.log(itemList.children[1]);

//thay đổi backgroundColor
itemList.children[1].style.backgroundColor = 'yellow';


//FIRST CHILD
//lấy vị trí đầu nhưng sẽ là #text nếu có break trong html
console.log(itemList.firstChild);

//lấy vị trí element đầu tiên
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.fontWeight = 'bold'

//LAST CHILD
//lấy vị trí cuối nhưng sẽ là #text nếu có break trong html
console.log(itemList.lastChild);

//lấy vị trí element cuối cùng
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.fontStyle = 'italic'

// Next Sibling
//giống firstChild và lastChild
console.log(itemList.nextSibling);

console.log(itemList.firstElementChild.nextElementSibling.nextElementSibling);

//Previous Sibling
console.log(itemList.previousSibling);

//Previous Element Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green'