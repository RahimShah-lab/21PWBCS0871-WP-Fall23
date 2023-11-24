document.addEventListener('DOMContentLoaded', function () {
    const cartBody = document.getElementById('cart-body');
    const cartTotalElement = document.getElementById('cart-total');
    const proceedToPaymentBtn = document.getElementById('proceed-to-payment');
    const cartItems = [
        { book: { title: 'Book 1', price: 20.00}, quantity: 2 },
        { book: { title: 'Book 2', price: 12.99 }, quantity: 1 },
       
    ];

    
    cartItems.forEach(cartItem => {
        const row = createCartItemRow(cartItem);
        cartBody.appendChild(row);
    });
    updateTotalAmount();
    proceedToPaymentBtn.addEventListener('click', function () {
    
        window.location.href = 'payment.html';
    });

    function createCartItemRow(cartItem) {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = cartItem.book.title;

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${cartItem.book.price.toFixed(2)}`;

        const quantityCell = document.createElement('td');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = '1';
        quantityInput.value = cartItem.quantity;
        quantityInput.addEventListener('input', function () {
            cartItem.quantity = parseInt(quantityInput.value, 10) || 1;
            updateTotalAmount();
        });
        quantityCell.appendChild(quantityInput);

        const totalCell = document.createElement('td');
        totalCell.textContent = `$${(cartItem.book.price * cartItem.quantity).toFixed(2)}`;

        const actionCell = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function () {
            const itemIndex = cartItems.indexOf(cartItem);
            if (itemIndex !== -1) {
                cartItems.splice(itemIndex, 1);
                updateCartTable();
                updateTotalAmount();
            }
        });
        actionCell.appendChild(removeBtn);

        row.appendChild(titleCell);
        row.appendChild(priceCell);
        row.appendChild(quantityCell);
        row.appendChild(totalCell);
        row.appendChild(actionCell);

        return row;
    }

    function updateCartTable() {
        cartBody.innerHTML = '';
        cartItems.forEach(cartItem => {
            const row = createCartItemRow(cartItem);
            cartBody.appendChild(row);
        });
    }

    function updateTotalAmount() {
        const totalAmount = cartItems.reduce((total, cartItem) => {
            return total + cartItem.book.price * cartItem.quantity;
        }, 0);
        cartTotalElement.textContent = `$${totalAmount.toFixed(2)}`;
    }
});