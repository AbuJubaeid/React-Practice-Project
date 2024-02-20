import { set_product } from "./constant";


const productReducer=(data=[],action)=>{
    switch(action.type){
        case set_product:
            return [...action.data]
    default:
        return data
    }
}

export default productReducer