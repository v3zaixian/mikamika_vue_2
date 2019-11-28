import { SAVE_SHOPS } from './mutation-type'


export default {
  [SAVE_SHOPS](state, {allProduct}){
    state.allProduct = allProduct
  }

}