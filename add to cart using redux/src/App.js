import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification.js';
// import { uiActions } from './store/ui-slice';
import { fetchCartData, sendCartData } from './store/cart-actions.js';


let isInitial= true;

function App() {
  const showCart = useSelector(state=>state.ui.cartIsVisible)
  const dispatch = useDispatch()

  const cart = useSelector(state=>state.cart)
  const notification = useSelector(state=>state.ui.notification)

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])


  useEffect(()=>{

    // component er moddhe action create...er poriborte thunk use kore o ei kajti kora jay.....ja cart-actions e kpra hoise.... 

    // const sendCartData = async() => {
      // dispatch(uiActions.showNotification({
      //   status:'pending', 
      //   title:'pending',
      //   message:'sending Cart Data'
      // }))
    //   const response = await fetch('https://cart-a4e3b-default-rtdb.firebaseio.com/cart.json', {method:'PUT',
    //  body:JSON.stringify(cart)})

    //  if(!response.ok){
    //   throw new Error('sending cart data failed')
    //  }
    //  dispatch(uiActions.showNotification({
    //   status:'success', 
    //   title:'success',
    //   message:'sent Cart Data successfully'
    // }))
    // }
    
    if(isInitial){
      isInitial= false;
      return
    }

    // sendCartData().catch(error=>{
      // dispatch(uiActions.showNotification({
      //   status:'error', 
      //   title:'Error',
      //   message:'sending Cart Data failed'
      // }))
    // })

    // thunk nije action object create na kore ekta function call kore jeti nije action object create kore... 

    if(cart.changed){
      dispatch(sendCartData(cart))
    }
    
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification 
      status={notification.status}
      title={notification.title}
      message={notification.message}/>}
    <Layout>
     {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
