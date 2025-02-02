const product_container = document.querySelector('.products');
const cart_count = document.querySelector('.cart-count');

let htmlProduct = ``;

product.forEach(product => {
    htmlProduct += `<div class="product">
                        <h3>${product.name}</h3>
                        <img src="${product.image}" alt="Product Image">
                        <p>$${(product.price / 100).toFixed(2)}</p>
                        <div class="rating">★★★★☆ (${product.rating.review} reviews)</div>
                        <div class="quantity">
                            <label for="qty1">Qty:</label>
                            <input type="number" id="qty1" min="1" value="1">
                        </div>
                        <button class="add-button" data-product-id="${product.id}">Add to Cart</button>
                    </div>`
})

product_container.innerHTML = htmlProduct;

document.querySelectorAll('.add-button').forEach(button => {
    button.addEventListener('click', () => {
        let id = button.dataset;
        
        let matchingItem;
        
        cart.forEach((item) =>{
            if(id == item.productId){
                matchingItem = item;
            }
        })
        
        if(matchingItem){
            matchingItem.quantity += 1;
        }else{
            cart.push({
                productId: id,
                quantity: 1
            });
        }

        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;
        })

        cart_count.innerHTML = cartQuantity;
    })

})
