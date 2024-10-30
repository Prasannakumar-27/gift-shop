// Array to store cart items
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart with confirmation
function addToCart(item, price) {
    cart.push({ item, price });
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
    document.getElementById("cart-count").textContent = cart.length; // Update cart count
    alert(item + " has been added to your cart! Your cart has " + cart.length + " items.");
}

// Function to view cart items
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    let cartDetails = "Items in your cart:\n";
    cart.forEach((item, index) => {
        cartDetails += `${index + 1}. ${item.item} - $${item.price}\n`;
    });
    alert(cartDetails);
}

// Function to handle contact form submission
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been received.");
    document.querySelector("form").reset();
}

// Function to clear the cart
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    document.getElementById("cart-count").textContent = 0; // Reset cart count
    alert("Your cart has been cleared.");
}

// Update the cart count on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cart-count").textContent = cart.length;
});
