import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Cart =()=>{
    const data = useSelector((state)=>state.cartReducer)


    return(
        <div>
            <h1>Cart Product</h1>
            <Link to='/'>Back to Home Page</Link>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Color</td>
                    <td>Price</td>
                    <td>Brand</td>
                    <td>Category</td>
                </tr>
                {
                    data.map((item)=>
                    <tr key={item.key}>
                        <td>{item.name}</td>
                        <td>{item.color}</td>
                        <td>{item.price}</td>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                    </tr>)
                }
            </table>
        </div>
    )
}
export default Cart