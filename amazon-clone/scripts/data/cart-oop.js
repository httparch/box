
class Cart {
    cartItems;
    localStorageKey;

    constructor(localStorageKey){
        this.localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

    loadFromStorage(){

        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
    
        if(!this.cartItems){
            this.cartItems = [{
                productId: 0,
                quantity:1,
                deliveryOptionsId: 2,
            },{
                productId: 1,
                quantity:1,
                deliveryOptionsId:1
            }]
        }
    
        this.saveStorage();
    }

    reset(){
        localStorage.removeItem(this.localStorageKey)
    }

    saveStorage(){
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(itemId){
        let matchingItem;
            
            this.cartItems.forEach((item) =>{
                if(itemId.productId == item.productId){
                    matchingItem = item;
                }
            })
            
            if(matchingItem){
                matchingItem.quantity += 1;
            }else{
                this.cartItems.push({
                    productId: Number(itemId.productId),
                    quantity: 1,
                    deliveryOptionsId:1
                });
            }

            this.saveStorage();
            //reset();
    }

    removeToCart(itemId){
        const newCart = [];
        
        this.cartItems.forEach(item => {
            if(item.productId != itemId){//item.product is a number and itemId is a string, di gumagana kasi naka strict operator .
                newCart.push(item);
            }
        })
        
        this.cartItems = newCart;
        this.saveStorage();
    }

    cartQuantity(){
        return this.cartItems.length > 1 ? `${this.cartItems.length} items` : `${this.cartItems.length} item`;
    }

    updateDeliveryOption(itemId, deliveryOptionId){

        let matchingItem;
        this.cartItems.forEach((item) =>{
            if(itemId == item.productId){ 
                console.log('item  value:',item)
                matchingItem = item;
            }
        })
    
        matchingItem.deliveryOptionsId = Number(deliveryOptionId); //FVCC! just because nagiging string siya kaya nagiging undefined yung value, now okay na
    
        this.saveStorage();
    }
}


const cart = new Cart('cart-oop');
const newcart = new Cart('try');

console.log(cart);
console.log(newcart)