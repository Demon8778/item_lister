const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//Form submit event
const addItem = e => {
	e.preventDefault();

	//Get input value
	const newItem = document.getElementById('item');

	//Create a new li element
	const li = document.createElement('li');
	//Adding class
	li.className = 'list-group-item';
	//Add text node with input value
	li.appendChild(document.createTextNode(newItem.value));

	//Creating a delete button
	const deleteBtn = document.createElement('button');
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	deleteBtn.appendChild(document.createTextNode('x'));

	li.appendChild(deleteBtn);

	//Adding a new li item
	itemList.appendChild(li);
	newItem.value = '';
};

const removeItem = e => {
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you sure you want to delete this item?')) {
			const li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
};

const filterItems = e => {
	const searchText = e.target.value.toLowerCase();
	// console.log(searchText);
	const items = itemList.getElementsByTagName('li');
	Array.from(items).forEach(item => {
		const itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(searchText) != -1) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
};

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
