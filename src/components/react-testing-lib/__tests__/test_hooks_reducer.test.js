import React from 'react';
import TestHookReducer from '../test_hook_reducer.js';
import {cleanup, fireEvent, render} from '@testing-library/react';
import * as Reducer from '../../store/reducer';
import * as ACTIONS from '../../store/actions';


afterEach(cleanup)


describe('test the reducer and actions', () => {
    it('should return the initial state', () => {
        expect(Reducer.initialState).toEqual({stateProperty1: false})
    })

    it('should change stateProperty1 from false to true', () => {
        expect(Reducer.Reducer1(Reducer.initialState, ACTIONS.SUCCESS))
            .toEqual({stateProperty1: true})
    })
})

it('Reducer changes stateProperty1 from false to true', () => {
    const {getByText} = render(<TestHookReducer/>);

    expect(getByText(/stateProperty1 is/i).textContent).toBe("stateProperty1 is false")

    fireEvent.click(getByText("Dispatch Success"))

    expect(getByText(/stateProperty1 is/i).textContent).toBe("stateProperty1 is true")
})
