// Load cart items from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let total = 0;

    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <span>${item.item}</span>
            <span>$${item.price}</span>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
        total += item.price;
    });

    document.getElementById('total-amount').textContent = total.toFixed(2);
}

// Function to clear the cart
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    alert("Your cart has been cleared.");
}

// Function to handle checkout (you can customize this)
function checkout() {
    alert("Proceeding to checkout...");
    // Implement your checkout logic here
}

// Initialize cart display on page load
document.addEventListener("DOMContentLoaded", displayCartItems);
