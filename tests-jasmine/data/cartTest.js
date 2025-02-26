import {addToCart,cart,loadFromStorage} from '../../data/cart.js';


describe('test suit: addToCart',()=>{
    it('adds a existing product  to cart',()=>{
        spyOn(localStorage,'setItem');

        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId:'3ebe75dc-64d2-4137-8860-1f5a963e534b',
                quantity:1,
                deliveryOptionId:'1'
            }]);
        });
        

        loadFromStorage();

        addToCart('3ebe75dc-64d2-4137-8860-1f5a963e534b');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('3ebe75dc-64d2-4137-8860-1f5a963e534b');
        expect(cart[0].quantity).toEqual(2);
        
    });

    
    it('adds a new product  to cart',()=>{

        spyOn(localStorage,'setItem');

        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
        

        loadFromStorage();

        addToCart('3ebe75dc-64d2-4137-8860-1f5a963e534b');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('3ebe75dc-64d2-4137-8860-1f5a963e534b');
        expect(cart[0].quantity).toEqual(1);
    });
});