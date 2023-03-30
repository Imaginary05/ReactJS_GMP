// Test that component renders an input with
// the value equal to initial value passed in props
// Test that after typing to the input and a "click" event on the Submit button,
// the "onChange" prop is called with proper value
// Test that after typing to the input and pressing Enter key,
// the "onChange" prop is called with proper value
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
    it('renders the initial value provided in props', () => {
        const initialQuery = 'query';
        render(<SearchForm
                initialQuery={initialQuery}
                onSearch={() => {}}/>
        );

        const inputValue = screen.getByPlaceholderText(/What do you want to watch?/i);
        expect(inputValue).toHaveValue(initialQuery);
    })

    it('calls the onChange prop with the input value after a "click" event on the Submit button', () => {
        const onChange = jest.fn();
        render(<SearchForm
            initialQuery=''
            onSearch={onChange}/>
        );

        const input = screen.getByPlaceholderText(/What do you want to watch?/i);
        const submitButton = screen.getByText(/Search/i);
        const typedQuery = 'click';

        fireEvent.change(input, { target: { value: typedQuery } });
        fireEvent.click(submitButton);
        expect(onChange).toHaveBeenCalledWith(typedQuery);
    });

    it('calls the onChange prop with the input value after pressing Enter key', () => {
        const onChange = jest.fn();
        render(<SearchForm
            initialQuery=''
            onSearch={onChange}/>
        );
        const input = screen.getByPlaceholderText(/What do you want to watch?/i);
        const typedQuery = 'Enter';

        fireEvent.change(input, { target: { value: typedQuery } });
        fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });
        expect(onChange).toHaveBeenCalledWith(typedQuery);
    });
});
