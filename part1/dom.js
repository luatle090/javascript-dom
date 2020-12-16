//get element by id
// var headerTitle = document.getElementById('header-title')
// console.log(headerTitle);
// //headerTitle.textContent = 'hello';
// headerTitle.innerText = 'hello too';

// var header = document.getElementById('main-header');
// console.log(header);
// header.style.borderBottom = 'solid 3px #000';

//GET elements by class name
var items = document.getElementsByClassName('list-group-item');
console.log(items)
console.log(items[3]);

var items2 = document.getElementsByClassName('list-group');
console.log(items2);
console.log(items2[0]);

items[3].textContent = 'yellow';
items[3].style.fontWeight = 'bold';
items[3].style.backgroundColor = "yellow";

//tô background toàn bộ item
//gives error
//items.style.backgroundColor = "blue";

for(var i =0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

//GET ELEMENT BY TAG NAME
//uncomment <li>Item 5 applies for tag name</li>
var items3 = document.getElementsByTagName('li');
console.log(items3);
console.log(items3[0]);

for (var index = 0; index < items3.length; index++) {
    items3[index].style.backgroundColor = '#ff22';   
}

//QUERY SELECTOR
var header =  document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'hello world';

//thay đổi input value submit sang send  
var submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

//đổi màu chữ item 1 thành blue
//lấy giá trị đầu tiên
var item = document.querySelector('.list-group-item');
item.style.color = 'blue';

//lấy giá trị cuối cùng
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'red';

//lấy giá trị khác
var otherItem = document.querySelector('.list-group-item:nth-child(2)');
otherItem.style.color = 'coral';

//QUERY SELECTOR ALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
console.log('selector all odd\n', odd);
console.log('selector all even\n', even);

for (let i = 0; i < odd.length; i++) {
    odd[i].style.borderLeft = 'solid 5px green';
    even[i].style.borderLeft = 'solid 5px pink';
}