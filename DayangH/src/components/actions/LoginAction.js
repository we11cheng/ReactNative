import {logined,loginout} from '../constants/ActionType'

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
