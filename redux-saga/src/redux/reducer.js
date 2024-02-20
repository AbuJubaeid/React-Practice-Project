import { add_to_cart, remove_from_cart } from "./constant"

const cartReducer=(data=[], action)=>{
    
        switch(action.type){
            case add_to_cart:
                return [action.data, ...data]
            case remove_from_cart:
                const remainingItems= data.filter((item)=>item.id!==action.data)
                return [...remainingItems]
        default:
                return data
        }
}
export default cartReducer
