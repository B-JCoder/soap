document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const quantityElement = document.getElementById('quantity');
    const summaryQuantityElement = document.getElementById('summary-quantity');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutForm = document.getElementById('checkout-form');

    const productPrice = 299;
    let quantity = 1;

    function updateQuantityAndPrice() {
        quantityElement.textContent = quantity;
        summaryQuantityElement.textContent = `x${quantity}`;
        totalPriceElement.textContent = `RS.${(quantity * productPrice).toFixed(2)}`;
    }

    decreaseBtn.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            updateQuantityAndPrice();
        }
    });

    increaseBtn.addEventListener('click', function() {
        quantity++;
        updateQuantityAndPrice();
    });

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(checkoutForm);
        const orderData = {
            quantity: quantity,
            totalPrice: (quantity * productPrice).toFixed(2),
        };
        for (let [key, value] of formData.entries()) {
            orderData[key] = value;
        }
        console.log('Order submitted:', orderData);
        // Here you would typically send the order to your backend
        alert('Order placed successfully!');
    });
});