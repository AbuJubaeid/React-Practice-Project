import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart';
import Header from './components/header';
import Main from './components/main';


function App() {
  return (
    <div>
       <Header/>
       <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>   
    </div>
    

  )
}

export default App;
