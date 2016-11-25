import {logined,loginout} from '../constants/ActionType'

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
    /*
const root = (state=initialState,action) => {
    switch(action.type){
        case logined:
            return {
            isLogined: true
        };
        case loginout:
            return {
            isLogined:false
        }
    default:
        return state
    }
}

module.exports = root;
*/

export default handelEvent =(state=initialState,action) => {
    switch(action.type){
        case logined:
            return {
            isLogined: true,
            response: action.response
        };
        case loginout:
            return {
            isLogined:false
        }
    default:
        return state
    }
}

