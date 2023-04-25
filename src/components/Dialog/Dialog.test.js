import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from './Dialog';

describe('Dialog', () => {
    const onClose = jest.fn();
    const title = 'Dialog Title';

    it('renders the title and body content', () => {
        render(
            <Dialog
                title={title}
                onClose={onClose}
                children={ <p>Dialog Body</p> }
            ></Dialog>
        );

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText('Dialog Body')).toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        render(
            <Dialog
                title={title}
                onClose={onClose}
                children={ <p>Dialog Body</p> }
            ></Dialog>
        );

        const closeButton = screen.getByTestId('close-details');

        fireEvent.click(closeButton);

        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
