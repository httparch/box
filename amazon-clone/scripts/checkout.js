import { cart, removeToCart } from "./cart.js";
import { product } from "./products.js";
import { formatCurrency } from "./utils/money.js";

let order_summary = document.querySelector('.order-summary');

let htmlProduct = ``;

cart.forEach((item, index) =>{
    let productId = item.productId;
    let matchingItem;

    product.forEach((product) =>{
        if(productId === product.id){
            matchingItem = product
        }
    })

    htmlProduct += `<div class="cart-item-container cart-item-${matchingItem.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                ${matchingItem.name}
                </div>
                <div class="product-price">
                ${formatCurrency(matchingItem.price)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${item.quantity}</span>
                  </span>
                  <button class="update-quantity-link link-primary">
                    Update
                  </button>
                  <button class="delete-quantity-link link-primary" data-product-id="${matchingItem.id}">
                    Delete
                  </button>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
    
        })
        
        
order_summary.innerHTML = htmlProduct;

document.querySelectorAll('.delete-quantity-link').forEach(deleteLink => {
    deleteLink.addEventListener('click', () =>{
        const itemToDelete = deleteLink.dataset.productId;
        removeToCart(itemToDelete);

        const container = document.querySelector(`.cart-item-${itemToDelete}`)
        container.remove();
    })
})

