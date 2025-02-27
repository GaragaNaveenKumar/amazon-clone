function Cart(localStorageKey){

    const cart={
         cartItems:undefined,
    
        //  function to load cart data from local storage
         loadFromStorage(){
            this.cartItems=JSON.parse(localStorage.getItem(localStorageKey));
          
          
          if(!this.cartItems){
            this.cartItems=[{
              productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
              quantity:2,
              deliveryOptionId:'1'
            },{
              productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
              quantity:1,
              deliveryOptionId:'2'
            }];
          }
          
          },
          // function to store cart items to local storage
        saveToStorage(){
        localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
      },
       //  function to add product to cart
       addToCart(productId){
        let matchingItem;
    
          this.cartItems.forEach((cartItem)=>{
            if(productId===cartItem.productId){
              matchingItem=cartItem;
            }
          });
    
          if(matchingItem){
            matchingItem.quantity+=1;
          }else{
            this.cartItems.push({
              productId:productId,
              quantity:1,
              deliveryOptionId:'1'
            });
    
          }
          this.saveToStorage();
    
        },
        // fuction to remove product from cart
      removeFromCart(productId){
        let newCart=[];
        this.cartItems.forEach((cartItem)=>{
          if(cartItem.productId !==productId){
            newCart.push(cartItem);
          }
        });
        this.cartItems=newCart;
        this.saveToStorage();
      },
      // function to update delivery option
      updateDeliveryOption(productId,deliveryOptionId){
        let matchingItem;
    
          this.cartItems.forEach((cartItem)=>{
            if(productId===cartItem.productId){
              matchingItem=cartItem;
            }
          });
    
          matchingItem.deliveryOptionId=deliveryOptionId;
    
          this.saveToStorage();
    
      }
      
    
    };

    cart.loadFromStorage()
    return cart;
}




console.log(Cart("cart-oop"));
console.log(Cart("cart-business"));


  