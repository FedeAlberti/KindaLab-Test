import { AuthReducer } from "../../auth/AuthReducer"
import { typesAuth } from "../../types/typesAuth";

describe('Test on AuthReducer ', () => {
    
    test('Default State', () => {
        
        const state = AuthReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });

    })

    test('Authenticate and show name', () => {
        
        const action = {
            type: typesAuth.login,
            payload: {
                name: 'Fede'
            }
        }

        const state = AuthReducer({ logged: false }, action);
        expect( state ).toEqual({ 
            logged: true,
            name: 'Fede'
        });

    })

    test('Should delete name and log out', () => {
        
        const action = {
            type: typesAuth.logout
        }

        const state = AuthReducer({ logged: true, name: 'Fede' }, action);
        expect( state ).toEqual({ logged: false });

    })
    

})
