
import { SAVE_SHOPS } from './mutation-type'
import { getAllProduct } from '../api'
export default {
    async getAllProductAction( { commit } ){
       let result = await getAllProduct()
       if( result.code === 0 ) {
           commit(SAVE_SHOPS, {allProduct: result.data})
       }
    }
}