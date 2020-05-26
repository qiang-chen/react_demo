/**
 * @description 首页练习model
 * @author cq
 * @Date 2020-05-26 14:16:17
 * @LastEditTime 2020-05-26 14:33:39
 * @LastEditors cq
 */
import produce from 'immer';

type Action<P = any> = {
  type: string
  payload?: P
}
type ImState = {
  list: string[]
}

const initState = {
  list: []
}

const homeReducer = (state: ImState, action: Action) => {
  const { payload, type } = action || {};
  switch (type) {
    case 'updateState':
      return {
        ...state,
        ...payload
      }
    case 'deleteItem':
      return produce(state, draftState => {
        const id = payload;
        const { list } = draftState;
        list.splice(3, 1);
      })
    default:
      return state
  }
}
export default homeReducer
