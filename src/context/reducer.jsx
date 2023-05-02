export const stateHolder={
    SETCOUNT:'Set-Count',
    SETCART:'Set-Cart',
    REMOVECART:'Remove-Cart',
}
export const reducer=(state,action)=>{
    if(stateHolder.SETCOUNT===action.type){
        return {
            ...state,
            count:action.count
        }
    }
    else if(stateHolder.SETCART===action.type){
        return {
            ...state,
            cart:[...state.cart,action.cart]
        }
    }
    else if(stateHolder.REMOVECART===action.type){
        return {
            ...state,
            cart: state.cart.filter((item)=>item!==action.item)
        }
    }
}


//! A