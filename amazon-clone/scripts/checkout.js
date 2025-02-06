import { cart, cartQuantity, removeToCart, updateDeliveryOption } from "./cart.js";
import { product } from "./products.js";
import { formatCurrency } from "./utils/money.js";
import { deliveryOptions } from "./deliveryopt.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

let order_summary = document.querySelector('.order-summary');
let checkOutHeader = document.querySelector('.return-to-home-link');
//<input class="quantity-input" style="width:30px;display:none"><button class="save-quantity-link" style="display:none">Save</button>

function renderOrderSummary(){

  let htmlProduct = ``;

  cart.forEach((item, index) =>{
      let productId = item.productId;
      let matchingItem;
      
      product.forEach((product) =>{
          if(productId === product.id){
              matchingItem = product
          }
      })

      const deliveryOptionsId = item.deliveryOptionsId;
      let deliveryOption;

      deliveryOptions.forEach( option => {
        console.log('in',option.id)
        if(option.id === deliveryOptionsId){
          deliveryOption = option;
        }
      })
      
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
      const dateString = deliveryDate.format('dddd, MMMM D')

      htmlProduct += `<div class="cart-item-container cart-item-${matchingItem.id}">
              <div class="delivery-date">
                Delivery date: ${dateString}
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
                    <button class="update-quantity-link link-primary" data-product-id="${matchingItem.id}">
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
                  ${deliveryOptionsHTML(matchingItem, item)}
                </div>
              </div>
            </div>`
      
          })
          
  function deliveryOptionsHTML(matchingItem, item){
    let html = ``;
    //console.log('del',matchingItem)
    //console.log('del2',item)
    console.log(item)
    deliveryOptions.forEach((deliveryOption) =>{
        console.log(deliveryOption.deliveryDays)

        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const dateString = deliveryDate.format('dddd, MMMM D')
        const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} - `
        const isChecked = deliveryOption.id === item.deliveryOptionsId;

        html += `<div class="delivery-option" 
                  data-product-id="${matchingItem.id}" 
                  data-delivery-option="${deliveryOption.id}">
                    <input type="radio" 
                    ${isChecked ? 'checked' : ''}
                      class="delivery-option-input"
                      name="delivery-option-${matchingItem.id}">
                    <div>
                      <div class="delivery-option-date">
                        ${dateString}
                      </div>
                      <div class="delivery-option-price">
                        ${priceString} Shipping
                      </div>
                    </div>
                  </div>
                  `
    });

    return html;
  }

  order_summary.innerHTML = htmlProduct;

  document.querySelectorAll('.delete-quantity-link').forEach(deleteLink => {
      deleteLink.addEventListener('click', () =>{
          const itemToDelete = deleteLink.dataset.productId;
          console.log('deleteLink:',itemToDelete)
          removeToCart(itemToDelete);
          updateCartQuantity();

          const container = document.querySelector(`.cart-item-${itemToDelete}`)
          container.remove();
      })
  })

  document.querySelectorAll('.update-quantity-link').forEach(buttonLink =>{
    buttonLink.addEventListener('click', ()=>{
      let id = buttonLink.dataset.productId;

    })
  })

  function updateCartQuantity(){
    checkOutHeader.innerHTML = cartQuantity();
  }

  updateCartQuantity();

  document.querySelectorAll('.delivery-option').forEach(radio => {
    radio.addEventListener('click', () => {
      const {productId } = radio.dataset;
      const deliveryOptionId = radio.dataset.deliveryOption;
    
      console.log('come', deliveryOptionId)
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
    })
  });

}

renderOrderSummary();