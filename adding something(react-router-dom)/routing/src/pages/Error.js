// import MainNavbar from "../components/MainNavigation";
import { useRouteError } from 'react-router-dom'
import MainNavigation from "../components/MainNavigation.js"
import PageContent from "../components/PageContent"

function ErrorPage(){
    //jodi amra error page theke ekti response pass kori tahole error object er sathe ekti status object add korte hobe(jemonta niche korsi status add kore) r jodi regular object pass kori tahole error object ti sorasori regular object k hold korbe 
    const error = useRouteError()

    let title = 'An error occured'
    let message = 'Something went wrong'

    if (error.status === 500){
        //jehetu response hisebe json data pass korsi tai ekhane data paite gele json data k extract kore data paite hobe...tai JSON.perse kore ekhane data extract korsi...
        // message = JSON.perse(error.data).message
        
        message = error.data.message   //json hook use koray JSON.parse kore data extract korar dorkar hoy na...
    }

    if (error.status === 404){
        title = 'Not found'
        message = 'Could not find message or page'
    }
    return (
        <>
        <MainNavigation/>
        <PageContent title={title}>
            <p>{message}</p>

         </PageContent></>
         
        // <div>
        //     <MainNavbar/>
        //     <main>
        //         <h1>An error occured</h1>
        //         <p>Can't find this page</p>
        //     </main>
        // </div>
    )
}
export default ErrorPage