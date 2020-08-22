import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom';

import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { typesAuth } from '../../../types/typesAuth';



describe('Test on Navbar', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Fede'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });
    
    test('Should appear', () => {
     
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Fede');

    });

    test('Should call logout', () => {
        
        wrapper.find('button').prop('onClick')();


        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: typesAuth.logout
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');

    })
    
    

})
