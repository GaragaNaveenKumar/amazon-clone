export let cart;

loadFromStorage();

 export function loadFromStorage(){
  cart=JSON.parse(localStorage.getItem('cart'));


if(!cart){
  cart=[{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
    deliveryOptionId:'1'
  },{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1,
    deliveryOptionId:'2'
  }];
}

}





// function to store cart items to local storage
export function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}


 //  function to add product to cart
  export function addToCart(productId){
    let matchingItem;

      cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem=cartItem;
        }
      });

      if(matchingItem){
        matchingItem.quantity+=1;
      }else{
        cart.push({
          productId:productId,
          quantity:1,
          deliveryOptionId:'1'
        });

      }
      saveToStorage();

    }

  
// fuction to remove product from cart
  export function removeFromCart(productId){
    let newCart=[];
    cart.forEach((cartItem)=>{
      if(cartItem.productId !==productId){
        newCart.push(cartItem);
      }
    });
    cart=newCart;
    saveToStorage();
  }


  // function to update delivery option
  export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;

      cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem=cartItem;
        }
      });

      matchingItem.deliveryOptionId=deliveryOptionId;

      saveToStorage();

  }


  export function loadCart(fun){
    const xhr=new XMLHttpRequest();
  
    xhr.addEventListener('load',()=>{

      console.log(xhr.response);
      
      console.log('loading products ...');
  
      fun();
  
    });
  
  
  
    xhr.open('GET','https://supersimplebackend.dev/cart');
    xhr.send();
  }