/**
 * @description 仓库主体
 * @author cq
 * @Date 2020-05-26 14:13:04
 * @LastEditTime 2020-05-26 14:37:10
 * @LastEditors cq
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { createLogger } from "redux-logger"


//引入商品列表reducer
import homeReducer from "./reducers/homeReducer";


const reducers = combineReducers({ homeReducer });

//挂载日志

const logger = createLogger()

const store = createStore(reducers, applyMiddleware(thunk, logger))

export default store;