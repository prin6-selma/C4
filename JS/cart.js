// js/cart.js

// Function to add item to cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const product = products.find(p => p.id === productId);
    if (product) {
        console.log('Product Found');
        const existingItem = cart.find(item => item.Product.id === productId);
        const existingIndex = cart.findIndex(item => item.Product.id === productId);
        if (!existingItem) {
            console.log('First add');
            
            var cartItem = {
                Product: product,
                Quantity: 1
            };
            cart.push(cartItem);
        }
        else {    
            console.log('multi add');
                    
            var cartItem = {
                Product: product,
                Quantity: existingItem.Quantity + 1
            };
            cart.splice(existingIndex, 1, cartItem);
        }

        console.log(cartItem);
        
        
        localStorage.setItem('cart', JSON.stringify(cart));
    } else console.error('Product not found!');

    // const existingItem = cart.find(item => item.id === productId);
    // if (!existingItem) {
    //     // Find the product from the products array
    //     const product = products.find(p => p.id === productId);
    //     if (product) {
    //         var cartItem = {
    //             Product: product,
    //             Quantity: 1
    //         }
    //         cart.push(cartItem);
    //         localStorage.setItem('cart', JSON.stringify(cart));
    //         // alert(`${product.name} added to cart!`);
    //     } else {
    //         console.error('Product not found!');
    //     }
    // } else {
    //     if (product) {
    //         cart.push(product, 1);
    //         localStorage.setItem('cart', JSON.stringify(cart));
    //         alert(`${product.name} added to cart!`);
    //     } 
    // }
}

// Function to remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.Product.id !== productId);
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
        const span = document.createElement('span');
        const img = document.createElement('img');
        const sed = document.createElement('input');
        const button = document.createElement('button');

        li.classList.add('cart-item');




        li.innerHTML = `
            <span>${item.Product.name}</span>
            <img src="${item.Product.image[0]}" alt="${item.Product.name}" width="50">
            
            <button onclick="removeFromCart('${item.Product.id}')">Remove</button>
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
