import { SAVE_SHOPS } from './mutation-type'


export default {
  [SAVE_SHOPS](state, {shops}){
    state.shops = shops
  }

}