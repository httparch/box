export const cart = [];

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