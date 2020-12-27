//create a div

var newDiv = document.createElement('div');

//thêm class name vào thẻ div
newDiv.className = 'hello';

//add id
newDiv.id = 'div-1';

//add attr
newDiv.setAttribute('title', 'hello div');

//create text node
var newDivText = document.createTextNode('Hello text node');

//add text to div
newDiv.appendChild(newDivText);

console.log(newDiv);

//add inside DOM
//truy vấn thẻ div container bên trong thẻ header
var container = document.querySelector('header .container');

var h1 = document.querySelector('header h1');

//nhận vào 2 param:
container.insertBefore(newDiv, h1);
