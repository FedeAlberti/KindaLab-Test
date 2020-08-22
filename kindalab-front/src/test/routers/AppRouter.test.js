import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Test on AppRouter', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }


    test('Should show Login', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        
    });


    test('Should show FoodComponent', () => {
        
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Fede'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe(true);
        

    })
    
    

})
