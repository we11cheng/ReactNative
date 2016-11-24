import {logined} from '../constants/ActionType'

const initialState = {
    nameText:"",
    passText:"",
    isLogined:false,
    response: {
        "guardianId":"",
        "token":"",
        "type":""
            }
}
const login = (state=initialState,action) => {
    switch(action.type) {
        case logined: 
            return {
            isLogined:true
        } 
    default:
        return state
    }
}

module.exports = login;
