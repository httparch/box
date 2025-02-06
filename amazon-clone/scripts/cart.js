
export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [{
        productId: 0,
        quantity:1,
        deliveryOptionsId: 2,
    },{
        productId: 1,
        quantity:1,
        deliveryOptionsId:1
    }]
}

function reset(){
    localStorage.removeItem('cart')
}

function saveStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(itemId){
    let matchingItem;
        
        cart.forEach((item) =>{
            if(itemId.productId == item.productId){
                matchingItem = item;
            }
        })
        
        if(matchingItem){
            matchingItem.quantity += 1;
        }else{
            cart.push({
                productId: Number(itemId.productId),
                quantity: 1,
                deliveryOptionsId:1
            });
        }
        console.log(cart)
        saveStorage();
        //reset();
}

export function removeToCart(itemId){
    const newCart = [];
    
    cart.forEach(item => {
        if(item.productId != itemId){//item.product is a number and itemId is a string, di gumagana kasi naka strict operator .
            newCart.push(item);
        }
    })
    
    cart = newCart;
    saveStorage();
}

export function cartQuantity(){
    return cart.length > 1 ? `${cart.length} items` : `${cart.length} item`;
}

export function updateDeliveryOption(itemId, deliveryOptionId){

    let matchingItem;
    cart.forEach((item) =>{
        if(itemId == item.productId){ 
            console.log('item  value:',item)
            matchingItem = item;
        }
    })

    matchingItem.deliveryOptionsId = Number(deliveryOptionId); //FVCC! just because nagiging string siya kaya nagiging undefined yung value, now okay na

    saveStorage();
}