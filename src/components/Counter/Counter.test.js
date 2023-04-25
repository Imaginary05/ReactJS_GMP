// Test that component renders initial value provided in props
// Test that a click event on "decrement" button decrements the displayed value
// Test that a click event on "increment" button increments the displayed value
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
    it('renders the initial value provided in props', () => {
        const initialCount = 5;
        render(<Counter initialCount={initialCount} />);

        const counterValue = screen.getByText(/Count:/i);
        expect(counterValue).toHaveTextContent(initialCount.toString());
    });

    it('decrements the displayed value when the decrement button is clicked', () => {
        const initialCount = 5;
        render(<Counter initialCount={initialCount} />);

        const decrementButton = screen.getByText(/Decrement/i);
        fireEvent.click(decrementButton);

        const counterValue = screen.getByText(/Count:/i);
        expect(counterValue).toHaveTextContent((initialCount - 1).toString());
    });

    it('increments the displayed value when the increment button is clicked', () => {
        const initialCount = 5;
        render(<Counter initialCount={initialCount} />);

        const incrementButton = screen.getByText(/Increment/i);
        fireEvent.click(incrementButton);

        const counterValue = screen.getByText(/Count:/i);
        expect(counterValue).toHaveTextContent((initialCount + 1).toString());
    });
});
