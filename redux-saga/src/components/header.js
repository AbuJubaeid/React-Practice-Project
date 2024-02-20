import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function Header (){
    const data = useSelector((state)=>state.cartReducer)

 return(
    <>
    <div><h2>DataHouse</h2></div>
    <div>
        <Link to="/cart">
            <span>{data.length}</span>
            <button>cart value</button>
        </Link>
    </div>
    </>
    
 )
}
export default Header