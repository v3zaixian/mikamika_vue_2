
import { SAVE_SHOPS } from './mutation-type'
import { getShop } from '../api'
export default {
    async getShopAction( { commit } ){
       let result = await getShop()
       if( result.code === 0 ) {
           commit(SAVE_SHOPS, {shops: result.data})
       }
    }
}