import React from 'react';
import TestHookContext from '../test_hook_context.js';
import {cleanup, fireEvent, render} from '@testing-library/react';
import App from '../../../App'

import Context from '../../store/context';

afterEach(cleanup)

describe('react context', () => {

    it('Context value is updated by child component', () => {

        const {getByText} = render(
            <App>
                <Context.Provider value={{changeTextProp: () => null, stateProp: ''}}>
                    <TestHookContext/>
                </Context.Provider>
            </App>
        );

        expect(getByText(/Some/i).textContent).toBe("Some Text")

        fireEvent.click(getByText("Change Text"))

        expect(getByText(/Some/i).textContent).toBe("Some Other Text")
    })

})
