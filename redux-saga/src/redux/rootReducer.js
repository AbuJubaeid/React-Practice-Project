import { combineReducers } from 'redux'
import ProductReducer from './productReducer'
import CartReducer from './reducer'

export default combineReducers({
    CartReducer, ProductReducer
}    
)
