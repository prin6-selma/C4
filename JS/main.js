// js/main.js

// Function to render products on the main page
function renderProducts() {
    const productsContainer = document.querySelector('.products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.setAttribute('data-product-id', product.id);
        productElement.innerHTML = `
            <img src="${product.image[0]}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: R${product.price.toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });

    // Bind event listeners to Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productId = productElement.getAttribute('data-product-id');
            addToCart(productId);
        });
    });
}

// Initialize products on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.products')) {
        renderProducts();
    }
});
