export function getProduct(productId){
    let matchingItem;
              
    product.forEach((product) =>{
        if(productId === product.id){
            matchingItem = product
        }
    })

    return matchingItem;
}

export const product = [
    {   
        id: 0,
        name: `C2`,
        image: `images/C2.jpg`,
        price: 1990,
        quantity: 1,
        rating: {
            rate: 4.5,
            review: 100,
        }
    },
    {
        id: 1,
        name: `Piattos`,
        image: `images/piattos.jpg`,
        price: 2122,
        quantity: 1,
        rating: {
            rate: 4.5,
            review: 150,
        }
    },
    {
        id: 2,
        name: `Mars`,
        image: `images/mars.jpg`,
        price: 1300,
        quantity: 1,
        rating: {
            rate: 4.5,
            review: 123,
            }
    },
    {
        id: 3,
        name: `Coca-Cola`,
        image: `images/coca.jpg`,
        price: 1234,
        quantity: 1,
        rating: {
            rate: 4.5,
            review: 113,
            }
    }
]