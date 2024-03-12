import { addtocart, emptycart, removefromcart } from './constant'

export const AddToCart = (data) => {
  return ({
    type: addtocart,
    data
  }
  )
}
export const RemoveFromCart = (data) => {
    return ({
      type: removefromcart,
      data
    }
    )
  }
  export const EmptyCart = (data) => {
    return ({
      type: emptycart,
      data
    }
    )
  }
