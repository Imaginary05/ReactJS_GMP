import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import { MdClear } from 'react-icons/md';
import './Dialog.css';

export interface DialogProps {
    title: string | JSX.Element;
    onClose: () => void;
    children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
    title,
    onClose,
    children
}) => {
    const dialogContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dialogContainer.current && !dialogContainer.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return ReactDOM.createPortal(
        <FocusTrap focusTrapOptions={{
            fallbackFocus: '#close'
        }}>
            <div className='dialog-container'>
                <div className="dialog-wrapper" ref={dialogContainer}>
                    <div className='dialog-content'>
                        {
                            title && (
                                <h2 className="dialog-title">{title}</h2>
                            )
                        }
                        <div className="dialog-body">{children}</div>
                    </div>
                    <button id="close" className='dialog-popup-close'>
                        <MdClear
                            data-testid='close-details'
                            onClick={onClose}
                        ></MdClear>
                    </button>
                </div>
            </div>
        </FocusTrap>,
        document.body
    );
};

export default Dialog;

/*            <div className="dialog-overlay">
                <div className="dialog-container" ref={dialogContainer}>
                    <header className="dialog-header">
                        <h2 className="dialog-title">{title}</h2>
                        <button className="dialog-close-btn" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
                        </button>
                    </header>
                    <div className="dialog-body">{children}</div>
                </div>
            </div>
* */
