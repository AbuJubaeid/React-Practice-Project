import { setdata } from "./constant"


const ProductReducer = (data=[], action) => {
  switch(action.type){
    case setdata:
       return [...action.data]
  default:
    return data
  }

}
export default ProductReducer
