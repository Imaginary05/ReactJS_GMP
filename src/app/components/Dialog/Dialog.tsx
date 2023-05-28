import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import FocusTrap from 'focus-trap-react'
import { MdClear } from 'react-icons/md'
import { useOutletContext } from 'react-router-dom'

export interface DialogProps {
  title: string | JSX.Element
  onClose: () => void
  children: React.ReactNode
}

const Dialog: React.FC = (
  // {
  // title,
  // onClose,
  // children
  // }
) => {
  const dialogContainer = useRef<HTMLDivElement | null>(null)
  const props = useOutletContext<DialogProps>()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if ((dialogContainer.current != null) && !dialogContainer.current.contains(event.target as Node)) {
        props.onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [props])

  return ReactDOM.createPortal(
        <FocusTrap focusTrapOptions={{
          fallbackFocus: '#close'
        }}>
            <div className='dialog-container' role='dialog'>
                <div className="dialog-wrapper" ref={dialogContainer}>
                    <div className='dialog-content'>
                        {
                            props.title && (
                                <h2 className="dialog-title">{props.title}</h2>
                            )
                        }
                        <div className="dialog-body">{props.children}</div>
                    </div>
                    <button id="close" className='dialog-popup-close'>
                        <MdClear
                            data-testid='close-details'
                            onClick={props.onClose}
                        ></MdClear>
                    </button>
                </div>
            </div>
        </FocusTrap>,
        document.body
  )
}

export default Dialog
