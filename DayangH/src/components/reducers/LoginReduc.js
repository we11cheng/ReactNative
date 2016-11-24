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
const root = (state=initialState,action) => {
    switch(action.type){
        case logined:
            return Object.assign({},state,{isLogined:true})
        
    default:
        return state
    }
}

module.exports = root;

