//import {logined,loginout} from '../constants/ActionType'
import * as types from '../constants/ActionType'

/*
export function LoginAction() {
    return {
        type: logined
    }
}
export function LoginOut() {
    return {
        type: loginout
    }
}
*/
export const LoginAction = () => ({
    type:types.logined
})

export const LoginOut = () => ({
    type: types.loginout
})
