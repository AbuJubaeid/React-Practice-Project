import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () =>{
    return async dispatch =>{
        const fetchData = async () => {
            const response = await fetch('https://cart-a4e3b-default-rtdb.firebaseio.com/cart.json')

            if(!response.ok){
                throw new Error('Fetching data failed')
            }

            const data = await response.json()
            return data
        }
        try{
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart({
                items:cartData.items || [],
                totalQuantity:cartData.totalQuantity
            }))
        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error', 
                title:'Error',
                message:'sending Cart Data failed'
              }))   
        }
    }
}



export const sendCartData = (cart) =>{
    return async(dispatch)=>{
        dispatch(uiActions.showNotification({
            status:'pending', 
            title:'pending',
            message:'sending Cart Data'
          }))

          const sendRequest = async () =>{
            const response = await fetch('https://cart-a4e3b-default-rtdb.firebaseio.com/cart.json', {method:'PUT',
            body:JSON.stringify({
                items:cart.items, 
                totalQuantity:cart.totalQuantity})})
       
            if(!response.ok){
             throw new Error('sending cart data failed')
            }
        }
        try{
            await sendRequest()

            dispatch(uiActions.showNotification({
                status:'success', 
                title:'success',
                message:'sent Cart Data successfully'
              }))

        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error', 
                title:'Error',
                message:'sending Cart Data failed'
              }))
        }
        
    }
}