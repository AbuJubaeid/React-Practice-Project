import { put, takeEvery } from 'redux-saga/effects';
import { product_Data, set_product } from "./constant";

function* getProductData(){
    let data = yield fetch("http://localhost:3000/products");
    data = yield data.json()
    yield put({type:set_product, data})

}

function* saga(){
    yield takeEvery(product_Data, getProductData)
}

export default saga