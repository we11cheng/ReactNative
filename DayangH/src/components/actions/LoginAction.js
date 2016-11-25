import {logined,loginout} from '../constants/ActionType'

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
    type:logined
})

export const LoginOut = () => ({
    type: loginout
})
