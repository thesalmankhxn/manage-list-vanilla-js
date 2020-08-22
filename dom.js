
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    
    // Create new li element
    var li = document.createElement('li');

    //Add Class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button
    var del = document.createElement('button');
    del.className = 'btn btn-danger btn-sm float-right delete';

    del.appendChild(document.createTextNode('X'));

    li.appendChild(del);

    itemList.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

function filterItems(e){
    //convert to lowerCase
    var text = e.target.value.toLowerCase();

    //Get list
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach( function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })

}