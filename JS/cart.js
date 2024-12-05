// js/cart.js

// Function to add item to cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.id === productId);
    if (!existingItem) {
        // Find the product from the products array
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${product.name} added to cart!`);
        } else {
            console.error('Product not found!');
        }
    } else {
        alert(`${existingItem.name} is already in the cart.`);
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    // Optionally, update the cart display
    renderCartItems();
}

// Function to render cart items (used in cart.html)
function renderCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');

    // Clear existing items
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
            <span>${item.name}</span>
            <img src="${item.image}" alt="${item.name}" width="50">
            <button onclick="removeFromCart('${item.id}')">Remove</button>
        `;
        cartItemsContainer.appendChild(li);
    });

    cartTotalContainer.innerText = `Total Items: ${cart.length}`;
}

// Initialize cart on page load (for cart.html)
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
        renderCartItems();
    }
});
