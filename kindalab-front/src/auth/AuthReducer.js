import { typesAuth } from '../types/typesAuth';


export const AuthReducer = (state={}, action) =>{
    debugger
    switch (action.type) {
        case typesAuth.login:
            return {
                ...action.payload,
                logged:true,
            }

        case typesAuth.logout:
            return{
                logged:false
            }
    
        default:
            return state;
            
    }
}