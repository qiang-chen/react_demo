/**
 * @description 首页练习model
 * @author cq
 * @Date 2020-05-26 14:16:17
 * @LastEditTime 2020-05-27 14:23:06
 * @LastEditors cq
 */
import produce from 'immer';
import { HomeReducerState} from "../../ts-type/index"



type Action<P = any> = {
  type: string
  payload?: P
}
type ImState = {
  list: any[]
}

const initState: HomeReducerState= {
  list: [1,2,3,4]
}

const homeReducer = (state = initState, action: Action) => {
  const { payload, type } = action || {};
  switch (type) {
    case 'updateState':
      return {
        ...state,
        ...payload
      }
    case 'addItem':
      return produce(state, draftState => {
        draftState.list.push(payload.item)
      })
    default:
      return state
  }
}
export default homeReducer
