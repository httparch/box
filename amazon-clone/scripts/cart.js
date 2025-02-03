export let cart = [
    {
        productId: 1,
        quantity:1
    },
    {
        productId: 2,
        quantity:1
    }
];

export function addToCart(itemId){
    let matchingItem;
        
        cart.forEach((item) =>{
            if(itemId == item.productId){
                matchingItem = item;
            }
        })
        
        if(matchingItem){
            matchingItem.quantity += 1;
        }else{
            cart.push({
                productId: itemId,
                quantity: 1
            });
        }

}

export function removeToCart(itemId){
    const newCart = [];

    cart.forEach(item => {
        if(item.productId !== itemId){
            newCart.push(item);
        }
    })

    cart = newCart;

}