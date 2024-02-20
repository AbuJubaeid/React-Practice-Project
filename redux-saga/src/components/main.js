import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../redux/action"
import productData from "../redux/productAction"






const Main =()=>{
    const data = useSelector((state)=>state.productReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(productData())
      },[])
      
    return(
    <div>
        <div>
            {
                data.map((item)=> 
                <div key={item.id}>
                    <img src={item.photo} alt=""/>
                    <div>Name: {item.name}</div>
                    <div>Color: {item.color}</div>
                    <div>Price: {item.price}</div>
                    <div>Brand: {item.brand}</div>
                    <div>
                    <button onClick={()=>dispatch(addToCart(item))}>Add-To-Cart</button>
                    </div>
                    <button onClick={()=>dispatch(removeFromCart(item.id))}>Remove-From-Cart</button>
                </div>
                )
            }  
        </div>
        
    </div>
        
    )
}
export default Main