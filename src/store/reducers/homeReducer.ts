/**
 * @description 首页练习model
 * @author cq
 * @Date 2020-05-26 14:16:17
 * @LastEditTime 2020-05-27 17:16:59
 * @LastEditors cq
 */
import produce from 'immer';
import { HomeReducerState} from "../../ts-type/index"



type Action<P = any> = {
  type: string
  payload?: P
}


const initState: HomeReducerState= {
  homeList: [1,2,3,4]
}

const homeReducer = (state = initState, action: Action) => {
  const { payload, type } = action || {};
  switch (type) {
    case 'updateState':
      return {
        ...state,
        ...payload
      }
    case 'ADD_ITEM':
      return produce(state, draftState => {
        draftState.homeList.push(payload.item)
      })
    default:
      return state
  }
}
export default homeReducer
