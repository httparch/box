export const cart = [
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

console.log(cart)