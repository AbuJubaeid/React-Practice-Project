import { add_to_cart, remove_from_cart } from "./constant"

export function addToCart (data){
    return ({
        type: add_to_cart,
        data
    }   
    )
}

export function removeFromCart (data){
    return ({
        type: remove_from_cart,
        data
    }   
    )
}
