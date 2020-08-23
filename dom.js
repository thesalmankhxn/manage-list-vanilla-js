let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', searchItems);

function addItem(e) {
    e.preventDefault();

    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    let del = document.createElement('button');
    del.className = 'btn btn-danger btn-sm float-right delete';
    del.appendChild(document.createTextNode('X'));
    li.appendChild(del);

    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

function searchItems(e) {
    let text = e.target.value.toLowerCase();
    let list = document.getElementsByTagName('li');

    Array.from(list).forEach( item => {
        let sItems = item.firstChild.textContent;
        if (sItems.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}