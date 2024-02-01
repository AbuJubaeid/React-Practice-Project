import { Outlet } from 'react-router-dom';
import EventNavigation from "../components/EventNavigation";

function RootEvent(){
    return(
        <div>
            <EventNavigation/>
            <Outlet/>
        </div>
    )
}
export default RootEvent