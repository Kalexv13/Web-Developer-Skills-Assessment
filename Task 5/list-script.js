document.addEventListener('DOMContentLoaded', () => {

    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const updateItemBtn = document.getElementById('updateItemBtn');
    const removeItemBtn = document.getElementById('removeItemBtn');
    const itemList = document.getElementById('itemList');
    let selectedItem = null;

    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText === '') return;

        const li = document.createElement('li');
        li.textContent = itemText;
        li.addEventListener('click', () => selectItem(li));
        itemList.appendChild(li);

        itemInput.value = '';
    }

    function selectItem(li) {
        if (selectedItem) selectedItem.classList.remove('selected');
        selectedItem = li;
        selectedItem.classList.add('selected');
        itemInput.value = selectedItem.textContent;
        updateItemBtn.disabled = false;
        removeItemBtn.disabled = false;
    }

    function updateItem() {
        if (!selectedItem) return;

        const itemText = itemInput.value.trim();
        if (itemText === '') return;

        selectedItem.textContent = itemText;
        itemInput.value = '';
        selectedItem.classList.remove('selected');
        selectedItem = null;
        updateItemBtn.disabled = true;
        removeItemBtn.disabled = true;
    }

    function removeItem() {
        if (!selectedItem) return;

        itemList.removeChild(selectedItem);
        itemInput.value = '';
        selectedItem = null;
        updateItemBtn.disabled = true;
        removeItemBtn.disabled = true;
    }

    addItemBtn.addEventListener('click', addItem);
    updateItemBtn.addEventListener('click', updateItem);
    removeItemBtn.addEventListener('click', removeItem); 

    itemInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (selectedItem) {
                updateItem();
            } else {
                addItem();
            }
        }

    });

    itemList.addEventListener('dblclick', removeItem);
    
});
