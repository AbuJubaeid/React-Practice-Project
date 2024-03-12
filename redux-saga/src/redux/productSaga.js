import { put, takeEvery } from 'redux-saga/effects'
import { productdata, setdata } from "./constant"

function* getProduct(){
    let data = yield fetch('http://localhost:3000/products')
    data = yield data.json()
    yield put({type:setdata, data})
}

function* saga(){
    yield takeEvery(productdata, getProduct)
}
export default saga
