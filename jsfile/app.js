const formElement = document.getElementById('product-form');
const productTableBody = document.getElementById('product-table');

function getFormValue(id) {
    return document.getElementById(id).value;
}

function getCheckedAvailability() {
    const availability = document.querySelector('input[name="Availability"]:checked');
    return availability ? availability.value : '';
}

function handleSubmit(event) {
    event.preventDefault(); 

    let productName = getFormValue('product-name');
    let category = getFormValue('category');
    let price = getFormValue('price');
    let availability = getCheckedAvailability();

    const newProduct = {
        productName,
        category,
        price,
        availability
    };

    addToTable(newProduct);
    formElement.reset();
}

function addToTable(product) {
    const newRow = document.createElement('tr');

    const productNameCell = document.createElement('td');
    productNameCell.textContent = product.productName;
    newRow.appendChild(productNameCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = product.category;
    newRow.appendChild(categoryCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = product.price;
    newRow.appendChild(priceCell);
    const availabilityCell = document.createElement('td');
    availabilityCell.textContent = product.availability;
    newRow.appendChild(availabilityCell);
    productTableBody.appendChild(newRow);
    const totalProductsCell = document.querySelector('tfoot td');
    const totalProductsCount = productTableBody.rows.length;
    totalProductsCell.textContent = `Total Products: ${totalProductsCount}`;
}
formElement.addEventListener('submit', handleSubmit);
