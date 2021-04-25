import { ADD_TO_CART, CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer(state={cartItems:[]}, action){
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);
            if(product){
                return {
                    cartItems: 
                    state.cartItems.map(x => x.product === product.product ? item: x)
                };
            }
            return {...state, cartItems: [...state.cartItems, item]};
            default:
                return state
        
        case CART_REMOVE_ITEM:
            return {cartItems: state.cartItems.filter(x => x.product !== action.payload)}
    }
}
export {cartReducer}