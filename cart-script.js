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
function getCartTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Function to display the checkout alert and logic
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before checking out.");
        return;
    }

    const totalAmount = getCartTotal();
    
    // Confirm the checkout process
    const proceed = confirm(`Your total amount is ₹${totalAmount}. Do you want to proceed to checkout?`);

    if (proceed) {
        // Clear the cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage

        // Redirect to a checkout page (you can change this URL to your payment gateway)
        window.location.href = 'checkout.html'; // Example checkout page
    } else {
        alert("Checkout canceled.");
    }
}

// Function to add items to the cart (for demonstration)
function addToCart(item, price) {
    cart.push({ item, price });
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    alert(`${item} has been added to your cart.`);
}

// Function to clear the cart (for demonstration)
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    displayCart(); // Refresh the display
}

// Function to display cart items (for demonstration)
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalAmountSpan = document.getElementById('total-amount');

    // Clear previous cart items
    cartItemsDiv.innerHTML = '';
    
    // Check if the cart is empty
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        totalAmountSpan.textContent = '0';
        return;
    }

    let totalAmount = 0;

    // Iterate through cart items and create HTML elements
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.item} - ₹${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        
        // Accumulate the total amount
        totalAmount += item.price;
    });

    // Update total amount in the cart
    totalAmountSpan.textContent = totalAmount;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    displayCart(); // Refresh the display
}
