import { addtocart, emptycart, removefromcart } from "./constant"


const CartReducer = (data=[], action) => {
  switch(action.type){
        case addtocart:
        return [action.data, ...data]

        case removefromcart:
            const remainingItem = data.filter((item)=>item.id !==action.data)
        return [...remainingItem]

        case emptycart:
            data = []
        return [...data]
  default:
    return data
  }
}

export default CartReducer
