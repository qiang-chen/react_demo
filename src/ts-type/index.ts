/**
 * @description ts规范
 * @author cq
 * @Date 2020-05-27 11:21:24
 * @LastEditTime 2020-05-27 14:51:31
 * @LastEditors cq
 */
import HomeReducerState from "./homeReducer"

interface RootState {
  homeReducer: HomeReducerState
}

export {
  // Use an empty export to please Babel's single file emit.
}

export {
  RootState,
  HomeReducerState
}


