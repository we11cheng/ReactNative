import { combineReducers } from 'redux'
import LoginReduc from './LoginReduc'

const rootReducer = combineReducers ({
    LoginReduc:LoginReduc
})

module.exports = rootReducer;
