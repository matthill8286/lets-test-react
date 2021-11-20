import React from 'react';
import HooksForm1 from '../test_hook_form.js';
import {render, fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup)

describe('using react form ', () => {

    it('inputting text updates the state', () => {
        const {getByText, getByLabelText} = render(<HooksForm1/>);

        expect(getByText(/Change/i).textContent).toBe("Change: ")

        fireEvent.change(getByLabelText("Input Text:"), {target: {value: 'Text'}})

        expect(getByText(/Change/i).textContent).not.toBe("Change: ")
    })


    it('submitting a form works correctly', () => {
        const {getByTestId, getByText} = render(<HooksForm1/>);

        expect(getByText(/Submit Value/i).textContent).toBe("Submit Value: ")

        fireEvent.submit(getByTestId("form"), {target: {text1: {value: 'Text'}}})

        expect(getByText(/Submit Value/i).textContent).not.toBe("Submit Value: ")
    })
})
