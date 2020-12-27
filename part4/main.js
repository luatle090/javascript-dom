var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//add event
form.addEventListener('submit', addItem);

// delele event
itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item');

    // create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';

    // add text node with input value
    // li.appendChild(document.createTextNode(newItem.value));
    var item = document.createTextNode(newItem.value);
    li.appendChild(item);
    

    // Create del button element
    var delButton = document.createElement('button');
    
    // Add classes to del button
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    
    // Append text node
    delButton.appendChild(document.createTextNode('X'));

    //add button to li element
    li.appendChild(delButton);

    // then add new li element to items list
    itemList.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    //console.log(text);
    
    //get list
    var items = itemList.getElementsByTagName('li');
    //console.log(items);

    //convert to array js and for each
    Array.from(items).forEach(item => {
        
        //element đầu tiên của thẻ li là text
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
    
}