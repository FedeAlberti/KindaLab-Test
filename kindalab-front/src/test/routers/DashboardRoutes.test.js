import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';


describe('Test on DashboardRoutes', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Fede'
        }
    }


    test('Should appear', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Fede');

    })
    

})
