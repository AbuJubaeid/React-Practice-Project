import { Outlet } from "react-router-dom"
import MainNavbar from "../components/MainNavigation"

function Root (){
    return(
        <div>
            <MainNavbar/>
            <main>
                <Outlet/>
            </main>
        </div>
        
    )
}
export default Root